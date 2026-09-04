'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play, Check } from 'lucide-react';
import { business } from '@/lib/business';
import { Button } from '@/components/ui/button';

export function PaintingHero() {
 const videoRef = useRef<HTMLVideoElement>(null);
 const [playing, setPlaying] = useState(false);
 const [failed, setFailed] = useState(false);
 useEffect(() => {
  const video = videoRef.current;
  if (!video) return;
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyPreference = () => {
   if (preference.matches) video.pause();
   else void video.play().catch(() => setPlaying(false));
  };
  applyPreference();
  preference.addEventListener('change', applyPreference);
  return () => { preference.removeEventListener('change', applyPreference); video.pause(); };
 }, []);
 function togglePlayback() {
  const video = videoRef.current;
  if (!video) return;
  if (video.paused) void video.play().catch(() => setPlaying(false));
  else video.pause();
 }
 return <section className="hero hero-cinema" aria-label="Golden Coast Painters">
  <div className="cinema-media" aria-hidden="true">
   <picture className="cinema-poster"><source media="(max-width: 760px)" srcSet="/images/painting-mobile-poster.jpg"/><img src="/images/painting-poster.jpg" alt="" fetchPriority="high"/></picture>
   <video ref={videoRef} className={failed?'cinema-video unavailable':'cinema-video'} poster="/images/painting-poster.jpg" muted loop playsInline preload="metadata" tabIndex={-1} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>{setFailed(true);setPlaying(false);}}><source media="(max-width: 760px)" src="/video/painting-mobile.mp4" type="video/mp4"/><source src="/video/painting-hero.mp4" type="video/mp4"/></video>
  </div>
  <div className="cinema-shade"/>
  <div className="hero-copy cinema-copy">
   <p className="eyebrow">RESIDENTIAL & COMMERCIAL PAINTING</p>
   <h1>A fresh coat.<br/>A <em>golden</em> finish.</h1>
   <p className="intro">Interior and exterior painting, thoughtfully done.<br className="desktop-break"/> Bring new life to your home or business with Golden Coast Painters.</p>
   <div className="cinema-actions"><a className="button" href="#quote">Get a Free Estimate <ArrowUpRight size={18}/></a><a className="text-link" href={business.phoneHref}>Call {business.phone} <ArrowUpRight size={17}/></a></div>
   <div className="hero-note"><Check size={16}/> Careful preparation <span>•</span> Beautiful finishes</div>
  </div>
  <div className="cinema-bottom"><a href="#services" className="cinema-scroll"><ArrowDown size={17}/><span>DISCOVER THE GOLDEN COAST DIFFERENCE</span></a><div className="cinema-playback"><span>Painting in motion</span>{!failed&&<Button variant="ghost" className="video-toggle" onClick={togglePlayback} aria-label={playing?'Pause background video':'Play background video'}>{playing?<Pause size={17}/>:<Play size={17}/>}</Button>}</div></div>
 </section>;
}

