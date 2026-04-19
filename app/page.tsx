import Link from "next/link";
import { 
  ArrowRight, Server, LayoutTemplate, Cpu, ShieldCheck, Zap, Terminal, Database, 
  ChevronRight, Code2, Globe, AppWindow, Check, FileSearch, Rocket, Users, Activity, 
  Clock, Award, Star, Quote, MessageCircleQuestion 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 overflow-hidden">
      
      {/* =========================================
          1. HERO SECTION 
      ========================================= */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-20 pb-16 px-4">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-[100%] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md shadow-2xl">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Lead Engineering Roles & Consulting
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1]">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">Enterprise</span> <br className="hidden md:block" />
            Web Architecture.
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            I am Imran Ahmed, a Senior Full-Stack Architect with 9+ years of experience. I bridge the gap between heavy-lifting Laravel backends, intelligent AI pipelines, and lightning-fast Next.js frontends.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-500/25 transition-all hover:scale-105 w-full sm:w-auto">
              <Link href="/contact">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full border-white/10 bg-slate-900/50 backdrop-blur-md text-white hover:bg-slate-800 font-bold text-lg w-full sm:w-auto">
              <Link href="/portfolio">
                Explore My Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================
          2. PROOF METRICS SECTION 
      ========================================= */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-slate-900/30 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">By the numbers</h2>
            <p className="mt-3 text-lg text-slate-400 max-w-2xl mx-auto">Proven results from years of building production-grade applications.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Experience", value: "9+", suffix: "Years", hint: "Senior Full-Stack", icon: Award, color: "text-amber-500", bg: "bg-amber-500/10", border: "hover:border-amber-500/50" },
              { label: "Users Scaled", value: "100k", suffix: "+", hint: "High-traffic systems", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "hover:border-blue-500/50" },
              { label: "Performance", value: "40%", suffix: "Faster", hint: "Reduced query overhead", icon: Activity, color: "text-green-500", bg: "bg-green-500/10", border: "hover:border-green-500/50" },
              { label: "Uptime", value: "99", suffix: "%", hint: "Secured via WAF", icon: Clock, color: "text-purple-500", bg: "bg-purple-500/10", border: "hover:border-purple-500/50" },
            ].map((stat, i) => (
              <div key={i} className={`relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${stat.border}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`rounded-xl ${stat.bg} p-3`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-extrabold text-white">{stat.value}</span>
                    <span className="text-lg font-bold text-slate-500 ml-1">{stat.suffix}</span>
                  </div>
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-1">{stat.label}</p>
                <p className="text-sm text-slate-500">{stat.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. FULL STACK ARSENAL SECTION 
      ========================================= */}
      <section className="py-24 md:py-32 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 uppercase tracking-wider">
            <Terminal className="h-4 w-4" /> Senior Technical Arsenal
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">A complete production stack.</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            I don't just know the syntax; I know how to architect scalable solutions. From <span className="text-white font-medium">Laravel</span> backends to <span className="text-white font-medium">Next.js</span> frontends.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {[
            { cat: "Enterprise Backend Architecture", desc: "Building robust, secure, and scalable systems that power business logic.", icon: Server, items: ["Laravel 13", "PHP 8.x", "REST/GraphQL", "Microservices"], span: "md:col-span-6" },
            { cat: "Modern Frontend & SPAs", desc: "Crafting pixel-perfect, reactive user experiences with modern JavaScript.", icon: AppWindow, items: ["Next.js 15", "React.js", "TypeScript", "Tailwind CSS"], span: "md:col-span-6" },
            { cat: "Advanced WordPress Engineering", desc: "Architecting custom plugins, headless CMS setups, and secure platforms.", icon: Globe, items: ["Custom Plugins", "Headless WP", "Security Hardening"], span: "md:col-span-4" },
            { cat: "Database & Cloud Infra", desc: "Optimizing data flow for 100k+ users and ensuring 99.9% availability.", icon: Database, items: ["MySQL Optimize", "Redis", "Cloudflare WAF"], span: "md:col-span-4" },
            { cat: "AI Integration & Workflow", desc: "Leveraging LLMs to automate business operations and enhance SaaS features.", icon: Cpu, items: ["OpenAI API", "Prompt Eng.", "CI/CD"], span: "md:col-span-4" },
          ].map((stack, i) => (
            <div key={i} className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-800/50 ${stack.span}`}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 border border-white/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <stack.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{stack.cat}</h3>
                </div>
                <p className="mb-8 text-slate-400 leading-relaxed">{stack.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {stack.items.map((item, j) => (
                  <span key={j} className="inline-flex items-center rounded-xl bg-slate-950 border border-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 group-hover:border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          4. WORKFLOW / PROCESS SECTION 
      ========================================= */}
      <section className="py-24 bg-slate-900/20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            
            <header className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 uppercase tracking-wider">
                My Workflow
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl leading-tight">
                From "Idea" to <br /> <span className="text-slate-500">"Enterprise Scale"</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                I skip the guesswork. My process is designed to mitigate risk, ensure security, and deliver a product that is ready for real-world traffic.
              </p>
              
              <div className="mt-10 overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-600/5 p-8 backdrop-blur-sm relative">
                <div className="absolute top-0 right-0 p-6 opacity-10"><Code2 className="w-24 h-24 text-blue-400" /></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-400"><Check className="h-5 w-5" /></div>
                  <h3 className="font-bold text-white text-lg">The Senior Difference</h3>
                </div>
                <p className="text-slate-400 leading-relaxed relative z-10">
                  Junior devs write code that works for now. I write code that works <strong>2 years from now</strong>—maintainable, secure, and fully documented.
                </p>
              </div>
            </header>

            <div className="lg:col-span-7 grid gap-6">
              {[
                { title: "1. Architecture & Scoping", desc: "I plan database schemas, API endpoints, and security protocols to ensure the system scales to 100k+ users from Day 1.", points: ["Technical Requirements", "ERD Design", "Stack Selection"], icon: FileSearch },
                { title: "2. Agile Development", desc: "I build in modular components using OOP standards. You get weekly builds to test, ensuring perfect frontend-backend integration.", points: ["RESTful APIs", "Component UI", "Weekly Staging"], icon: Code2 },
                { title: "3. Hardening & Optimization", desc: "I slash load times. I implement Redis caching, optimize MySQL queries, and set up Cloudflare WAF to block threats.", points: ["Query Opt (-40%)", "Security Audits", "Load Testing"], icon: ShieldCheck },
                { title: "4. CI/CD & Handover", desc: "Safe deployment pipelines ensure zero downtime. I provide detailed documentation so your team can maintain the codebase.", points: ["Auto Deployment", "Documentation", "Monitoring"], icon: Rocket },
              ].map((s, idx) => (
                <div key={idx} className="group p-8 rounded-[2rem] border border-white/5 bg-slate-950 transition-all hover:border-blue-500/30">
                  <div className="flex items-center gap-4 mb-4">
                    <s.icon className="h-8 w-8 text-blue-500/70 group-hover:text-blue-400 transition-colors" />
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="mb-6 text-slate-400 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {s.points.map((p, i) => (
                      <span key={i} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-300 border border-white/5">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. TESTIMONIALS (INFINITE MARQUEE) 
      ========================================= */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">Trusted by industry leaders.</h2>
          <p className="text-lg text-slate-400">From scaling databases to securing SaaS apps, here is what clients say about my delivery standards.</p>
        </div>

        <div className="relative w-full flex overflow-x-hidden">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 hidden md:block" />

          {/* Marquee Animation Container */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6">
            {[
              { q: "Imran architected a secure Laravel backend that passed every security audit. His attention to RBAC and encryption is top-tier.", n: "Mr. Raheem B.", r: "Director of HealthTech" },
              { q: "We had a messy 5-year-old codebase. Imran refactored it into clean PHP without breaking live features. Saved us months of debt.", n: "Mrs. Nellie H.", r: "VP of Engineering" },
              { q: "Performance was our bottleneck. Imran optimized our MySQL queries handling 100k+ daily users with zero lag.", n: "Dr. Juvenal G.", r: "Founder, ScaleUp SaaS" },
              { q: "He built our custom booking engine from scratch using React and Laravel. The UI is buttery smooth, and the API is flawless.", n: "Mrs. Sharon P.", r: "Owner, Dental Franchise" },
              { q: "We needed OpenAI for automated reporting. Imran didn't just connect the API; he built a robust queue system for reliability.", n: "Aric Friesen", r: "CTO, AutoFlow" },
            ].map((t, idx) => (
              <div key={idx} className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-xl flex flex-col">
                <div className="flex justify-between mb-6">
                  <div className="flex gap-1"><Star className="h-5 w-5 fill-amber-500 text-amber-500" /><Star className="h-5 w-5 fill-amber-500 text-amber-500" /><Star className="h-5 w-5 fill-amber-500 text-amber-500" /><Star className="h-5 w-5 fill-amber-500 text-amber-500" /><Star className="h-5 w-5 fill-amber-500 text-amber-500" /></div>
                  <Quote className="h-6 w-6 text-white/10 fill-current" />
                </div>
                <p className="flex-1 text-slate-300 leading-relaxed mb-8">"{t.q}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold">{t.n.charAt(0)}</div>
                  <div>
                    <p className="font-bold text-white">{t.n}</p>
                    <p className="text-sm text-slate-500">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CSS Injection for Marquee */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { animation: marquee 40s linear infinite; }
          `}} />
        </div>
      </section>

      {/* =========================================
          6. FAQS SECTION 
      ========================================= */}
{/* =========================================
          6. EXPANDED PREMIUM FAQ SECTION 
      ========================================= */}
      <section className="py-24 bg-slate-900/20 border-y border-white/5 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 uppercase tracking-wider">
              <MessageCircleQuestion className="h-4 w-4" /> Expert Insights
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-4">Everything you need to know.</h2>
            <p className="text-slate-400 max-w-2xl">Hiring a senior architect is an investment. Here is how I mitigate risk and deliver enterprise-grade value from Day 1.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                q: "Do you work with legacy 'spaghetti' code?", 
                a: "Yes. I specialize in refactoring complex, unmaintained systems into modern OOP standards. I implement Design Patterns (Singleton, Factory, Repository) to make your code maintainable without any downtime." 
              },
              { 
                q: "How do you ensure the app handles high traffic?", 
                a: "I architect for scale. This includes advanced MySQL indexing, Redis caching layers, load balancing, and optimizing PHP-FPM/Nginx configurations to handle millions of requests efficiently." 
              },
              { 
                q: "What is your approach to security?", 
                a: "Security is baked in, not bolted on. I follow OWASP standards, implement strict RBAC (Role-Based Access Control), sanitization, and custom Cloudflare WAF rules to block malicious bot traffic." 
              },
              { 
                q: "Can you build and integrate AI features?", 
                a: "Absolutely. I build custom LLM wrappers and RAG architectures using OpenAI and Claude APIs. I specialize in automating business workflows and generating intelligent content at scale." 
              },
              { 
                q: "Are you comfortable with US/UK/EU time zones?", 
                a: "Yes. For the last 5+ years, I've successfully overlapped with Western time zones. I prioritize proactive communication and provide daily status updates via Jira, Slack, or Trello." 
              },
              { 
                q: "Do you provide documentation for the code?", 
                a: "Always. Every project includes comprehensive READMEs, Swagger/Postman API documentation, and even video walkthroughs for your internal team to ensure a smooth handover." 
              },
              { 
                q: "What is your tech stack for new SaaS builds?", 
                a: "My 'Golden Stack' for performance and speed-to-market is Laravel 11 for the robust backend and Next.js 15 with Tailwind CSS for a premium, reactive frontend." 
              },
              { 
                q: "Can you handle Database Migration and Optimization?", 
                a: "I have handled databases with 25M+ rows. I specialize in zero-downtime migrations and query profiling to reduce server overhead by up to 40%." 
              },
              { 
                q: "How do you handle project management?", 
                a: "I work in Agile Sprints. You get a staging URL with weekly updates so you can see the progress in real-time, ensuring the final product matches your vision perfectly." 
              },
              { 
                q: "Do you offer post-launch support?", 
                a: "Yes. I offer maintenance packages that include security patching, server monitoring, and performance tuning to ensure your application stays healthy as it grows." 
              },
            ].map((faq, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-[2rem] bg-slate-950 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="flex gap-4">
                  <span className="text-blue-500 font-mono text-lg font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{faq.q}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          7. GLOBAL REACH & CLIENT LOGOS 
      ========================================= */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6 uppercase tracking-wider">
                <Globe className="h-4 w-4" /> Global Footprint
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                Architecting for <span className="text-blue-400">Global</span> Audiences.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Over the last 9 years, I've delivered high-performance systems for clients across the **US, UK, Australia, and Europe**. I understand the nuances of international markets, from GDPR compliance to multi-currency payment gateways.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
                  <p className="text-2xl font-bold text-white mb-1">15+</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Countries Served</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5">
                  <p className="text-2xl font-bold text-white mb-1">24/7</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">System Monitoring</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* This acts as a visual placeholder for a world map or a cluster of project tags */}
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
              <div className="relative grid grid-cols-3 gap-4 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                 {/* You can replace these with actual brand logos you've worked with */}
                {['UK','USA','AU','EU','CA','BD'].map((loc) => (
                  <div key={loc} className="h-20 flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/50 text-2xl font-black text-slate-700">
                    {loc}
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 p-6 rounded-full border border-blue-500/50 shadow-2xl shadow-blue-500/20">
                 <Globe className="h-12 w-12 text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          8. ENTERPRISE STANDARDS (HARD FACTS)
      ========================================= */}
      <section className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Enterprise-Grade Performance.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">I follow strict engineering standards to ensure your application is as fast as it is secure.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Core Web Vitals", desc: "Consistently hitting 90+ scores on PageSpeed Insights for all Next.js/React builds.", icon: Activity },
              { title: "OWASP Top 10", desc: "Proactive protection against SQL injection, XSS, and broken authentication.", icon: ShieldCheck },
              { title: "DB Profiling", desc: "Advanced query optimization to handle millions of rows without latency.", icon: Database },
              { title: "AI Readiness", desc: "Modular architecture designed to easily swap and scale LLM providers.", icon: Cpu },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 hover:border-blue-500/20 transition-all">
                <item.icon className="h-10 w-10 text-blue-500 mb-6" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          9. THE "FOUNDER MINDSET" SECTION
      ========================================= */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 p-8 md:p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5">
               <Zap className="h-64 w-64 text-white" />
             </div>
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
               <div>
                 <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Built with a <br/><span className="text-blue-500">Founder's Mindset.</span></h2>
                 <p className="text-slate-400 text-lg leading-relaxed mb-6">
                   I don't just complete tasks; I build assets. As I built of SaaS products (Blog Cutter AI), I understand the importance of **speed-to-market**, **low server costs**, and **technical SEO**.
                 </p>
                 <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-slate-300">
                     <div className="h-2 w-2 rounded-full bg-blue-500" /> 
                     <span>Scalable logic that grows with your users.</span>
                   </li>
                   <li className="flex items-center gap-3 text-slate-300">
                     <div className="h-2 w-2 rounded-full bg-blue-500" /> 
                     <span>Clean code that is easy for future hires to read.</span>
                   </li>
                   <li className="flex items-center gap-3 text-slate-300">
                     <div className="h-2 w-2 rounded-full bg-blue-500" /> 
                     <span>Focus on ROI and business objectives.</span>
                   </li>
                 </ul>
               </div>
               <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white italic">iA</div>
                    <div>
                      <p className="text-white font-bold">Principal Architect Note</p>
                      <p className="text-xs text-slate-500 tracking-widest uppercase">Senior Lead Developer</p>
                    </div>
                  </div>
                  <p className="text-slate-400 italic leading-relaxed">
                    "My goal is to make myself redundant. I write code so clean and documentation so thorough that your business thrives even after my handover. That is the mark of a senior engineer."
                  </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================
          12. FINAL CTA SECTION 
      ========================================= */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative overflow-hidden rounded-[3rem] border border-blue-500/20 bg-slate-900/80 px-6 py-16 md:px-16 md:py-24 shadow-2xl max-w-5xl mx-auto text-center backdrop-blur-md">
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm font-bold text-green-400">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping absolute"></span>
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                Available for new projects (US/UK Time Zones)
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                Stop managing tickets.<br /> <span className="text-blue-400">Start shipping features.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                I don't need hand-holding. With 9+ years of experience, I architect systems that scale to 100k+ users and secure them against threats.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-500/20 transition-transform hover:scale-105 w-full sm:w-auto">
                  <Link href="/contact">Let's discuss your project <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/10 bg-slate-950 text-white hover:bg-slate-800 font-bold text-lg w-full sm:w-auto">
                  <Link href="/portfolio"><Rocket className="mr-2 h-5 w-5 text-slate-400" /> View deployments</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}