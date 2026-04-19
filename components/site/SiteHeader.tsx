import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">Imran</span>
              <span className="text-xl font-light text-slate-400">Dev</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</Link>
            <Link href="/portfolio" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Portfolio</Link>
            <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</Link>
            <Link href="/websites" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Website</Link>
            <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Blog</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden sm:inline-flex border-slate-700 bg-transparent hover:bg-slate-800 text-slate-200">
              <Link href="https://github.com/imranbru99" target="_blank">GitHub</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}