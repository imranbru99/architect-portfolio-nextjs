import { Metadata } from "next";
import Link from "next/link";
import { 
  Briefcase, Code2, Database, Users, Zap, Rocket, Shield, 
  Terminal, Server, Globe, Cpu, Award, GraduationCap, CheckCircle2,
  ArrowRight, Activity, GitMerge, Layout, Blocks
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Imran Ahmed | Senior Laravel & Next.js Architect",
  description: "Senior full-stack developer with 9+ years in Laravel APIs, Next.js, MySQL optimization, and AI automation.",
};

const metrics = [
  { label: "Years of Experience", value: "9+", icon: Activity },
  { label: "Projects Delivered", value: "100+", icon: Code2 },
  { label: "Clients Worldwide", value: "50+", icon: Globe },
  { label: "Code Reviews", value: "500+", icon: GitMerge },
];

const timeline = [
  {
    role: "AI Agent Builder & Trainer",
    company: "Outlier / Scale AI",
    period: "Apr 2026 – Present",
    points: [
      "Contracted for specialized AI training and agent architecture.",
      "Evaluating and optimizing LLM responses for complex coding and reasoning tasks.",
      "Building prompt engineering frameworks for automated problem-solving agents."
    ],
    Icon: Cpu,
  },
  {
    role: "Principal Software Engineer",
    company: "Blog Cutter AI",
    period: "Oct 2023 – Present",
    points: [
      "Architected an AI-powered SaaS and WordPress plugin handling 5,000+ automated operations daily.",
      "Designed highly scalable RESTful APIs using Laravel with JWT authentication and rate limiting.",
      "Integrated OpenAI and Claude APIs for intelligent content generation and section building.",
      "Optimized MySQL database queries, reducing load times by 40% across 1M+ records."
    ],
    Icon: Rocket,
  },
  {
    role: "Senior Laravel Developer",
    company: "DEVBAP",
    period: "Oct 2022 – May 2023",
    points: [
      "Developed enterprise-level Laravel applications using clean OOP design patterns.",
      "Built robust REST APIs consumed by reactive frontends (React/Next.js).",
      "Implemented role-based access control (RBAC) and complex OAuth2 flows.",
      "Reduced application load time by 35% through Redis caching and query profiling."
    ],
    Icon: Terminal,
  },
  {
    role: "Laravel Web Developer",
    company: "SONY IT",
    period: "Aug 2021 – Jul 2022",
    points: [
      "Built 15+ custom Laravel web applications including e-commerce, CRM, and HRM systems.",
      "Implemented Laravel Passport for secure authentication across microservices.",
      "Set up automated testing pipelines using PHPUnit and Laravel Dusk."
    ],
    Icon: Server,
  },
  {
    role: "WordPress & Web Team Leader",
    company: "BAHRN Org.",
    period: "Apr 2018 – Jun 2020",
    points: [
      "Led a team of 4 developers delivering 30+ custom WordPress projects.",
      "Built advanced custom plugins using strict OOP PHP patterns.",
      "Managed server architecture, Cloudflare WAF security, and CI/CD deployments."
    ],
    Icon: Users,
  },
  {
    role: "Web Developer",
    company: "Haldar & Cong",
    period: "Feb 2017 – Jan 2018",
    points: [
      "Maintained and optimized large-scale e-commerce catalogs.",
      "Implemented technical SEO strategies to achieve 90+ Core Web Vitals.",
      "Handled domain migrations, server setups, and SSL configurations."
    ],
    Icon: Briefcase,
  },
];

const techStack = [
  { category: "Backend Architecture", tools: ["Laravel 13+", "PHP 8.x", "Node.js", "REST / GraphQL"] },
  { category: "Modern Frontend", tools: ["Next.js 15", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Database & Cache", tools: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch"] },
  { category: "DevOps & Cloud", tools: ["AWS", "Docker", "GitHub Actions", "Laravel Forge"] },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Award className="h-4 w-4" /> Senior Lead Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">reliable products</span>, not just web pages.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              I am Imran Ahmed, a Senior Full-Stack Architect with over a decade of experience bridging the gap between heavy-lifting server infrastructure and lightning-fast user interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE METRICS (Stats) */}
      <section className="py-12 border-b border-white/5 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-950 border border-white/5 flex flex-col items-center justify-center text-center">
                <stat.icon className="h-8 w-8 text-blue-500 mb-4 opacity-80" />
                <span className="text-4xl font-black text-white mb-2">{stat.value}</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHILOSOPHY & BACKGROUND */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 space-y-6 text-lg text-slate-300 leading-relaxed">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-8">The Philosophy</h2>
            <p>
              Software is fundamentally about solving human problems. My academic background holding both a <strong>Master's (MSS)</strong> and <strong>Bachelor's (BSS) in Sociology</strong> has given me a unique lens through which to view technology. I don't just see databases and APIs; I see systems designed to scale businesses and streamline human workflows.
            </p>
            <p>
              For 9+ years, I have treated codebases like living ecosystems. Whether I am architecting a multi-tenant Laravel SaaS, injecting AI LLM agents into an existing product, or building a real-time React dashboard, my priority is clean architecture, absolute security, and measurable performance.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="p-8 rounded-3xl bg-blue-600/5 border border-blue-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Code2 className="w-32 h-32 text-blue-400" /></div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">How I approach a codebase:</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Treat websites like products: clear scope, careful UX, and maintainable logic.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Strict separation of concerns across the MVC layer.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Comfortable jumping into live, legacy projects to refactor safely.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE STRENGTHS */}
      <section className="py-24 bg-slate-900/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-12 text-center">Core Engineering Strengths</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Laravel APIs & Architecture", icon: Server },
              { title: "Next.js / React Interfaces", icon: Layout },
              { title: "MySQL Optimization", icon: Database },
              { title: "AI & LLM Integration", icon: Cpu },
              { title: "Speed & Core Web Vitals", icon: Zap },
              { title: "Enterprise Security Setup", icon: Shield },
            ].map((strength, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-white/5 flex items-center gap-4 group hover:border-blue-500/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <strength.icon className="h-6 w-6" />
                </div>
                <span className="font-semibold text-slate-200">{strength.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE TIMELINE */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">Professional Experience</h2>
          <p className="text-slate-400 mt-2">A decade of shipping production-grade software.</p>
        </div>

        <div className="space-y-12">
          {timeline.map((job, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-[39.5%] top-0 bottom-0 w-px bg-white/10" />
              
              <div className="md:grid md:grid-cols-12 gap-8 items-start relative">
                
                {/* Mobile Dot */}
                <div className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-blue-500 -ml-[5.5px] ring-4 ring-slate-950" />

                {/* Left side: Date & Company (Desktop) */}
                <div className="md:col-span-5 md:text-right mb-4 md:mb-0 relative">
                  {/* Desktop Dot */}
                  <div className="hidden md:block absolute right-[-2.25rem] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 z-10" />
                  
                  <h3 className="text-xl font-bold text-white">{job.company}</h3>
                  <p className="text-blue-400 font-medium text-sm mt-1">{job.period}</p>
                </div>

                {/* Right side: Role & Details */}
                <div className="md:col-span-7 bg-slate-900/40 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <job.Icon className="h-5 w-5 text-slate-400" />
                    <h4 className="text-lg font-bold text-white">{job.role}</h4>
                  </div>
                  <ul className="space-y-3">
                    {job.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500/50 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TECH STACK DIRECTORY */}
      <section className="py-24 bg-slate-900/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">Technology Stack</h2>
            <p className="text-slate-400 mt-2">The tools I use daily to build modern applications.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {techStack.map((stack, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-950 border border-white/5">
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <Blocks className="h-6 w-6 text-blue-500" />
                  <h3 className="text-lg font-bold text-white">{stack.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="px-4 py-2 text-sm font-medium rounded-xl bg-slate-900 border border-white/10 text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACADEMIC BACKGROUND */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="h-8 w-8 text-blue-500" />
          <h2 className="text-3xl font-bold text-white tracking-tight">Academic Background</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5">
            <div className="text-sm text-blue-400 font-bold tracking-wider uppercase mb-2">Postgraduate</div>
            <h3 className="text-xl font-bold text-white mb-2">Master of Social Science (MSS)</h3>
            <p className="text-slate-400">Major in Sociology</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5">
            <div className="text-sm text-blue-400 font-bold tracking-wider uppercase mb-2">Undergraduate</div>
            <h3 className="text-xl font-bold text-white mb-2">Bachelor of Social Science (BSS)</h3>
            <p className="text-slate-400">Major in Sociology</p>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-6">Let's build something scalable.</h2>
          <p className="text-xl text-slate-400 mb-10">
            Whether you need a legacy refactor or a brand new AI-integrated platform, I'm ready to help.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-105">
              <Link href="/contact">Start a Conversation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/10 bg-slate-900 text-white hover:bg-slate-800 font-bold text-lg">
              <Link href="/portfolio">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}