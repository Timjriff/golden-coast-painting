import type { Metadata } from 'next';
import './globals.css';
const origin = process.env.SITE_URL || 'https://golden-coast-painting.timjriff.chatgpt.site';
const title = 'Golden Coast Painting | Interior & Exterior Painting';
const description = 'Beautiful spaces. Made golden. Interior and exterior painting for residential and commercial properties. Start your free estimate with Golden Coast Painting.';
export const metadata: Metadata = {
 metadataBase:new URL(origin), title, description,
 robots:{index:process.env.SITE_LAUNCH_READY==='true',follow:process.env.SITE_LAUNCH_READY==='true'},
 alternates:{canonical:'/'},
 openGraph:{title,description,type:'website',siteName:'Golden Coast Painting',url:'/',images:[{url:'/og.png',width:1536,height:1024,alt:'Golden Coast Painting — Beautiful spaces. Made golden.'}]},
 twitter:{card:'summary_large_image',title,description,images:['/og.png']},
 icons:{icon:'/favicon.svg'},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}

