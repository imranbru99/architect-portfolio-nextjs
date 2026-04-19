import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Ghost, Clock, Terminal, Zap, Cpu } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. DYNAMIC SEO GENERATION (Server-Side)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) return { title: "Entry Not Found | Imran Ahmed" };

  return {
    title: `${post.title} | Technical Journal`,
    description: post.description.replace(/<[^>]*>?/gm, '').substring(0, 160),
    openGraph: {
      type: 'article',
      authors: ['Imran Ahmed'],
    }
  };
}

// 2. MAIN COMPONENT
export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await getBlogPostBySlug(resolvedParams.slug);

  // GRACEFUL FALLBACK: Professional Senior Error UI
  if (!post) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-950 px-4">
        <div className="p-12 rounded-[3rem] bg-slate-900/40 border border-white/5 backdrop-blur-2xl text-center max-w-lg shadow-2xl">
          <Ghost className="h-16 w-16 text-slate-500 mx-auto mb-6 opacity-20" />
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Entry Not Found</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            The requested technical log could not be retrieved from the architectural database.
          </p>
          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-slate-950 pb-32">
      
      {/* 1. HERO HEADER (No Image - Typography Focused) */}
      <header className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden font-mono text-[12px] leading-none text-blue-500">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap mb-2">
              {"CONST_ARCHITECT = 'IMRAN_AHMED'; SYSTEM_STATUS = 'OPTIMIZED'; ".repeat(10)}
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-blue-400 transition-colors mb-12 bg-slate-900/50 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm group">
            <ArrowLeft className="mr-2 h-3 w-3 transition-transform group-hover:-translate-x-1" /> Return to Index
          </Link>
          
          <div className="flex items-center gap-3 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <Terminal className="h-3 w-3" /> Technical Log Entry
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-12">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 py-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-500/20">iA</div>
              <div>
                <p className="text-white font-bold text-sm">Imran Ahmed</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black">Principal Architect</p>
              </div>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-black uppercase tracking-widest">
                <Calendar className="h-3.5 w-3.5 text-blue-500" />
                {new Date(post.created_at).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-black uppercase tracking-widest">
                <Clock className="h-3.5 w-3.5 text-blue-500" />
                5 Min Read
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CONTENT AREA */}
      <div className="container mx-auto px-4 mt-20 max-w-4xl relative">
        {/* Subtle Vertical Progress Line Decor */}
        <div className="absolute left-[-40px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-white/5 to-transparent hidden xl:block" />

        {/* INDESTRUCTIBLE HTML RENDERING
            This section uses specific CSS selectors to force your raw API HTML into a premium theme.
        */}
        <div 
          className="prose prose-lg max-w-none
            [&_h1]:text-4xl [&_h1]:font-black [&_h1]:text-white [&_h1]:mb-8 [&_h1]:tracking-tighter
            [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-24 [&_h2]:mb-8 [&_h2]:border-b [&_h2]:border-white/10 [&_h2]:pb-4 [&_h2]:tracking-tight
            [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-blue-400 [&_h3]:mt-16 [&_h3]:mb-6
            [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-10 [&_p]:text-lg [&_p]:font-medium
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-10 [&_ul]:text-slate-300 [&_ul]:space-y-4 [&_ul]:marker:text-blue-500
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-10 [&_ol]:text-slate-300 [&_ol]:space-y-4
            [&_li]:leading-relaxed
            [&_strong]:text-white [&_strong]:font-black
            [&_pre]:bg-slate-900 [&_pre]:p-8 [&_pre]:rounded-[2rem] [&_pre]:border [&_pre]:border-white/10 [&_pre]:mb-12 [&_pre]:overflow-x-auto [&_pre]:shadow-2xl
            [&_code]:text-blue-300 [&_code]:bg-blue-500/10 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-lg [&_code]:text-sm [&_code]:font-mono
            [&_blockquote]:border-l-4 [&_blockquote]:border-blue-600 [&_blockquote]:pl-8 [&_blockquote]:italic [&_blockquote]:text-slate-400 [&_blockquote]:my-16 [&_blockquote]:text-xl [&_blockquote]:bg-white/5 [&_blockquote]:py-8 [&_blockquote]:pr-8 [&_blockquote]:rounded-r-3xl
            [&_table]:w-full [&_table]:mb-12 [&_table]:border-collapse [&_table]:text-sm md:[&_table]:text-base
            [&_th]:p-5 [&_th]:border-b [&_th]:border-white/20 [&_th]:bg-slate-900/80 [&_th]:text-white [&_th]:font-black [&_th]:text-left
            [&_td]:p-5 [&_td]:border-b [&_td]:border-white/5 [&_td]:text-slate-300"
          dangerouslySetInnerHTML={{ __html: post.description }} 
        />

        {/* 3. POST FOOTER / ENGAGEMENT */}
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] text-center sm:text-left">Article Classification</span>
            <div className="flex gap-2">
               <span className="text-blue-400 text-xs font-black bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">System Architecture</span>
               <span className="text-indigo-400 text-xs font-black bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">Scaling</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
               <p className="text-white font-bold text-sm">Found this useful?</p>
               <p className="text-slate-500 text-[10px] uppercase font-black">Share with your team</p>
            </div>
            <button className="h-14 w-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl group">
              <Share2 className="h-6 w-6 transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* 4. FINAL ARCHITECT CTA */}
        <div className="mt-24 p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5"><Cpu className="h-24 w-24" /></div>
          <h3 className="text-2xl font-bold text-white mb-4">Building something complex?</h3>
          <p className="text-slate-400 mb-8 max-w-xl">
            I am currently available for specialized architectural consulting and full-stack enterprise development.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-black uppercase text-xs tracking-[0.2em] bg-blue-600 px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
            Initiate Consultation <Zap className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}