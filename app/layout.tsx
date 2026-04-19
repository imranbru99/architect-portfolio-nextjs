import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/site/SiteLayout";
// FIX: Import the new Sonner Toaster
import { Toaster } from "@/components/ui/sonner"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Imran Ahmed | Senior Full-Stack Developer",
  description: "9+ years of experience in Laravel, Next.js, and AI automation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-slate-950 text-slate-50 selection:bg-blue-500/30`}>
        <SiteLayout>
          {children}
        </SiteLayout>
        
        {/* FIX: Add the Sonner Toaster here with a dark theme setting */}
        <Toaster theme="dark" richColors position="bottom-right" />
      </body>
    </html>
  );
}