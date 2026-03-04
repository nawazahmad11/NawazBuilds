import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Zap, Smartphone, TrendingDown, Package, Star, ArrowRight, Rocket, Target, Shield, Clock, BarChart3, Code, Palette, Globe, CreditCard, LineChart } from "lucide-react";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";


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

      {/* 2. Hero Section (Updated with Mesh Glow Wrapper) */}
      <section className="relative overflow-hidden py-24 lg:py-26 z-20">
        {/* Background Glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-50" />
          <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* UPDATED: Available for New Opportunities with SHIMMER */}
            <motion.div variants={fadeInUp} custom={0} className="mb-8 flex justify-center">
              <div className="relative mx-auto w-fit overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <a 
                  className="hover:bg-white/10 bg-muted/30 group flex w-fit items-center gap-4 rounded-full p-1.5 pl-5 transition-all duration-300" 
                  href="#services"
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

            {/* NEON HERO TITLE SECTION */}
            <motion.h1 
              variants={fadeInUp} 
              custom={2} 
              className="mx-auto mt-8 max-w-5xl text-balance text-5xl font-medium md:text-7xl lg:mt-16 xl:text-[6rem] tracking-tight leading-[1.1] text-white text-center"
            >
              Shopify <span className="relative inline-block">
                <span className="relative bg-[length:200%_auto] bg-clip-text text-transparent font-bold italic" 
                      style={{ 
                        backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #a855f7 25%, #ec4899 50%, #a855f7 75%, #3b82f6 100%)",
                        WebkitBackgroundClip: "text",
                        animation: "aurora 5s linear infinite"
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
              className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 mt-12 font-light leading-relaxed"
            >
              I build high-performance Shopify stores that turn browsers into buyers—focused on speed, conversion, and 7-figure scalability.
            </motion.p>

            <motion.div variants={fadeInUp} custom={5} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button onClick={handleCTA} className="gradient-cta px-8 py-4 rounded-lg text-lg animate-pulse-glow flex items-center gap-2">
                <Target className="w-5 h-5" /> Book Free Strategy Call
              </button>
            </motion.div>
            <motion.div variants={fadeInUp} custom={6} className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 check-green" /> No obligation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 check-green" /> Free consultation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 check-green" /> Limited monthly slots</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Video Section */}
      <section className="py-16 z-20 relative">
        <div className="section-container">
          <motion.div
            className="max-w-3xl mx-auto glass-card p-2 rounded-xl shadow-2xl shadow-primary/10"
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
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. NEW STATS SECTION */}
      
      {/* 5. Problem → Solution Section (REPLACED WITH 3D TILT VERSION) */}
      <section className="py-6 relative z-20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
            style={{ perspective: "1200px" }} 
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
                whileHover={{ scale: 1.05, rotateX: 8, rotateY: -8, z: 50 }}
                className="glass-card p-8 text-center relative group transition-all duration-300 border border-white/5 hover:border-destructive/30"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute -inset-1 bg-gradient-to-b from-destructive/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ transform: "translateZ(30px)" }}>
                  <item.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white" style={{ transform: "translateZ(40px)" }}>{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ transform: "translateZ(20px)" }}>{item.desc}</p>
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
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all cursor-pointer bg-transparent border-none"
            >
              <ArrowRight className="w-5 h-5" /> How Shopify Pros Fixes This
            </button>
          </motion.div>
        </div>
      </section>

     {/* 6. Services Section - SLEEK & COMPACT VERSION */}
     <section id="services" className="py-20 z-20 relative">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10" // Margin kam kar di
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-3 text-white tracking-tight">
              What I Build For You
            </motion.h2>
            <motion.p variants={fadeInUp} custom={1} className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              Delivered Within 30 Days
            </motion.p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto" // Gap aur max-width kam kar di
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
                whileHover={{ y: -3, scale: 1.01 }} // Subtle movement
                className="group relative flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-md overflow-hidden"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                
                <div className="flex-shrink-0">
                  <div className="p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors leading-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

{/* About Section is here*/}
<div className="z-20 relative">
        <AboutSection />
      </div>


      {/* 7. Portfolio Section */}
      <div className="z-20 relative">
        <PortfolioSection />
      </div>

     {/* 8. Social Proof & Testimonials Section */}
<section className="py-8 relative overflow-hidden z-20">
  <div className="section-container relative z-10 text-white">
    
    {/* STATS ROW - Clean & Professional */}
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-y border-white/5 py-8 bg-white/[0.01] backdrop-blur-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {[
        { value: "100+", label: "Stores Launched" },
        { value: "$2M+", label: "Client Revenue" },
        { value: "150k+", label: "Orders Processed" },
        { value: "30-Day", label: "Avg Delivery" },
      ].map((stat, i) => (
        <motion.div key={i} variants={fadeInUp} custom={i} className="text-center group">
          <div className="text-4xl sm:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm font-medium text-white/40 uppercase tracking-[0.2em]">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* SECTION HEADER */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="text-center mb-16"
    >
       <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Trusted by Global Merchants
        </h2>
        <p className="text-white/40 max-w-[600px] mx-auto text-lg font-light">
          Real feedback from 7-figure store owners who scaled their business with me.
        </p>
    </motion.div>
  </div>

  {/* MARQUEE TESTIMONIALS - 3 ROWS COMPACT ANIMATION */}
  <style>{`
    @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    .animate-left { animation: marquee-left 90s linear infinite; }
    .animate-right { animation: marquee-right 90s linear infinite; }
    .marquee-wrapper:hover .animate-left, .marquee-wrapper:hover .animate-right { animation-play-state: paused; }
  `}</style>

  <div className="marquee-wrapper flex flex-col gap-4 relative">
    {(() => {
      const allReviews = [
        { name: "James Anderson", platform: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg", text: "The custom Liquid sections they built for my product page increased our conversion rate by 2.4%. Remarkable work.", initial: "JA", color: "from-blue-500 to-cyan-600" },
        { name: "Sarah Jenkins", platform: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg", text: "Best Shopify developers I've ever hired. Mobile speed is insane. Store loads in under 1.5s now.", initial: "SJ", color: "from-green-400 to-emerald-600" },
        { name: "Robert Wilson", platform: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg", text: "Transformed our clunky 1.0 theme to a sleek 2.0 powerhouse. Seamless migration with zero data loss.", initial: "RW", color: "from-blue-600 to-blue-800" },
        { name: "Emily Thompson", platform: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg", text: "Finally found experts who understand UX. Our AOV went up by 35% thanks to their strategic upsell integration.", initial: "ET", color: "from-purple-500 to-indigo-600" },
        { name: "Michael O'Neil", platform: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg", text: "Professional, communicative, and technically brilliant. They handled my complex API integrations perfectly.", initial: "MO", color: "from-red-500 to-rose-600" },
        { name: "David Beck", platform: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg", text: "The SEO structure they implemented is gold. We are already ranking on the first page for main keywords.", initial: "DB", color: "from-orange-500 to-yellow-600" },
        { name: "Jessica Miller", platform: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg", text: "Cleanest code I've seen in a Shopify store. No more app-bloat, just pure performance.", initial: "JM", color: "from-pink-500 to-purple-600" },
        { name: "Chris Ward", platform: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg", text: "Scaled my dropshipping store to $50k/mo. Their high-converting layout was the absolute game changer.", initial: "CW", color: "from-teal-500 to-green-600" },
        { name: "Linda Evans", platform: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg", text: "Brilliant execution on the custom checkout styling. The branding is now consistent throughout.", initial: "LE", color: "from-blue-400 to-indigo-500" },
        { name: "Kevin Scott", platform: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg", text: "If you want a Shopify store that actually makes money, hire this team. They know the psychology of selling.", initial: "KS", color: "from-slate-600 to-slate-800" },
        { name: "Alice Morgan", platform: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg", text: "The cross-border setup for my brand was flawless. Multi-currency and multi-language working perfectly.", initial: "AM", color: "from-cyan-500 to-blue-600" },
        { name: "Thomas Wright", platform: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg", text: "Incredible attention to detail. The custom animations make the site feel like a high-end luxury brand.", initial: "TW", color: "from-amber-500 to-orange-700" },
        { name: "Sophia Grey", platform: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg", text: "Fixed my tracking issues with GTM and Meta Pixel in 24 hours. Best analytics support.", initial: "SG", color: "from-violet-500 to-purple-700" },
        { name: "Daniel Reed", platform: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg", text: "Our page speed score went from 34 to 92. The bounce rate dropped significantly almost overnight.", initial: "DR", color: "from-emerald-500 to-teal-700" },
        { name: "Olivia Foster", platform: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg", text: "High-quality Shopify Plus development. They handled our large catalog migration with extreme care.", initial: "OF", color: "from-rose-400 to-pink-600" },
        { name: "Mark Stevens", platform: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg", text: "Unmatched expertise in Liquid and Hydrogen. They built us a headless store that is lightning fast.", initial: "MS", color: "from-gray-700 to-black" },
        { name: "Emma Walsh", platform: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg", text: "The conversion rate optimization strategies they used boosted our sales by 40% in just one month.", initial: "EW", color: "from-yellow-500 to-orange-600" },
        { name: "John Higgins", platform: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg", text: "Solid communication and top-tier technical skills. They are now our go-to Shopify agency.", initial: "JH", color: "from-blue-800 to-indigo-900" },
        { name: "Clara Bennett", platform: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork-1.svg", text: "They redesigned our landing pages and the bounce rate plummeted. Professionalism at its best.", initial: "CB", color: "from-teal-400 to-cyan-500" },
        { name: "Paul Richards", platform: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg", text: "The best investment for my e-commerce brand. Their theme customization is flawless and clean.", initial: "PR", color: "from-red-600 to-red-800" }
      ];

      // Slicing to create 3 unique rows from 40 items (concat used to triple data)
      const dataSet = [...allReviews, ...allReviews];
      const rows = [
        dataSet.slice(0, 13),
        dataSet.slice(13, 26),
        dataSet.slice(26, 39),
      ];

      return rows.map((rowData, rowIndex) => (
        <div key={rowIndex} className="marquee-container relative flex overflow-hidden py-1">
          <div className={`flex gap-4 whitespace-nowrap ${rowIndex === 1 ? 'animate-right' : 'animate-left'}`}>
            {rowData.map((t, i) => (
              <div
                key={i}
                className="w-[320px] shrink-0 p-5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-primary/40 transition-all duration-300 whitespace-normal"
              >
                <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-2">
                      <img src={t.logo} alt={t.platform} className="w-4 h-4 opacity-70" />
                      <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{t.platform}</span>
                   </div>
                   <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                      ))}
                   </div>
                </div>
                
                <p className="text-[12px] text-white/70 mb-4 italic leading-relaxed font-light">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-[10px] font-bold text-white shadow-lg`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-white">{t.name}</div>
                    <div className="text-[9px] text-white/30 uppercase tracking-wider">Merchant</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    })()}

    {/* Side Fades for Premium Look */}
    <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-30 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-30 pointer-events-none" />
  </div>
</section>

      {/* 9. Pricing Section - Alignment Fixed */}
<section id="pricing" className="py-24 z-20 relative overflow-hidden">
  <div className="section-container relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
        Ready to Scale Your <span className="text-gradient-gold">Business?</span>
      </h2>
      <p className="text-white/40 max-w-xl mx-auto text-base font-light">
        Transparent pricing with no hidden developer fees.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
      
      {/* 1. MAINTENANCE - $99 */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="glass-card p-8 flex flex-col border border-white/5 shadow-lg h-full"
      >
        <div className="h-32 mb-6"> {/* Fixed header height */}
          <h3 className="text-lg font-bold text-white/70">Maintenance</h3>
          <div className="text-4xl font-black text-white mt-2">$99</div>
          <p className="text-[10px] text-white/30 mt-1 italic uppercase tracking-wider">Store Refresh & Fixes</p>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {["Speed Optimization (90+)", "Bug Fixes & App Setup", "10 Product Listings", "Conversion Audit", "2-3 Days Delivery"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-white/50 font-light">
              <CheckCircle className="w-4 h-4 text-green-500/70 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button onClick={handleCTA} className="w-full py-3 rounded-lg text-sm font-semibold bg-white/5 text-white border border-white/10 hover:bg-white/10">
          Get Started
        </button>
      </motion.div>

      {/* 2. STANDARD - $299 (The Hero Package) */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="glass-card p-8 flex flex-col border-2 border-primary/40 shadow-2xl relative bg-white/[0.04] md:scale-105 z-30 h-full"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-black px-4 py-1 rounded-full uppercase z-40 whitespace-nowrap">
          Best Seller
        </div>
        <div className="h-32 mb-6"> {/* Fixed header height */}
          <h3 className="text-xl font-bold text-primary">Full Store Design</h3>
          <div className="text-5xl font-black text-white mt-2">$299</div>
          <p className="text-[10px] text-primary/70 mt-2 font-medium italic">*Premium theme license cost not included</p>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
          {["High-Converting UI/UX Design", "Winning Product Research", "Custom Liquid Functionality", "13-15 Days Rapid Delivery", "Mobile-First Optimization", "Marketing Pixel Setup", "30 Days Support"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-white/90">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className={item.includes("13-15 Days") ? "font-bold text-primary" : ""}>{item}</span>
            </li>
          ))}
        </ul>
        <button onClick={handleCTA} className="gradient-cta w-full py-4 rounded-xl text-sm font-black text-black uppercase tracking-widest">
          Claim This Offer
        </button>
      </motion.div>

      {/* 3. ENTERPRISE - CUSTOM (Fixed Alignment) */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="glass-card p-8 flex flex-col border border-white/5 shadow-lg h-full"
      >
        <div className="h-32 mb-6"> {/* Fixed header height matches others */}
          <h3 className="text-lg font-bold text-white/70">Enterprise</h3>
          <div className="text-4xl font-black text-white mt-2 italic tracking-tighter">Custom</div>
          <p className="text-[10px] text-white/30 mt-1 italic uppercase tracking-wider">7-Figure Scalability</p>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {["Headless Shopify (Hydrogen)", "Custom App Development", "Advanced API Integration", "Unlimited Support", "Full Brand Strategy", "Priority 24/7 Support"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-white/50 font-light">
              <CheckCircle className="w-4 h-4 text-green-500/70 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button onClick={handleCTA} className="w-full py-3 rounded-lg text-sm font-semibold bg-white/5 text-white border border-white/10 hover:bg-white/10">
          Book Discovery Call
        </button>
      </motion.div>

    </div>
  </div>
</section>


    {/* Blog Section */}
    <div className="z-20 relative">
        <BlogSection />
      </div>


{/* About Section is here*/}
<div className="z-20 relative">
        <FAQSection />
      </div>

      {/* 10. Final CTA Section */}
      <section id="final-cta" className="py-24 relative radial-glow z-20">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
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
      `}</style>
    </div>
  );
};

export default FunnelStep1;