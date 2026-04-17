import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Zap,
  Smartphone,
  TrendingDown,
  Package,
  ArrowRight,
  Rocket,
  Target,
  Shield,
} from "lucide-react";
import AboutSection from "@/components/AboutSection";

const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const AuditSection = lazy(() => import("@/components/AuditSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const sectionFallback = (
  <div className="min-h-[16rem] w-full rounded-xl bg-white/[0.02] border border-white/5 animate-pulse" aria-hidden />
);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const FunnelStep1 = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/thank-you");

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden pt-16 relative">
      {/* 1. Vignette Effect Overlay */}
      <div className="vignette-overlay" />

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-17 z-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
          <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} custom={0} className="mb-8 flex justify-center">
              <div className="relative mx-auto w-fit overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <a 
                  className="hover:bg-white/10 bg-muted/30 group flex w-fit items-center gap-4 rounded-full p-1.5 pl-5 transition-all duration-300 cursor-pointer" 
                  onClick={(e) => { e.preventDefault(); scrollToServices(); }}
                  aria-label="Available for New Opportunities, scroll to services"
                >
                  <span className="shimmer-text-effect text-sm font-semibold tracking-wide">
                    Available for New Opportunities
                  </span>
                  <span className="h-4 w-0.5 border-l border-white/20"></span>
                  <div className="bg-background group-hover:bg-white/20 size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3 text-white" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3 text-white" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.h1 
              variants={fadeInUp} 
              custom={2} 
              className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-medium md:text-7xl lg:mt-10 xl:text-[6rem] tracking-tight leading-[1.1] text-white text-center"
            >
              Shopify <span className="relative inline-block">
                <span className="relative bg-[length:200%_auto] bg-clip-text text-transparent font-bold italic" 
                      style={{ 
                        backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #a855f7 25%, #ec4899 50%, #a855f7 75%, #3b82f6 100%)",
                        WebkitBackgroundClip: "text",
                        animation: "aurora 2s linear infinite"
                      }}>
                  Expert
                </span>
              </span> 
              <br />
              <span className="flex flex-wrap items-center justify-center gap-x-4">
                <span className="font-light text-white/90">&</span>
                <span className="relative inline-block">
                  <span className="relative bg-[length:200%_auto] bg-clip-text text-transparent font-black"
                        style={{ 
                          backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #a855f7 25%, #ec4899 50%, #a855f7 75%, #3b82f6 100%)",
                          WebkitBackgroundClip: "text",
                          animation: "aurora 6s linear infinite"
                        }}>
                    Growth
                  </span>
                </span>
                <span className="text-white font-medium">Partner</span>
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp} 
              custom={3} 
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 mt-5 font-light leading-relaxed"
            >
              I help businesses launch professional Shopify stores that look modern, load fast, and convert visitors into paying customers.
            </motion.p>

            <motion.div variants={fadeInUp} custom={5} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button 
                onClick={handleCTA} 
                className="gradient-cta px-8 py-4 rounded-lg text-lg animate-pulse-glow flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20"
                aria-label="Book Free Strategy Call"
              >
                <Target className="w-5 h-5" /> Book Free Strategy Call
              </button>
            </motion.div>
            <motion.div variants={fadeInUp} custom={6} className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> No obligation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Free consultation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Limited monthly slots</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Video*/}
      <section className="py-0 z-20 relative">
        <div className="section-container">
          <motion.div
            className="max-w-3xl mx-auto glass-card p-2 rounded-xl shadow-2xl shadow-primary/10 border border-white/10"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45 }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black/50">
              <iframe
                // src="https://www.youtube.com/embed/3yt-kojnojk"
                title="Shopify Pros - Watch How We Build"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Problem → Solution */}
      <section className="py-20 relative z-20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} custom={0} 
            className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Most Shopify Stores 
            <span className="text-destructive text-4xl sm:text-5xl mx-2 italic">Fail</span>
            <span className="text-white">?</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { icon: Zap, title: "Slow Themes", desc: "Heavy templates that tank your page speed and kill conversions." },
              { icon: Smartphone, title: "Poor Mobile UX", desc: "Clunky mobile experiences driving away 70%+ of your traffic." },
              { icon: TrendingDown, title: "Low Conversion Rate", desc: "Generic layouts with no conversion psychology built in." },
              { icon: Package, title: "App Overload", desc: "Too many apps slowing your store and conflicting with each other." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                custom={i} 
                className="glass-card p-8 text-center relative group transition-all duration-300 border border-white/5 hover:border-destructive/40 bg-white/[0.02] hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <div className="absolute -inset-1 bg-gradient-to-b from-destructive/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-6 shadow-lg border border-destructive/20">
                  <item.icon className="w-7 h-7 text-destructive group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-destructive/90 transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={scrollToServices}
              aria-label="Scroll to how we fix this"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-4 hover:text-primary/80 transition-all cursor-pointer bg-transparent border-none"
            >
              How Shopify Pros Fixes This <ArrowRight className="w-5 h-5" /> 
            </button>
          </motion.div>
        </div>
      </section>

     {/* 5. Services Section*/}
     <section id="services" className="py-5 z-20 relative">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-3 text-white tracking-tight">
              What I Build For You
            </motion.h2>
            <motion.p variants={fadeInUp} custom={1} className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              Delivered Within 30 Days
            </motion.p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { label: "Custom Liquid Themes", desc: "Pure speed, no bulky apps." },
              { label: "CRO Optimization", desc: "Psychology-backed layouts." },
              { label: "Mobile-First UX", desc: "Seamless on every device." },
              { label: "App & API Sync", desc: "Perfectly synced ecosystem." },
              { label: "Visual Storytelling", desc: "High-end product presentation." },
              { label: "Advanced Tracking", desc: "Meta Pixel & GA4 precision." },
              { label: "Checkout Flow", desc: "Zero-friction buying." },
              { label: "Launch Blueprint", desc: "Your strategy for success." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="group relative flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-md overflow-hidden cursor-default hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                
                <div className="flex-shrink-0 z-10">
                  <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300 shadow-sm shadow-primary/20">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex flex-col z-10">
                  <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-white/50 group-hover:text-white/80 transition-colors leading-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section*/}
      <div className="z-20 relative">
              <AboutSection />
            </div>

            {/* 7. Portfolio Section */}
            <div className="z-20 relative">
              <Suspense fallback={sectionFallback}>
                <PortfolioSection />
              </Suspense>
            </div>

            {/* 8. Social proof & testimonials (code-split) */}
            <div className="z-20 relative">
              <Suspense fallback={sectionFallback}>
                <SocialProofSection />
              </Suspense>
            </div>

    {/* 9. Pricing Section*/}
    <div className="z-20 relative">
        <Suspense fallback={sectionFallback}>
          <PricingSection />
        </Suspense>
      </div>


      <div className="z-20 relative">
      <Suspense fallback={sectionFallback}>
        <ProcessSection />
      </Suspense>
      </div>


      <div className="z-20 relative">
      <Suspense fallback={sectionFallback}>
        <AuditSection />
      </Suspense>
      </div>


    {/* Blog*/}
    <div className="z-20 relative">
        <Suspense fallback={sectionFallback}>
          <BlogSection />
        </Suspense>
      </div>


      {/* About is here*/}
    <div className="z-20 relative">
        <Suspense fallback={sectionFallback}>
          <FAQSection />
        </Suspense>
      </div>

      {/* 10. Final CTA */}
      <section id="final-cta" className="py-24 relative radial-glow z-20">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Turn Your Shopify Store Into a{" "}
              <span className="text-gradient-gold">Revenue Machine?</span>
            </motion.h2>
            <motion.div variants={fadeInUp} custom={1}>
              <button 
                onClick={handleCTA} 
                className="gradient-cta px-10 py-5 rounded-xl text-lg animate-pulse-glow inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-2xl shadow-primary/20"
                aria-label="Get My Free Strategy Call"
              >
                <Rocket className="w-5 h-5" /> Get My Free Strategy Call
              </button>
            </motion.div>
            <motion.p variants={fadeInUp} custom={2} className="mt-6 text-muted-foreground text-sm flex items-center justify-center">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              Limited onboarding capacity each month. Secure your spot now.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-white/10 z-50 sm:hidden pb-safe">
        <button 
          onClick={handleCTA} 
          className="gradient-cta w-full py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          aria-label="Book Free Strategy Call (Mobile)"
        >
          <Target className="w-5 h-5" /> Book Free Strategy Call
        </button>
      </div>

      {/* KEYFRAMES & UTILITIES */}
      <style>{`
        .shimmer-text-effect {
          background: linear-gradient(90deg, #666 0%, #fff 50%, #666 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        @keyframes aurora {
          from { background-position: 0% 50%; }
          to { background-position: 200% 50%; }
        }
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 16px);
        }
      `}</style>
    </div>
  );
};

export default FunnelStep1;