import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDemoMode } from "@/contexts/DemoContext";
import LogoLoop from "@/components/ui/logo-loop";
import { SiReact, SiVite, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiSupabase, SiOpenai } from 'react-icons/si';
import {
  Shield,
  Zap,
  Globe,
  BarChart3,
  Check,
  ChevronRight,
  ArrowRight,
  Github,
  Twitter,
  Scan,
  Users,
  TrendingUp,
  Activity,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI-Powered Detection",
    description: "Advanced machine learning models analyze claims across multiple dimensions for accuracy assessment.",
  },
  {
    icon: Zap,
    title: "Real-Time Intelligence Streams",
    description: "Monitor thousands of sources worldwide in real-time, from social media to news outlets.",
  },
  {
    icon: Globe,
    title: "Geospatial Analysis",
    description: "Track misinformation patterns across geographic regions with interactive mapping tools.",
  },
  {
    icon: Scan,
    title: "Multi-Modal Verification",
    description: "Verify text, images, videos, and audio content with specialized AI models.",
  },
  {
    icon: BarChart3,
    title: "Trend Analytics",
    description: "Comprehensive dashboards with trend analysis, sentiment tracking, and insights.",
  },
  {
    icon: Users,
    title: "Collaborative Platform",
    description: "Team-based workflows with shared intelligence and collaborative fact-checking.",
  },
];

const workflow = [
  { step: "01", title: "Ingest", description: "Integrate your data feeds, social channels, and monitoring systems." },
  { step: "02", title: "Analyze", description: "Our models process claims, cross-reference facts, and assess credibility." },
  { step: "03", title: "Verify", description: "Analysts review flagged content with AI-assisted evidence gathering." },
  { step: "04", title: "Report", description: "Generate reports, trigger alerts, and automate response workflows." },
];

const pricing = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "For small teams getting started",
    features: ["5 team members", "1,000 claims/month", "Basic analytics", "Email support", "Community access"],
  },
  {
    name: "Pro",
    price: "$499",
    period: "/month",
    description: "For growing organizations",
    features: ["25 team members", "10,000 claims/month", "Advanced analytics", "API access", "Priority support", "Custom integrations"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations",
    features: ["Unlimited team members", "Unlimited claims", "Dedicated infrastructure", "24/7 support", "SLA guarantee", "Custom training"],
  },
];

const faqs = [
  {
    question: "How accurate is the AI verification?",
    answer: "Our models achieve 94% accuracy on benchmark datasets, with continuous improvement through human-in-the-loop feedback.",
  },
  {
    question: "What data sources do you support?",
    answer: "We support social media platforms, news APIs, RSS feeds, custom webhooks, and direct URL monitoring.",
  },
  {
    question: "Is my data secure?",
    answer: "We use enterprise-grade encryption, SOC 2 Type II compliance, and offer data residency options for regulated industries.",
  },
  {
    question: "Can I integrate with existing tools?",
    answer: "Yes, we offer REST APIs, webhooks, and native integrations with Slack, Teams, and major security platforms.",
  },
];

export default function Landing() {
  const { setDemoMode } = useDemoMode();
  const navigate = useNavigate();

  const handleTryDemo = () => {
    setDemoMode(true);
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, var(--bg-900), var(--bg-800), var(--bg-900))' }}>
      {/* Skip to content */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="navbar-logo-text">TrueTrace</span>
          </Link>

          <ul className="navbar-nav hidden md:flex">
            <li><a href="#features" className="navbar-link">Features</a></li>
            <li><a href="#workflow" className="navbar-link">How it Works</a></li>
            <li><a href="#pricing" className="navbar-link">Pricing</a></li>
            <li><a href="#faq" className="navbar-link">FAQ</a></li>
          </ul>

          <div className="navbar-actions">
            <Link to="/login">
              <button className="btn btn-ghost">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary btn-sm">Get Started</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 relative overflow-hidden">
          {/* Background Glow */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-25 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,140,255,0.35), transparent 70%)',
              filter: 'blur(140px)'
            }}
          />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Hero Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}>
                <h1 className="h1 mb-6">
                  See Beyond the Noise.
                  <br />
                  <span className="text-gradient animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                    Detect Misinformation
                  </span>
                  <br />
                  <span className="text-gradient animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>
                    in Real Time.
                  </span>
                </h1>
                <p className="body-lg mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                  TrueTrace is an AI-powered intelligence platform that detects deepfakes, manipulated media, and false narratives across social media, news, and OSINT sources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/register">
                    <button className="btn btn-primary btn-lg">
                      Get Started — Free
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <button onClick={handleTryDemo} className="btn btn-secondary btn-lg">
                    Try Demo
                    <Sparkles className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-4xl font-extrabold text-gradient">94.8%</div>
                    <div className="small" style={{ color: 'var(--muted)' }}>Accuracy</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-gradient">12.8k+</div>
                    <div className="small" style={{ color: 'var(--muted)' }}>Claims</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-gradient">50ms</div>
                    <div className="small" style={{ color: 'var(--muted)' }}>Response</div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="small" style={{ color: 'var(--muted)' }}>Live Dashboard Preview</span>
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ background: 'var(--danger)' }}></div>
                      <div className="w-3 h-3 rounded-full" style={{ background: 'var(--warning)' }}></div>
                      <div className="w-3 h-3 rounded-full" style={{ background: 'var(--success)' }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass-panel p-4 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-5 h-5" style={{ color: 'var(--accent-cyan-500)' }} />
                        <div className="text-4xl font-bold text-gradient">342</div>
                      </div>
                      <div className="small" style={{ color: 'var(--muted)' }}>New Claims</div>
                    </div>
                    <div className="glass-panel p-4 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5" style={{ color: 'var(--danger)' }} />
                        <div className="text-4xl font-bold" style={{ color: 'var(--danger)' }}>28</div>
                      </div>
                      <div className="small" style={{ color: 'var(--muted)' }}>High Risk</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="glass-panel p-3 rounded-xl flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full animate-glow-pulse" style={{ background: 'var(--danger)' }}></div>
                      <div className="flex-1">
                        <div className="body font-semibold">Deepfake detected</div>
                        <div className="small" style={{ color: 'var(--muted)' }}>95% confidence • 2 min ago</div>
                      </div>
                    </div>
                    <div className="glass-panel p-3 rounded-xl flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full animate-glow-pulse" style={{ background: 'var(--warning)' }}></div>
                      <div className="flex-1">
                        <div className="body font-semibold">Suspicious claim</div>
                        <div className="small" style={{ color: 'var(--muted)' }}>78% confidence • 5 min ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">
                <span className="text-gradient">Powerful Intelligence Features</span>
              </h2>
              <p className="body-lg" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                Comprehensive tools for detecting, analyzing, and responding to misinformation across all channels.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}>
                  <div className="card p-6 h-full">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: 'var(--button-gradient)' }}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="h3 text-xl mb-2">{feature.title}</h3>
                    <p className="body" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 px-6">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">
                Simple, Transparent <span className="text-gradient">Pricing</span>
              </h2>
              <p className="body-lg" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                Choose the plan that fits your organization's needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}>
                  <div className={`card p-6 h-full relative ${plan.popular ? 'card-neon scale-105' : ''}`}>
                    {plan.popular && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-pill text-xs font-semibold text-white"
                        style={{ background: 'var(--button-gradient)' }}>
                        Most Popular
                      </div>
                    )}
                    <h3 className="h3 text-xl mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-extrabold">{plan.price}</span>
                      <span style={{ color: 'var(--muted)' }}>{plan.period}</span>
                    </div>
                    <p className="body mb-6" style={{ color: 'var(--text-secondary)' }}>{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 body">
                          <Check className="w-4 h-4" style={{ color: 'var(--accent-cyan-500)' }} />
                          <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/register" className="block">
                      <button className={`btn w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                        Get Started
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6 glass-panel">
          <div className="container max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="h2 mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="card p-6 group">
                  <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" style={{ color: 'var(--muted)' }} />
                  </summary>
                  <p className="body mt-4" style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="container max-w-4xl">
            <div className="card p-12 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(0,210,193,0.3), transparent 70%)' }}
              />
              <div className="relative">
                <h2 className="h2 mb-4">
                  Ready to Combat <span className="text-gradient">Misinformation</span>?
                </h2>
                <p className="body-lg mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                  Join organizations worldwide using TrueTrace to protect their audiences from harmful content.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/register">
                    <button className="btn btn-primary btn-lg">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <button className="btn btn-secondary btn-lg">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6" style={{ borderTop: '1px solid var(--glass-border)' }}>
          <div className="container">
            {/* Tech Stack Logos */}
            <div className="mb-12">
              <div className="text-center mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Built with Modern Technologies
                </h4>
              </div>
              <div className="h-20 relative overflow-hidden">
                <LogoLoop
                  logos={[
                    { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
                    { node: <SiVite className="text-[#646CFF]" />, title: "Vite", href: "https://vitejs.dev" },
                    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                    { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                    { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
                    { node: <SiExpress className="text-muted-foreground" />, title: "Express", href: "https://expressjs.com" },
                    { node: <SiSupabase className="text-[#3ECF8E]" />, title: "Supabase", href: "https://supabase.com" },
                    { node: <SiOpenai className="text-muted-foreground" />, title: "OpenAI", href: "https://openai.com" },
                  ]}
                  speed={60}
                  direction="left"
                  logoHeight={40}
                  gap={48}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  ariaLabel="Technology stack"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <Link to="/" className="navbar-logo mb-4 inline-flex">
                  <div className="navbar-logo-icon">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="navbar-logo-text">TrueTrace</span>
                </Link>
                <p className="body" style={{ color: 'var(--muted)' }}>
                  AI-powered misinformation intelligence for a more informed world.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="body" style={{ color: 'var(--muted)' }}>Features</a></li>
                  <li><a href="#pricing" className="body" style={{ color: 'var(--muted)' }}>Pricing</a></li>
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>API</a></li>
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>Integrations</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>About</a></li>
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>Blog</a></li>
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>Careers</a></li>
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>Privacy</a></li>
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>Terms</a></li>
                  <li><a href="#" className="body" style={{ color: 'var(--muted)' }}>Security</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between pt-8" style={{ borderTop: '1px solid var(--glass-border)' }}>
              <p className="small" style={{ color: 'var(--muted)' }}>
                © 2024 TrueTrace. All rights reserved.
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <a href="#" style={{ color: 'var(--muted)' }}>
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" style={{ color: 'var(--muted)' }}>
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
