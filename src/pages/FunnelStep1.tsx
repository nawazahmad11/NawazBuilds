import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Zap, Smartphone, TrendingDown, Package, Star, ArrowRight, Play, Rocket, Target, Shield, Clock, BarChart3, Code, Palette, Globe, CreditCard, LineChart } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative radial-glow py-20 sm:py-28 lg:py-36">
        <div className="section-container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} custom={0} className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
              Premium Shopify Development Agency
            </motion.p>
            <motion.h1 variants={fadeInUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              We Build Shopify Stores Designed to Scale Beyond{" "}
              <span className="text-gradient-gold">7-Figures</span>
            </motion.h1>
            <motion.p variants={fadeInUp} custom={2} className="text-xl sm:text-2xl font-semibold text-primary mb-4">
              Stop Losing Sales with Slow, Generic Shopify Themes
            </motion.p>
            <motion.p variants={fadeInUp} custom={3} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We help serious brands launch high-converting Shopify stores — combining custom Liquid development, conversion psychology, and growth-ready integrations.
            </motion.p>
            <motion.div variants={fadeInUp} custom={4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button onClick={handleCTA} className="gradient-cta px-8 py-4 rounded-lg text-lg animate-pulse-glow flex items-center gap-2">
                <Target className="w-5 h-5" /> Book Free Strategy Call
              </button>
            </motion.div>
            <motion.div variants={fadeInUp} custom={5} className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 check-green" /> No obligation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 check-green" /> Free consultation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 check-green" /> Limited monthly slots</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="section-container">
          <motion.div
            className="max-w-3xl mx-auto glass-card p-2 rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/nTqJnVJi1K4"
                title="Shopify Pros - Watch How We Build"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 relative">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">
              Why Most Shopify Stores <span className="text-destructive">Fail</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Zap, title: "Slow Themes", desc: "Heavy templates that tank your page speed and kill conversions." },
              { icon: Smartphone, title: "Poor Mobile UX", desc: "Clunky mobile experiences driving away 70%+ of your traffic." },
              { icon: TrendingDown, title: "Low Conversion Rate", desc: "Generic layouts with no conversion psychology built in." },
              { icon: Package, title: "App Overload", desc: "Too many apps slowing your store and conflicting with each other." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-lg mb-4">
              <ArrowRight className="w-5 h-5" /> How Shopify Pros Fixes This
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-2">
              What We Build For You
            </motion.h2>
            <motion.p variants={fadeInUp} custom={1} className="text-primary font-semibold text-lg">
              Delivered Within 30 Days
            </motion.p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Code, label: "Custom Liquid Theme Development" },
              { icon: BarChart3, label: "Conversion Rate Optimization (CRO)" },
              { icon: Smartphone, label: "Mobile-First UX/UI" },
              { icon: Globe, label: "App & API Integrations" },
              { icon: Palette, label: "Product Presentation Guidance" },
              { icon: LineChart, label: "Meta Pixel + GA4 Tracking Setup" },
              { icon: CreditCard, label: "Payment & Shipping Configuration" },
              { icon: Rocket, label: "Launch Strategy Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i}
                className="glass-card px-5 py-4 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 check-green flex-shrink-0" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 relative radial-glow">
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-2">
              Trusted by Ambitious Brands
            </motion.h2>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { value: "100+", label: "Stores Launched" },
              { value: "₹5 Cr+", label: "Client Revenue Generated" },
              { value: "150k+", label: "Orders Processed" },
              { value: "30-Day", label: "Avg Delivery" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { name: "Priya Sharma", role: "Founder, Luxe Fragrances", quote: "Shopify Pros transformed our online store. Revenue jumped 3x in 60 days after launch." },
              { name: "Rahul Mehta", role: "CEO, FitGear India", quote: "The team delivered a blazing-fast store that converts like crazy. Best investment we've made." },
              { name: "Ananya Kapoor", role: "Director, Silk & Stone", quote: "Professional, fast, and they truly understand conversion. Our AOV increased by 40%." },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeInUp} custom={i} className="glass-card p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-2">
              Simple, Transparent Pricing
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Starter */}
            <motion.div variants={fadeInUp} custom={0} className="glass-card p-8 flex flex-col">
              <h3 className="text-xl font-bold mb-1">Starter</h3>
              <div className="text-3xl font-black text-gradient-gold mb-2">₹1,50,000</div>
              <p className="text-sm text-muted-foreground mb-6">Ideal for new brands validating product-market fit.</p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Custom theme development", "Mobile-optimized design", "5 core pages", "Basic CRO setup", "14-day delivery"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 check-green mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={handleCTA} className="gradient-cta w-full py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </motion.div>

            {/* Growth */}
            <motion.div variants={fadeInUp} custom={1} className="glass-card p-8 flex flex-col border border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-1">Growth / Enterprise</h3>
              <div className="text-3xl font-black text-gradient-gold mb-2">Custom</div>
              <p className="text-sm text-muted-foreground mb-6">Full custom scalable Shopify ecosystem.</p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Everything in Starter", "Advanced CRO & A/B testing", "Custom app integrations", "Priority support", "Full launch strategy", "30-day delivery"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 check-green mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button onClick={handleCTA} className="gradient-cta w-full py-3 rounded-lg font-semibold">
                Book a Call
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative radial-glow">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Turn Your Shopify Store Into a{" "}
              <span className="text-gradient-gold">Revenue Machine?</span>
            </motion.h2>
            <motion.div variants={fadeInUp} custom={1}>
              <button onClick={handleCTA} className="gradient-cta px-10 py-5 rounded-xl text-lg animate-pulse-glow inline-flex items-center gap-2">
                <Rocket className="w-5 h-5" /> Get My Free Strategy Call
              </button>
            </motion.div>
            <motion.p variants={fadeInUp} custom={2} className="mt-6 text-muted-foreground text-sm">
              <Shield className="w-4 h-4 inline mr-1" />
              Limited onboarding capacity each month. Secure your spot now.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border z-50 sm:hidden">
        <button onClick={handleCTA} className="gradient-cta w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
          <Target className="w-5 h-5" /> Book Free Strategy Call
        </button>
      </div>
    </div>
  );
};

export default FunnelStep1;
