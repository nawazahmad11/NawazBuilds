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
  <div
    className="min-h-[16rem] w-full rounded-xl bg-white/[0.02] border border-white/5 animate-pulse"
    aria-hidden
  />
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

/**
 * Below-the-fold funnel content — loaded in a separate chunk so framer-motion
 * is not in the critical path for LCP / main-thread parse.
 */
const FunnelStep1Content = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/thank-you");

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl sm:text-4xl font-bold mb-4 text-white"
            >
              Why Most Shopify Stores
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
              {
                icon: Zap,
                title: "Slow Themes",
                desc: "Heavy templates that tank your page speed and kill conversions.",
              },
              {
                icon: Smartphone,
                title: "Poor Mobile UX",
                desc: "Clunky mobile experiences driving away 70%+ of your traffic.",
              },
              {
                icon: TrendingDown,
                title: "Low Conversion Rate",
                desc: "Generic layouts with no conversion psychology built in.",
              },
              {
                icon: Package,
                title: "App Overload",
                desc: "Too many apps slowing your store and conflicting with each other.",
              },
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
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-destructive/90 transition-colors">
                  {item.title}
                </h3>
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
              type="button"
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
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="text-3xl sm:text-4xl font-bold mb-3 text-white tracking-tight"
            >
              What I Build For You
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-primary font-bold text-sm uppercase tracking-[0.2em]"
            >
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
                  <p className="text-[10px] text-white/55 group-hover:text-white/80 transition-colors leading-tight">
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

      {/* 8. Social proof & testimonials */}
      <div className="z-20 relative">
        <Suspense fallback={sectionFallback}>
          <SocialProofSection />
        </Suspense>
      </div>

      {/* 9. Pricing */}
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
              Ready to Turn Your Shopify Store Into a <span className="text-gradient-gold">Revenue Machine?</span>
            </motion.h2>
            <motion.div variants={fadeInUp} custom={1}>
              <button
                type="button"
                onClick={handleCTA}
                className="gradient-cta px-10 py-5 rounded-xl text-lg animate-pulse-glow inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-2xl shadow-primary/20"
                aria-label="Get My Free Strategy Call"
              >
                <Rocket className="w-5 h-5" /> Get My Free Strategy Call
              </button>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="mt-6 text-muted-foreground text-sm flex items-center justify-center"
            >
              <Shield className="w-4 h-4 mr-2 text-primary" />
              Limited onboarding capacity each month. Secure your spot now.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-white/10 z-50 sm:hidden pb-safe">
        <button
          type="button"
          onClick={handleCTA}
          className="gradient-cta w-full py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          aria-label="Book Free Strategy Call (Mobile)"
        >
          <Target className="w-5 h-5" /> Book Free Strategy Call
        </button>
      </div>

      <style>{`
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 16px);
        }
      `}</style>
    </>
  );
};

export default FunnelStep1Content;
