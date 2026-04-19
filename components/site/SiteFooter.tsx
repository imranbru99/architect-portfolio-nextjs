import { Mail, MapPin, Sparkles, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { 
  FaGithub, FaLinkedin, FaXTwitter, FaInstagram, 
  FaFacebook, FaWhatsapp, FaYoutube, FaTiktok, FaPinterest 
} from "react-icons/fa6";
import { SiThreads, SiLinktree } from "react-icons/si";
import Link from "next/link";

export default function SiteFooter() {
  const socialLinks = [
    { icon: FaXTwitter, href: "https://x.com/imrandev_bd", label: "X" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/imranbru99", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/imranbru99", label: "GitHub" },
    { icon: FaYoutube, href: "https://www.youtube.com/@imranbru99", label: "Dev Journal" },
    { icon: FaYoutube, href: "https://www.youtube.com/@aicodingboy", label: "AI Lab" },
    { icon: FaWhatsapp, href: "http://wa.me/+8801576918420", label: "WhatsApp" },
    { icon: FaInstagram, href: "https://www.instagram.com/imranbru99/", label: "Instagram" },
    { icon: SiThreads, href: "https://www.threads.com/@imranbru99", label: "Threads" },
    { icon: FaFacebook, href: "https://www.facebook.com/aicodingboy/", label: "Facebook" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@imrandev_bd", label: "TikTok" },
    { icon: FaPinterest, href: "https://www.pinterest.com/imrandev_bd/", label: "Pinterest" },
    { icon: SiLinktree, href: "https://linktr.ee/aicodingboy", label: "Linktree" },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-slate-950 pt-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          {/* 1. BRAND & BIO SECTION */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase italic">
                Imran<span className="text-blue-500">.</span>Dev
              </Link>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                Principal Software Engineer and Architect specializing in <span className="text-white font-medium">high-scale enterprise systems</span>. 
                With 9+ years of expertise, I engineer resilient backend infrastructures and intelligent AI automation 
                pipelines that power global digital products.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 items-center">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Contact Inquiries</p>
                <a href="mailto:me@imrandev.bd" className="text-white font-bold hover:text-blue-400 transition-colors flex items-center gap-2">
                  me@imrandev.bd <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Current Location</p>
                <p className="text-white font-bold flex items-center gap-2">
                  Rangpur, BD <span className="text-slate-500 font-medium">/ Remote Worldwide</span>
                </p>
              </div>
            </div>
          </div>

          {/* 2. NAVIGATION LINKS */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Architecture</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-wider">Expertise</Link></li>
              <li><Link href="/portfolio" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-wider">Case Studies</Link></li>
              <li><Link href="/websites" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-wider">Showcase</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-wider">Technical Journal</Link></li>
            </ul>
          </div>

          {/* 3. STATUS SECTION */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Project Status</h3>
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-green-500 uppercase tracking-widest">Available for hire</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Now accepting select enterprise refactors and AI integration contracts for Q3-Q4 2026.
              </p>
              <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
                Initiate Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* 4. PREMIUM SOCIAL RIBBON (Desktop Only) */}
        <div className="hidden lg:block border-t border-white/5 py-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 border border-white/5 text-slate-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-4 mb-2">
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <ShieldCheck className="h-3 w-3 text-blue-500" /> Secure Architecture
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                  <Zap className="h-3 w-3 text-blue-500" /> High Performance
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                © {new Date().getFullYear()} <span className="text-slate-400">Imran Ahmed</span> — System Architecture & Engineering.
              </p>
            </div>
          </div>
        </div>

        {/* 5. MOBILE FOOTER (Simple) */}
        <div className="lg:hidden border-t border-white/5 py-12 text-center">
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://github.com/imranbru99" className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-slate-400"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/imranbru99" className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-slate-400"><FaLinkedin /></a>
            <a href="http://wa.me/+8801576918420" className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-slate-400"><FaWhatsapp /></a>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
            © {new Date().getFullYear()} Imran Ahmed • Principal Architect
          </p>
        </div>

      </div>
    </footer>
  );
}