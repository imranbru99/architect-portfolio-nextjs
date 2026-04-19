"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Sparkles, ArrowUpRight, Search, Code2, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Website {
  domain: string;
  category: string;
  description?: string;
}

const laravelWebsites: Website[] = [
  { domain: "asianmealservice.co.uk", category: "E-commerce", description: "Food delivery platform" },
  { domain: "seasonalvibes.uk", category: "E-commerce", description: "Seasonal products store" },
  { domain: "TheGentlemansCode.co.uk", category: "Blog", description: "Lifestyle blog" },
  { domain: "wiseacademy.org.uk", category: "Education", description: "Online learning platform" },
  { domain: "devbap.com", category: "Portfolio", description: "Developer portfolio" },
  { domain: "zerocent.uk", category: "E-commerce", description: "Zero-waste marketplace" },
  { domain: "blocutter.com", category: "SaaS", description: "Content management tool" },
  { domain: "tradecapai.com", category: "Business", description: "Trade services platform" },
  { domain: "teslaltd.com", category: "Corporate", description: "Business website" },
  { domain: "dealancer.cloud", category: "SaaS", description: "Freelance platform" },
  { domain: "classenjoy.com", category: "E-commerce", description: "Classified ads" },
  { domain: "BDFolio.com", category: "Portfolio", description: "Portfolio showcase" },
  { domain: "SylhetOnlineStore.com", category: "E-commerce", description: "Online store" },
  { domain: "Shaajo.com", category: "E-commerce", description: "Online marketplace" },
  { domain: "TAMSBD.com", category: "Management", description: "School management system" },
  { domain: "kpsallahabad.org", category: "Education", description: "School website" },
  { domain: "cdexpress.com", category: "Logistics", description: "Courier service" },
  { domain: "dolil.com", category: "Business", description: "Business directory" },
  { domain: "trusteddollarbuysell.com", category: "E-commerce", description: "Buy & sell platform" },
  { domain: "bazidhori.com", category: "News", description: "News portal" },
  { domain: "Sylhetos.com", category: "News", description: "News website" },
  { domain: "pinnaclesolutionsint.com", category: "Business", description: "Business solutions" },
  { domain: "zastcraft.com", category: "E-commerce", description: "Craft marketplace" },
  { domain: "WilcomStock.com", category: "E-commerce", description: "Stock platform" },
  { domain: "Deeppik.com", category: "AI", description: "AI platform" },
  { domain: "extrajob.com", category: "Job Portal", description: "Job listing site" },
  { domain: "sazibacademy.com", category: "Education", description: "Online academy" },
  { domain: "ryterpilot.com", category: "SaaS", description: "SaaS platform" },
  { domain: "survey22.com", category: "SaaS", description: "Survey platform" },
  { domain: "d2tk.com", category: "E-commerce", description: "E-commerce platform" },
  { domain: "cwd.in", category: "Business", description: "Business website" },
  { domain: "tkkamai.com", category: "E-commerce", description: "E-commerce platform" },
  { domain: "insuge.com", category: "Insurance", description: "Insurance platform" },
  { domain: "isliq.com", category: "E-commerce", description: "E-commerce platform" },
  { domain: "helthwe.com", category: "Healthcare", description: "Healthcare platform" },
  { domain: "pethep.com", category: "E-commerce", description: "Pet store" },
  { domain: "earnfromads.com", category: "Blog", description: "Money making blog" },
  { domain: "reviewofu.com", category: "Reviews", description: "Product reviews" },
  { domain: "wpsolution.us", category: "Business", description: "WordPress solutions" },
  { domain: "jobsyq.com", category: "Job Portal", description: "Job search platform" },
  { domain: "appproerp.com", category: "SaaS", description: "ERP solution" },
  { domain: "ccshopsi.com", category: "E-commerce", description: "E-commerce platform" },
  { domain: "lifefh.com", category: "Blog", description: "Lifestyle blog" },
  { domain: "savemedhabd.org", category: "NGO", description: "Non-profit organization" },
];

const wordpressWebsites: Website[] = [
  { domain: "kitchenscholar.com", category: "Blog", description: "Recipe & food blog" },
  { domain: "ladiessoul.com", category: "Blog", description: "Lifestyle blog for women" },
  { domain: "gardenwoker.com", category: "Blog", description: "Gardening tips & guides" },
  { domain: "motiavatar.com", category: "Portfolio", description: "Photography portfolio" },
  { domain: "nurpost.com", category: "News", description: "News portal" },
  { domain: "eduafa.com", category: "Education", description: "Educational platform" },
  { domain: "dogcuty.com", category: "Blog", description: "Pet care blog" },
  { domain: "insurancedrift.com", category: "Blog", description: "Insurance guide" },
  { domain: "barhn.org", category: "NGO", description: "Non-profit organization" },
  { domain: "somporko.net", category: "News", description: "News aggregator" },
  { domain: "ssss.org", category: "News", description: "News website" },
  { domain: "reviewofu.com", category: "Reviews", description: "Product reviews" },
  { domain: "earnfromads.com", category: "Blog", description: "Money making blog" },
  { domain: "benuj.com", category: "Blog", description: "Personal blog" },
  { domain: "wpsolutionus.com", category: "Business", description: "Service website" },
  { domain: "animalscholar.com", category: "Blog", description: "Animal care blog" },
  { domain: "gardendrift.com", category: "Blog", description: "Garden blog" },
  { domain: "chattogram-tv.com", category: "News", description: "Television news portal" },
  { domain: "rangpurdaily.com", category: "News", description: "Daily news newspaper" },
  { domain: "gardenbeta.com", category: "Blog", description: "Garden blog" },
  { domain: "ojanatech.com", category: "Business", description: "Tech services" },
  { domain: "alltoolfact.com", category: "Blog", description: "Tools reviews" },
  { domain: "outdoorattempt.com", category: "Blog", description: "Outdoor adventure blog" },
  { domain: "gardenafa.com", category: "Blog", description: "Garden tips" },
  { domain: "animaltipes.com", category: "Blog", description: "Animal information blog" },
  { domain: "carnuna.com", category: "E-commerce", description: "Car marketplace" },
  { domain: "chapai-mango.com", category: "E-commerce", description: "Mango sales" },
  { domain: "curryhut-e17.uk", category: "Restaurant", description: "Indian restaurant UK" },
  { domain: "emdadullah.com", category: "Portfolio", description: "Personal portfolio" },
  { domain: "fakrul.co.uk", category: "Portfolio", description: "Portfolio UK" },
  { domain: "laam-global.com", category: "E-commerce", description: "Global marketplace" },
  { domain: "meatbangla.com", category: "E-commerce", description: "Food delivery" },
  { domain: "medi360.agency", category: "Business", description: "Media agency" },
  { domain: "munshisaabbd.com", category: "News", description: "News portal Bangladesh" },
  { domain: "rupannitaplus.com", category: "News", description: "News & media" },
  { domain: "shariyaruqiyacentre.uk", category: "Business", description: "Business UK" },
  { domain: "techworld-e1.uk", category: "Blog", description: "Tech blog UK" },
  { domain: "sonyit.com", category: "Business", description: "IT services" },
  { domain: "brandtrend.eu", category: "Business", description: "European business" },
  { domain: "cholomanbd.com", category: "E-commerce", description: "Online store Bangladesh" },
  { domain: "lifefh.com", category: "Blog", description: "Lifestyle blog" },
  { domain: "tricklearn.com", category: "Education", description: "Learning platform" },
  { domain: "travelingera.com", category: "Blog", description: "Travel blog" },
  { domain: "alherafoundatin.org", category: "NGO", description: "Non-profit foundation" },
  { domain: "top7x.com", category: "Blog", description: "Top lists blog" },
];

function WebsiteCard({ website }: { website: Website }) {
  return (
    <a
      href={`https://${website.domain}`}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 transition-colors group-hover:bg-blue-500/10 group-hover:border-blue-500/20">
            <Globe className="h-5 w-5 text-slate-400 transition-colors group-hover:text-blue-400" />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/50 border border-white/5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <ArrowUpRight className="h-4 w-4 text-blue-400" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 truncate group-hover:text-blue-400 transition-colors">
          {website.domain}
        </h3>

        <div className="mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-950 border border-white/10 text-slate-300 group-hover:border-blue-500/20 transition-colors">
            {website.category}
          </span>
        </div>

        {website.description && (
          <p className="mt-auto text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {website.description}
          </p>
        )}
      </div>
    </a>
  );
}

export default function WebsitesShowcase() {
  const [activeTab, setActiveTab] = useState<"laravel" | "wordpress">("laravel");
  const [searchQuery, setSearchQuery] = useState("");

  const websites = activeTab === "laravel" ? laravelWebsites : wordpressWebsites;
  
  const filteredWebsites = websites.filter(site =>
    site.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
    site.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Production-Ready Projects
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Websites built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              global scale.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            A curated showcase of nearly 100 modern web applications developed with Laravel and WordPress, focused on performance, security, and high conversion.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-300">
              <Code2 className="h-4 w-4 text-blue-400" /> Laravel + Next.js
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-300">
              <LayoutTemplate className="h-4 w-4 text-indigo-400" /> Custom WordPress
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS BANNER */}
      <section className="border-b border-white/5 bg-slate-900/30 py-10 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/5">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white mb-1">100+</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white mb-1">60+</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white mb-1">15+</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Countries</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-white mb-1">9+</span>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Exp</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE GRID */}
      <section className="py-20 container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Controls Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Custom Pill Tabs */}
          <div className="flex p-1.5 rounded-full bg-slate-900/80 border border-white/5 backdrop-blur-sm w-full lg:w-auto">
            <button
              onClick={() => setActiveTab("laravel")}
              className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "laravel"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Code2 className="h-4 w-4" /> Laravel 
              <span className="ml-1 opacity-60 text-xs hidden sm:inline">({laravelWebsites.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("wordpress")}
              className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === "wordpress"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutTemplate className="h-4 w-4" /> WordPress
              <span className="ml-1 opacity-60 text-xs hidden sm:inline">({wordpressWebsites.length})</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search domains or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-full bg-slate-900/80 border border-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all backdrop-blur-sm"
            />
          </div>

        </div>

        {/* Dynamic Grid */}
        {filteredWebsites.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredWebsites.map((website) => (
              <WebsiteCard key={website.domain} website={website} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-white/5 rounded-3xl bg-slate-900/20">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 border border-white/10">
              <Search className="h-6 w-6 text-slate-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No websites found</h3>
            <p className="text-slate-400 mb-6">We couldn't find any results matching "{searchQuery}"</p>
            <Button 
              onClick={() => setSearchQuery("")} 
              variant="outline"
              className="rounded-full border-white/10 bg-slate-950 text-white hover:bg-slate-800"
            >
              Clear Search
            </Button>
          </div>
        )}
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Need a reliable architecture?</h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            These domains represent millions of lines of code and massive global traffic. Let's discuss how we can build your next project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl transition-transform hover:scale-105 w-full sm:w-auto">
              <Link href="/contact">Get in Touch Today</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}