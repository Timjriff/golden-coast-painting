'use client';
import {useEffect,useState} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
const nav = [['Our services','/services'],['Our work','/#projects'],['Why Golden Coast','/#about'],['FAQs','/#faq'],['Contact','/contact']];
export function Brand(){return <a className="brand" href="/" aria-label="Golden Coast Painters home"><span className="brand-mark" aria-hidden="true"><img src="/images/golden-coast-logo-transparent.png" width={1586} height={992} alt="" fetchPriority="high"/></span><span>GOLDEN COAST<small>PAINTERS</small></span></a>}
export function SiteHeader({home=false,active='contact'}:{home?:boolean;active?:'contact'|'services'}){
 const [menu,setMenu]=useState(false);
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>36);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
 return (<header className={!home || scrolled || menu ? "header is-scrolled" : "header over-hero"} id="top"><Brand/><nav aria-label="Main navigation">{nav.map(([label,href])=><a key={href} href={href} aria-current={!home && href===`/${active}` ? 'page' : undefined}>{label}</a>)}</nav><a className="button" href="/contact#quote">Get a Free Estimate <ArrowUpRight size={18}/></a><Button className="menu-button" variant="ghost" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} aria-controls="mobile-nav" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</Button>{menu&&<nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...nav,['Get a Free Estimate','/contact#quote']].map(([label,href])=><a key={href} href={href} aria-current={!home && href===`/${active}` ? 'page' : undefined} onClick={()=>setMenu(false)}>{label}<ArrowUpRight size={17}/></a>)}</nav>}</header>);
}
