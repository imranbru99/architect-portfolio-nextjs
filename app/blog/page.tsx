import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, AlertCircle, Terminal, Cpu, Zap } from "lucide-react";
import { getBlogPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Engineering Journal | Imran Ahmed - Principal Architect",
  description: "Senior-level insights on Laravel architecture, AI systems, and high-performance engineering.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-950 px-4">
        <div className="relative p-12 rounded-[3rem] bg-slate-900/40 border border-red-500/20 backdrop-blur-2xl text-center max-w-lg shadow-2xl">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-950 p-4 rounded-2xl border border-red-500/20 shadow-xl">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 mt-4 tracking-tight">System Connection Error</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            The Technical Journal API is currently unreachable. Please verify system status or return to the main dashboard.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all active:scale-95">
            Return to Dashboard <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 pb-32">
      {/* 1. ARCHITECT HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        {/* Abstract code-like background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none select-none overflow-hidden font-mono text-[10px] leading-none text-blue-500 mask-image-b">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap mb-1">
              {"010101011010 ARCHITECTURE_SYSTEM_SCALE_OPTIMIZE_010101011010 ".repeat(10)}
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Terminal className="h-3 w-3" /> Senior Engineering Journal
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Architectural</span> <br />
              Logbook.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Deep-dive technical documentation on scaling PHP systems, AI agent workflows, and full-stack performance optimization.
            </p>
          </div>
        </div>
      </section>

      {/* 2. JOURNAL GRID */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, idx) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col h-full rounded-[2.5rem] bg-slate-900/30 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.2)]"
            >
              {/* Card visual header (CSS-only decoration) */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-transparent opacity-50" />
              
              <div className="p-10 flex flex-col flex-1">
                {/* Meta Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 text-blue-500">
                      <Zap className="h-3 w-3" /> {idx === 0 ? "Latest Insight" : `Issue #0${posts.length - idx}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                    <Clock className="h-3 w-3" /> 5 MIN
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-blue-400 transition-colors tracking-tight">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-4 mb-10 font-medium">
                  {post.description.replace(/<[^>]*>?/gm, '')}
                </p>

                {/* Card Footer */}
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-[11px] font-black text-white/40 uppercase tracking-tighter">
                     <Calendar className="h-3 w-3" /> {new Date(post.created_at).toLocaleDateString("en-US", { month: 'short', year: 'numeric' })}
                   </div>
                   <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                     <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
                   </div>
                </div>
              </div>

              {/* Subtle hover glow inside card */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      {/* 3. NEWSLETTER / FOOTER NOTE */}
      <section className="mt-32 container mx-auto px-4 max-w-4xl">
        <div className="p-12 rounded-[3rem] border border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-950 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Cpu className="h-32 w-32" /></div>
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Need a customized engineering deep-dive?</h2>
          <p className="text-slate-400 mb-8">I regularly consult on system architecture and high-scale migrations.</p>
          <Link href="/contact" className="text-blue-400 font-black uppercase text-xs tracking-[0.2em] border-b-2 border-blue-500/20 pb-1 hover:border-blue-500 transition-all">
            Initiate Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}