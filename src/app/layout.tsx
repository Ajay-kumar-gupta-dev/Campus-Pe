import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = {title:"CampusPe | Connect. Learn. Get Hired.",description:"Connecting students, colleges and recruiters for a faster campus-to-career journey."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}