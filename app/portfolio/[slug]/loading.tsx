// app/portfolio/[slug]/loading.tsx
import { Loader2 } from "lucide-react";

export default function LoadingPortfolioDetail() {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 bg-slate-950">
      <div className="container mx-auto px-4">
        
        {/* Loading Spinner */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 border border-white/10 shadow-lg shadow-blue-500/10">
            <Loader2 className="h-5 w-5 text-blue-400 animate-spin" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">
              Loading project data...
            </span>
          </div>
        </div>

        {/* Skeleton UI (Matches the premium layout) */}
        <div className="max-w-4xl mx-auto animate-pulse">
          <div className="h-16 md:h-24 bg-slate-900/80 rounded-2xl mb-8 border border-white/5" />
          
          <div className="flex gap-4 mb-16">
            <div className="h-8 w-32 bg-slate-900/80 rounded-full border border-white/5" />
            <div className="h-8 w-32 bg-slate-900/80 rounded-full border border-white/5" />
          </div>

          <div className="w-full aspect-video bg-slate-900/80 rounded-3xl mb-16 border border-white/5" />
          
          <div className="space-y-4">
            <div className="h-6 w-full bg-slate-900/80 rounded border border-white/5" />
            <div className="h-6 w-full bg-slate-900/80 rounded border border-white/5" />
            <div className="h-6 w-3/4 bg-slate-900/80 rounded border border-white/5" />
          </div>
        </div>

      </div>
    </div>
  );
}