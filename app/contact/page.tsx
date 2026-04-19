import { Metadata } from "next";
// FIX: Removed Github and Linkedin from lucide-react
import { Mail, MapPin, Clock, Sparkles, MessageCircle, ShieldCheck, Zap } from "lucide-react";
// FIX: Imported them from react-icons instead
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Imran Ahmed | Hire a Senior Architect",
  description: "Get in touch for Laravel SaaS platforms, Next.js architecture, or custom AI integrations.",
};

const FAQS = [
  {
    q: "What do you need to start my project?",
    a: "A technical brief or functional requirement document (FRD). If it’s a refactor, I’ll need a restricted access look at your current repository and database schema to assess technical debt and compatibility.",
  },
  {
    q: "Do you build custom Laravel APIs and Dashboards?",
    a: "Yes. I specialize in RESTful and GraphQL API architecture, multi-tenant SaaS systems, and complex admin panels with granular Role-Based Access Control (RBAC).",
  },
  {
    q: "Can you handle AI/LLM integration?",
    a: "Absolutely. I implement RAG (Retrieval-Augmented Generation) architectures, custom OpenAI/Claude wrappers, and automated agent workflows to inject intelligence into your existing business logic.",
  },
  {
    q: "What is your typical response time?",
    a: "I respond to initial inquiries within 24 hours. For active enterprise clients, I provide near-immediate availability via Slack or WhatsApp during agreed business hours.",
  },
  {
    q: "Can you work with US/UK time zones?",
    a: "Yes. I have spent the last 5 years successfully overlapping with Western time zones. I ensure a 4-5 hour daily synchronous window for meetings and rapid feedback loops.",
  },
  {
    q: "Do you take on legacy 'spaghetti code' projects?",
    a: "I do. I specialize in 'Safe Refactoring'modernizing outdated PHP/Laravel systems into clean OOP patterns without breaking live features or losing data integrity.",
  },
  {
    q: "How do you ensure my application can scale?",
    a: "I architect for horizontal scalability using Redis for caching, advanced MySQL indexing, database sharding strategies, and stateless API design to handle 100k+ concurrent users.",
  },
  {
    q: "What is your approach to security?",
    a: "Security is non-negotiable. I follow OWASP standards, implement custom Cloudflare WAF rules, use signed middleware, and conduct thorough sanitization to prevent SQLi and XSS threats.",
  },
  {
    q: "Will my site be SEO-friendly and fast?",
    a: "Yes. Using Next.js 15 and Server Components, I ensure your application hits 90+ Core Web Vitals. I optimize every byte, from image compression to critical CSS delivery.",
  },
  {
    q: "Do you provide technical documentation?",
    a: "Every project includes full technical documentation: Swagger/Postman for APIs, a comprehensive README for environment setup, and Loom video walkthroughs for your internal team.",
  },
  {
    q: "How do you handle project payments?",
    a: "I work with a milestone-based payment structure. Each payment is tied to a specific, testable deliverable, ensuring transparency and reducing risk for both parties.",
  },
  {
    q: "Do you write automated tests?",
    a: "Yes. Depending on the project scope, I implement TDD (Test-Driven Development) using PHPUnit for backends and Playwright or Cypress for frontend end-to-end testing.",
  },
  {
    q: "What tools do you use for communication?",
    a: "I am fluent in the modern engineering stack: Jira or Linear for task tracking, GitHub/GitLab for version control, and Slack or Discord for real-time collaboration.",
  },
  {
    q: "Can you optimize my slow database queries?",
    a: "Yes. I use query profiling tools to identify bottlenecks, implement proper relational indexing, and introduce caching layers that typically reduce server overhead by 30-50%.",
  },
  {
    q: "Why choose Next.js over standard React for my project?",
    a: "Next.js provides superior SEO, faster initial page loads via SSR (Server Side Rendering), and better security by keeping sensitive logic on the server crucial for enterprise apps.",
  },
  {
    q: "Do you handle DevOps and Server Management?",
    a: "I manage Linux VPS environments (Ubuntu/CentOS) via SSH, setting up Nginx, SSL, CI/CD pipelines (GitHub Actions), and Docker containers for consistent production environments.",
  },
  {
    q: "What happens after the project is launched?",
    a: "I provide a 30-day post-launch support window to fix any bugs. I also offer monthly retainer packages for security patching, feature updates, and performance monitoring.",
  },
  {
    q: "Who owns the intellectual property (IP)?",
    a: "You do. Upon final payment, 100% of the copyright and source code ownership is transferred to you. I believe in 'No Vendor Lock-in' engineering.",
  },
  {
    q: "Can you work with my existing design team?",
    a: "Perfectly. I am experienced in translating Figma/Adobe XD prototypes into pixel-perfect, responsive Tailwind CSS components with a focus on UX accessibility.",
  },
  {
    q: "Do you take on urgent 'fire-fighting' projects?",
    a: "If your production server is down or you have a critical security breach, I can be available for emergency troubleshooting and patching at a specialized consultation rate.",
  }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" />
            Currently accepting new projects
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Ready to build the next <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">big thing?</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Tell me about your project scope, goals, and timeline. I'll review it and reply with a clear plan of action.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CONTACT METHODS */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <a href="mailto:me@imrandev.bd" className="group p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-blue-500/30 hover:bg-slate-800 transition-all shadow-xl backdrop-blur-sm">
              <Mail className="h-6 w-6 text-blue-400 mb-4 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-white font-bold mb-1">Email</h3>
              <p className="text-sm text-slate-400 mb-3">Best for scope & details.</p>
              <span className="text-sm text-blue-400 font-medium group-hover:underline">me@imrandev.bd</span>
            </a>

            <a href="https://wa.me/+8801576918420" target="_blank" rel="noreferrer" className="group p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-green-500/30 hover:bg-slate-800 transition-all shadow-xl backdrop-blur-sm">
              <MessageCircle className="h-6 w-6 text-green-400 mb-4 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-white font-bold mb-1">WhatsApp</h3>
              <p className="text-sm text-slate-400 mb-3">Quick checks & timelines.</p>
              <span className="text-sm text-green-400 font-medium group-hover:underline">+880 1576 918420</span>
            </a>

            <a href="https://linkedin.com/in/imranbru99" target="_blank" rel="noreferrer" className="group p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-blue-400/30 hover:bg-slate-800 transition-all shadow-xl backdrop-blur-sm">
              {/* FIX: Used FaLinkedin here */}
              <FaLinkedin className="h-6 w-6 text-blue-500 mb-4 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-white font-bold mb-1">LinkedIn</h3>
              <p className="text-sm text-slate-400 mb-3">Professional network.</p>
              <span className="text-sm text-blue-400 font-medium group-hover:underline">View Profile</span>
            </a>

            <a href="https://github.com/imranbru99" target="_blank" rel="noreferrer" className="group p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-white/20 hover:bg-slate-800 transition-all shadow-xl backdrop-blur-sm">
              {/* FIX: Used FaGithub here */}
              <FaGithub className="h-6 w-6 text-slate-300 mb-4 group-hover:-translate-y-1 transition-transform" />
              <h3 className="text-white font-bold mb-1">GitHub</h3>
              <p className="text-sm text-slate-400 mb-3">Open source & code.</p>
              <span className="text-sm text-slate-300 font-medium group-hover:underline">View Repos</span>
            </a>

          </div>
        </div>
      </section>

      {/* 3. FORM & INFO SPLIT */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Side: Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />
                <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h2>
                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Right Side: Info Panels */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Availability</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-300">
                    <Clock className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Response Time:</strong> Typically within 24 hours.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Security First:</strong> Strict validation & NDA-compliant workflows.</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <Zap className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Delivery:</strong> Remote agile delivery with clear, predictable milestones.</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-3">What to include</h3>
                <p className="text-slate-400 leading-relaxed">
                  To get the most accurate quote, please include your <strong>Target Platform</strong> (Laravel, Next.js, etc.), <strong>Goals</strong>, <strong>Timeline</strong>, and any reference sites you admire.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-24 border-t border-white/5 bg-slate-900/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-400 mt-2">Quick answers before we jump on a call.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}