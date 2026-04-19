import { Metadata } from "next";
import Link from "next/link";
import { 
  Server, Globe, Cpu, Search, ShoppingBag, Smartphone, 
  Database, Code2, ShieldCheck, Zap, Workflow, CreditCard,
  CheckCircle2, ArrowRight, Layers, LayoutTemplate
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services | Senior Full-Stack Architect | Imran Ahmed",
  description: "Enterprise-grade Laravel development, Next.js frontends, and AI automation services.",
};

const services = [
  {
    id: "laravel",
    title: "Laravel SaaS Architecture",
    description: "End-to-end development of scalable Software as a Service platforms using Laravel.",
    icon: Server,
    features: ["Multi-tenant architectures", "RESTful API development", "Queue & Job processing", "Custom admin panels"],
  },
  {
    id: "nextjs",
    title: "Next.js / React Frontends",
    description: "Blazing fast, SEO-friendly user interfaces using the App Router and Turbopack.",
    icon: LayoutTemplate,
    features: ["Server-Side Rendering (SSR)", "Complex state management", "Framer Motion animations", "Tailwind CSS styling"],
  },
  {
    id: "ai-integration",
    title: "AI & LLM Integration",
    description: "Injecting intelligence into your apps using custom-built agent architectures.",
    icon: Cpu,
    features: ["OpenAI & Claude API", "Automated content generation", "RAG architectures", "Custom chatbot agents"],
  },
  {
    id: "database",
    title: "Database Optimization",
    description: "Designing and scaling databases to handle millions of rows without breaking a sweat.",
    icon: Database,
    features: ["Complex MySQL queries", "Redis caching layers", "Query profiling", "Data migration strategies"],
  },
  {
    id: "headless-commerce",
    title: "Headless E-commerce",
    description: "Decoupled storefronts connecting Next.js with Shopify or WooCommerce backends.",
    icon: ShoppingBag,
    features: ["Shopify Storefront API", "Custom checkout flows", "Inventory sync", "High-conversion UI"],
  },
  {
    id: "wordpress",
    title: "Enterprise WordPress",
    description: "Custom, secure, and lightning-fast WordPress solutions built from scratch.",
    icon: Globe,
    features: ["Custom plugin development", "Theme architecture", "Headless WP (GraphQL)", "Speed optimization"],
  },
  {
    id: "api",
    title: "API Development",
    description: "Secure, documented, and scalable REST and GraphQL APIs for web and mobile.",
    icon: Workflow,
    features: ["OAuth2 & JWT Auth", "Rate limiting", "Swagger documentation", "Third-party integrations"],
  },
  {
    id: "seo",
    title: "Technical SEO Ranking",
    description: "Code-level optimization to ensure your web applications rank organically on Google.",
    icon: Search,
    features: ["Core Web Vitals tuning", "Schema markup", "Dynamic sitemaps", "Server-side metadata"],
  },
  {
    id: "extensions",
    title: "Browser Extensions",
    description: "Cross-platform tools and Chrome extensions for workflow automation.",
    icon: Smartphone,
    features: ["Manifest V3 compliance", "DOM manipulation", "Background scripts", "API bridging"],
  },
  {
    id: "refactoring",
    title: "Legacy Code Refactoring",
    description: "Modernizing outdated codebases without disrupting your current active users.",
    icon: Code2,
    features: ["PHP version upgrades", "Monolith to Microservices", "Test-driven refactoring", "Security patching"],
  },
  {
    id: "payments",
    title: "Payment Integrations",
    description: "Bulletproof financial gateways for subscriptions, marketplaces, and one-off sales.",
    icon: CreditCard,
    features: ["Stripe Connect", "PayPal integrations", "Local BD gateways", "Subscription billing"],
  },
  {
    id: "security",
    title: "Security Auditing",
    description: "Comprehensive vulnerability checks and hardening for your web applications.",
    icon: ShieldCheck,
    features: ["SQL injection prevention", "XSS mitigation", "Server hardening", "Auth flow reviews"],
  },
];

const process = [
  { step: "01", title: "Discovery & Scope", description: "Deep dive into your requirements, target audience, and business logic." },
  { step: "02", title: "Architecture Design", description: "Mapping out the database schemas, API routes, and tech stack." },
  { step: "03", title: "Agile Development", description: "Writing clean, documented code with regular preview builds." },
  { step: "04", title: "Launch & Scale", description: "Deployment, CI/CD pipeline setup, and post-launch monitoring." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Engineering Solutions,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Not Just Code.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8">
            With 9+ years of experience as a Senior Full-Stack Developer, I build robust architectures that scale businesses and deliver lightning-fast user experiences.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 shadow-lg shadow-blue-500/20">
              <Link href="/contact">Hire Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/10 bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/portfolio">View Past Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Specialized Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive technical expertise to handle every layer of your application stack.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-500 flex flex-col"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 border border-white/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 transition-transform duration-500">
                <service.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">{service.description}</p>
              
              <ul className="space-y-3 pt-6 border-t border-white/5 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="py-24 border-y border-white/5 bg-slate-900/20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Development Lifecycle</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A proven, transparent methodology designed to eliminate technical debt and ensure predictable delivery.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-black text-slate-800/50 mb-4 tracking-tighter select-none">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ME */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Why partner with me?
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              When you hire me, you aren't just getting a coder. You are getting a technical partner with over a decade of experience bridging the gap between business objectives and software architecture.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Full-Stack Mastery</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Fluent in both server-side heavy lifting (Laravel, MySQL) and modern reactive frontends (Next.js, Tailwind).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Performance Obsessed</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Strict adherence to clean code principles, ensuring your app loads instantly and scales seamlessly to millions of users.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium CTA Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-500 blur-2xl opacity-20 rounded-[3rem]" />
            <div className="relative p-10 rounded-[2.5rem] bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Code2 className="h-48 w-48" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Ready to build?</h3>
              <p className="text-slate-400 mb-8 relative z-10 leading-relaxed">
                I am currently taking on new projects. Let's schedule a brief introductory call to discuss your architecture needs.
              </p>
              
              <Button asChild className="w-full bg-white hover:bg-slate-200 text-slate-950 font-semibold h-12 rounded-xl relative z-10 transition-colors">
                <Link href="/contact">
                  Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}