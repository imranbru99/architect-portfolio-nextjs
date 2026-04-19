// app/portfolio/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPortfolios } from "@/lib/api";

export const metadata: Metadata = {
  title: "Portfolio | Projects by Imran Ahmed",
  description: "View selected Laravel SaaS apps, custom WordPress plugins, AI tools, and Next.js applications.",
};

export default async function PortfolioPage() {
  // Fetches from the Next.js server cache (updated once a day)
  const projects = await getPortfolios();

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      
      {/* Header Section */}
      <div className="max-w-3xl mb-16 relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 relative z-10">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Work</span>
        </h1>
        <p className="text-xl text-slate-400 font-light relative z-10">
          A collection of high-performance SaaS platforms, intelligent AI integrations, and scalable APIs.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          // Process tags from Laravel comma-separated string
          const tags = project.keyword ? project.keyword.split(",").map(k => k.trim()).slice(0, 3) : [];

          return (
            <Link 
              key={project.slug} 
              href={`/portfolio/${project.slug}`}
              className="group relative flex flex-col rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                {project.demo_image ? (
                  <img 
                    src={project.demo_image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900" />
                )}
                
                {/* Floating View Icon */}
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
                
                {/* Meta text if exists */}
                {project.meta && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">{project.meta}</p>
                )}
                
                <div className="flex-1" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}