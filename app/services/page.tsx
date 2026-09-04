import type { Metadata } from 'next';
import { ArrowUpRight, Check, Phone } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { business } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Painting Services | Golden Coast Paintings',
  description: 'Explore interior, exterior, residential, and commercial painting from Golden Coast Paintings. Plan your project and request a free estimate.',
  alternates: { canonical: '/services' },
  openGraph: { title: 'Painting Services | Golden Coast Paintings', description: 'Thoughtful painting for homes and businesses, inside and out.', url: '/services' },
};

const services = [
  {
    id: 'interior', number: '01', title: 'Interior painting', tagline: 'A new feeling in every room.', image: '/images/interior.jpg', alt: 'Bright living room with soft neutral walls and natural furnishings',
    intro: 'Color changes how a space feels. From a single room to an entire interior, Golden Coast Paintings helps you refresh the surfaces you live and work with every day. Think lighter living spaces, a more restful bedroom, or a welcoming place to meet clients.',
    items: ['Walls and ceilings in living rooms, bedrooms, and shared spaces', 'Kitchens, hallways, and other frequently used rooms', 'Doors, baseboards, and interior trim', 'Coordinated colors across adjoining rooms'],
    detail: 'A thoughtful interior plan considers the existing finish, the condition of each surface, and how the room is used. Preparation may include protecting floors and furnishings, filling minor surface imperfections, sanding, and priming where appropriate. We discuss the scope before painting begins.',
    planning: 'Tell us which rooms and surfaces you want painted, whether the space will be occupied, and any colors or finishes you have in mind.',
  },
  {
    id: 'exterior', number: '02', title: 'Exterior painting', tagline: 'A fresh welcome, from the outside in.', image: '/images/exterior.jpg', alt: 'Coastal-style home with a light exterior and contrasting architectural trim',
    intro: 'A considered exterior palette brings the whole property together. Refresh your home or commercial building with colors that complement its architecture, surrounding landscape, and existing features.',
    items: ['Whole-property exterior refreshes', 'Exterior walls and compatible painted surfaces', 'Doors and exterior trim', 'Coordinated main, trim, and accent colors'],
    detail: 'Exterior painting starts with understanding the surface. Existing coatings, exposed areas, access, and weather all influence the approach. Cleaning, removal of loose paint, sanding, caulking, and primer may be part of the agreed preparation. Product selection and timing should suit the material and conditions.',
    planning: 'Share the property type, number of stories, surfaces involved, and any peeling paint or areas of concern. A walkthrough helps define access and preparation needs.',
  },
  {
    id: 'residential', number: '03', title: 'Residential painting', tagline: 'Make your home feel like yours.', image: '/images/detail.jpg', alt: 'Inviting residential interior with white walls and warm wood details',
    intro: 'Your home is the backdrop to everyday life. Whether you are settling into a new space, updating a familiar room, or planning a whole-home refresh, we offer interior and exterior painting with attention to the details that tie your home together.',
    items: ['Single-room and multiple-room updates', 'Whole-home interior painting', 'Home exterior painting', 'Walls, ceilings, doors, and trim within the agreed scope'],
    detail: 'Planning around daily routines makes a residential project easier to manage. Discuss furniture, pets, room access, and the order of work before the project starts. We can talk through the colors you are considering and how different finishes relate to the surfaces in your home.',
    planning: 'Include your city, approximate project size, desired timing, and whether you need interior painting, exterior painting, or both.',
  },
  {
    id: 'commercial', number: '04', title: 'Commercial painting', tagline: 'A space that reflects your business.', image: '/images/commercial.jpg', alt: 'Open commercial workspace with bright walls and clean contemporary finishes',
    intro: 'The appearance of your property shapes the first impression of your business. Golden Coast Paintings offers interior and exterior painting for commercial spaces, helping create a cohesive environment for your team, customers, and visitors.',
    items: ['Offices and professional workspaces', 'Retail and customer-facing interiors', 'Shared areas and meeting spaces', 'Commercial building exterior refreshes'],
    detail: 'Commercial projects need a clear plan for access and operations. Discuss occupied areas, opening hours, furniture or equipment protection, and any building requirements. Phasing and scheduling options should be agreed as part of the project scope, along with the surfaces and finishes involved.',
    planning: 'Tell us about your business, the areas to be painted, access requirements, and any preferred working hours or target completion date.',
  },
];

export default function ServicesPage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader active="services" />
    <main id="main" className="services-page">
      <section className="services-intro">
        <div><a className="contact-back" href="/">Home / Our services</a><p className="eyebrow">GOLDEN COAST PAINTINGS</p><h1>Beautiful spaces.<br/><em>Inside and out.</em></h1><p>Interior and exterior painting for homes and businesses. Explore the possibilities, then let’s make a plan for your property.</p><a className="button" href="/contact">Get a Free Estimate <ArrowUpRight size={18}/></a></div>
        <img src="/images/interior.jpg" alt="Sunlit home interior with a soft, cohesive painted palette" width={900} height={800} fetchPriority="high"/>
      </section>
      <nav className="service-jump-nav" aria-label="Painting services">{services.map(s=><a key={s.id} href={`#${s.id}`}><span>{s.number}</span>{s.title}<ArrowUpRight size={17}/></a>)}</nav>
      {services.map(s=><section className="service-detail" id={s.id} key={s.id}>
        <div className="service-detail-image"><img src={s.image} alt={s.alt} width={900} height={1000} loading="lazy"/><span>{s.tagline}</span></div>
        <div className="service-detail-copy"><p className="eyebrow">{s.number} / OUR SERVICES</p><h2>{s.title}</h2><p className="service-lead">{s.intro}</p><h3>What we can help with</h3><ul>{s.items.map(item=><li key={item}><Check size={17} aria-hidden="true"/><span>{item}</span></li>)}</ul><h3>A thoughtful approach</h3><p>{s.detail}</p><div className="service-planning"><strong>For your estimate</strong><p>{s.planning}</p></div><a className="service-link" href="/contact">Discuss your {s.id} project <ArrowUpRight size={18}/></a></div>
      </section>)}
      <section className="services-scope"><p className="eyebrow">A CLEAR PLAN BEFORE THE FIRST COAT</p><h2>Know what’s included.</h2><p>Every property is different. Your written estimate should confirm the areas and surfaces to be painted, preparation, products and finishes, access arrangements, cleanup, and timing. Any repairs or additional work should be discussed and agreed before proceeding.</p><div><article><span>01</span><h3>Share your project</h3><p>Send the property location, surfaces, approximate size, and preferred timing.</p></article><article><span>02</span><h3>Review the details</h3><p>A walkthrough helps identify surface conditions and establish the painting scope.</p></article><article><span>03</span><h3>Agree on the plan</h3><p>Confirm the estimate, colors, preparation, and schedule before work begins.</p></article></div><small>Photography shown is for inspiration and does not represent completed company projects.</small></section>
      <section className="home-contact-banner"><div><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>Let’s talk about your space.</h2><p>Not sure where to start? Tell us what you would like to change.</p></div><div className="services-final-actions"><a className="button" href="/contact">Request a Free Estimate <ArrowUpRight size={18}/></a><a href={business.phoneHref}><Phone size={17}/> {business.phone}</a></div></section>
    </main><SiteFooter/>
  </>;
}
