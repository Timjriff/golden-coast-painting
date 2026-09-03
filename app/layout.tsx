import type { Metadata } from 'next';
import './globals.css';
const origin = process.env.SITE_URL || 'https://golden-coast-painting-bgy7.vercel.app';
const title = 'Golden Coast Contractors | Interior & Exterior Painting';
const description = 'Beautiful spaces. Made golden. Interior and exterior painting for residential and commercial properties. Start your free estimate with Golden Coast Contractors.';
export const metadata: Metadata = {
 metadataBase:new URL(origin), title, description,
 robots:{index:process.env.SITE_LAUNCH_READY==='true',follow:process.env.SITE_LAUNCH_READY==='true'},
 alternates:{canonical:'/'},
 openGraph:{title,description,type:'website',siteName:'Golden Coast Contractors',url:'/',images:[{url:'/images/golden-coast-logo.jpg',width:512,height:382,alt:'Golden Coast Contractors — Beautiful spaces. Made golden.'}]},
 twitter:{card:'summary_large_image',title,description,images:['/images/golden-coast-logo.jpg']},
 icons:{icon:'/images/golden-coast-logo.jpg'},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}

