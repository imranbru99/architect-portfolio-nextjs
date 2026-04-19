import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Layers, Code2, Eye } from "lucide-react";
import { getPortfolioBySlug } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Dynamic SEO Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getPortfolioBySlug(resolvedParams.slug);
  
  if (!project) return { title: "Project Not Found | Imran Ahmed" };

  return {
    title: `${project.title} | Imran Ahmed`,
    description: project.description ? project.description.replace(/<[^>]*>?/gm, '').substring(0, 155) + '...' : "Portfolio case study by Imran Ahmed.",
    keywords: project.keyword || "laravel portfolio, react project, case study, web development",
    openGraph: {
      images: project.image ? [project.image] : [],
    }
  };
}

// 2. The Main Component
export default async function PortfolioDetail({ params }: Props) {
  const resolvedParams = await params;
  
  // Fetches data (with the 3x retry logic)
  const p = await getPortfolioBySlug(resolvedParams.slug);

  // GRACEFUL FALLBACK
  if (!p) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-slate-950 pt-24">
        <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-md text-center max-w-lg shadow-2xl">
          <div className="h-16 w-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code2 className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Project Unavailable</h2>
          <p className="text-slate-400 mb-8">
            Sorry, we couldn't load this portfolio project right now. The server might be busy or the project may have been moved.
          </p>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <article className="min-h-screen pb-24 bg-slate-950">
      
      {/* 1. HERO SECTION (Premium Blurred Background) */}
      <div className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-white/5">
        {p.image && (
          <div 
            className="absolute inset-0 opacity-20 blur-3xl scale-110 pointer-events-none"
            style={{ backgroundImage: `url(${p.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors mb-8 group bg-slate-900/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm w-fit">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {p.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-y-4 gap-x-8 mt-8 border-y border-white/10 py-6">
              {p.created_at && (
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <span className="font-medium">{formatDate(p.created_at)}</span>
                </div>
              )}
              {p.meta && (
                <div className="flex items-center gap-2 text-slate-300">
                  <Layers className="h-5 w-5 text-blue-400" />
                  <span className="uppercase tracking-widest text-sm font-bold">{p.meta}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        
        {/* 2. MAIN THUMBNAIL */}
        {p.image && (
          <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 mb-16 relative bg-slate-900">
            <img src={p.image} alt={`${p.title} thumbnail`} className="w-full object-cover aspect-video opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        )}

        {/* 3. HTML CONTENT SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
            <Code2 className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Project Overview</h2>
          </div>
          
          {/* THE FIX: Indestructible Custom HTML Rendering 
              We use direct child selectors ([&_tag]) to override Tailwind's resets.
              This guarantees bullets, headings, and tables look incredible even if plugins fail.
          */}
          <div 
            className="prose prose-lg max-w-none
              [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:text-white [&_h1]:mb-6
              [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:border-b [&_h2]:border-white/10 [&_h2]:pb-4
              [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-blue-400 [&_h3]:mt-10 [&_h3]:mb-4
              [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-6
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-slate-300 [&_ul]:space-y-3 [&_ul]:marker:text-blue-500
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:text-slate-300 [&_ol]:space-y-3
              [&_li]:leading-relaxed
              [&_strong]:text-white [&_strong]:font-semibold [&_b]:text-white [&_b]:font-semibold
              [&_table]:w-full [&_table]:mb-8 [&_table]:border-collapse [&_table]:text-sm md:[&_table]:text-base
              [&_th]:p-4 [&_th]:border-b [&_th]:border-white/20 [&_th]:bg-slate-900/80 [&_th]:text-white [&_th]:font-bold [&_th]:text-left
              [&_td]:p-4 [&_td]:border-b [&_td]:border-white/5 [&_td]:text-slate-300
              [&_img]:rounded-3xl [&_img]:my-8 [&_img]:border [&_img]:border-white/10 [&_img]:shadow-2xl
              [&_a]:text-blue-400 [&_a]:underline hover:[&_a]:text-blue-300"
            dangerouslySetInnerHTML={{ __html: p.description || "<p>No description provided.</p>" }} 
          />
        </div>

        {/* 4. DEMO IMAGE SECTION */}
        <div className="mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 bg-blue-500 rounded-full" />
            <h2 className="text-3xl font-bold text-white tracking-tight">Full Preview</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-2 shadow-2xl overflow-hidden">
            {p.demo_image ? (
              <img
                src={p.demo_image}
                alt="Full Project Demo"
                className="w-full rounded-2xl object-contain border border-white/5"
              />
            ) : (
              <div className="flex h-64 items-center justify-center bg-slate-950 rounded-2xl text-slate-500 border border-white/5">
                <Eye className="mr-2 h-5 w-5 opacity-50" /> No Demo Preview Available
              </div>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}