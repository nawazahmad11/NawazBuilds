import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AnimatedCounter } from "@/components/Tools/AnimatedCounter";

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

const allReviews = [
  { name: "James Anderson", platform: "Upwork", logo: "/Nawaz-builds-icon-upwork.webp", text: "The custom Liquid sections they built for my product page increased our conversion rate by 2.4%. Remarkable work.", initial: "JA", color: "from-blue-500 to-cyan-600" },
  { name: "Sarah Jenkins", platform: "Fiverr", logo: "/Nawaz-builds-icon-Fiverr.webp", text: "Best Shopify developers I've ever hired. Mobile speed is insane. Store loads in under 1.5s now.", initial: "SJ", color: "from-green-400 to-emerald-600" },
  { name: "Robert Wilson", platform: "LinkedIn", logo: "/Nawaz-builds-icon-Linkedin.webp", text: "Transformed our clunky 1.0 theme to a sleek 2.0 powerhouse. Seamless migration with zero data loss.", initial: "RW", color: "from-blue-600 to-blue-800" },
  { name: "Emily Thompson", platform: "Upwork", logo: "/Nawaz-builds-icon-upwork.webp", text: "Finally found experts who understand UX. Our AOV went up by 35% thanks to their strategic upsell integration.", initial: "ET", color: "from-purple-500 to-indigo-600" },
  { name: "Michael O'Neil", platform: "Fiverr", logo: "/Nawaz-builds-icon-Fiverr.webp", text: "Professional, communicative, and technically brilliant. They handled my complex API integrations perfectly.", initial: "MO", color: "from-red-500 to-rose-600" },
  { name: "David Beck", platform: "Upwork", logo: "/Nawaz-builds-icon-upwork.webp", text: "The SEO structure they implemented is gold. We are already ranking on the first page for main keywords.", initial: "DB", color: "from-orange-500 to-yellow-600" },
  { name: "Jessica Miller", platform: "LinkedIn", logo: "/Nawaz-builds-icon-Linkedin.webp", text: "Cleanest code I've seen in a Shopify store. No more app-bloat, just pure performance.", initial: "JM", color: "from-pink-500 to-purple-600" },
  { name: "Chris Ward", platform: "Fiverr", logo: "/Nawaz-builds-icon-Fiverr.webp", text: "Scaled my dropshipping store to $50k/mo. Their high-converting layout was the absolute game changer.", initial: "CW", color: "from-teal-500 to-green-600" },
  { name: "Linda Evans", platform: "Upwork", logo: "/Nawaz-builds-icon-upwork.webp", text: "Brilliant execution on the custom checkout styling. The branding is now consistent throughout.", initial: "LE", color: "from-blue-400 to-indigo-500" },
  { name: "Kevin Scott", platform: "LinkedIn", logo: "/Nawaz-builds-icon-Linkedin.webp", text: "If you want a Shopify store that actually makes money, hire this team. They know the psychology of selling.", initial: "KS", color: "from-slate-600 to-slate-800" },
  { name: "Alice Morgan", platform: "Upwork", logo: "/Nawaz-builds-icon-upwork.webp", text: "The cross-border setup for my brand was flawless. Multi-currency and multi-language working perfectly.", initial: "AM", color: "from-cyan-500 to-blue-600" },
  { name: "Thomas Wright", platform: "Fiverr", logo: "/Nawaz-builds-icon-Fiverr.webp", text: "Incredible attention to detail. The custom animations make the site feel like a high-end luxury brand.", initial: "TW", color: "from-amber-500 to-orange-700" },
  { name: "Sophia Grey", platform: "LinkedIn", logo: "/Nawaz-builds-icon-Linkedin.webp", text: "Fixed my tracking issues with GTM and Meta Pixel in 24 hours. Best analytics support.", initial: "SG", color: "from-violet-500 to-purple-700" },
  { name: "Daniel Reed", platform: "Upwork", logo: "/Nawaz-builds-icon-upwork.webp", text: "Our page speed score went from 34 to 92. The bounce rate dropped significantly almost overnight.", initial: "DR", color: "from-emerald-500 to-teal-700" },
  { name: "Olivia Foster", platform: "Fiverr", logo: "/Nawaz-builds-icon-Fiverr.webp", text: "High-quality Shopify Plus development. They handled our large catalog migration with extreme care.", initial: "OF", color: "from-rose-400 to-pink-600" },
  { name: "Mark Stevens", platform: "Upwork", logo: "/Nawaz-builds-icon-upwork.webp", text: "Unmatched expertise in Liquid and Hydrogen. They built us a headless store that is lightning fast.", initial: "MS", color: "from-gray-700 to-black" },
  { name: "Emma Walsh", platform: "Fiverr", logo: "/Nawaz-builds-icon-Fiverr.webp", text: "The conversion rate optimization strategies they used boosted our sales by 40% in just one month.", initial: "EW", color: "from-yellow-500 to-orange-600" },
  { name: "John Higgins", platform: "LinkedIn", logo: "/Nawaz-builds-icon-Linkedin.webp", text: "Solid communication and top-tier technical skills. They are now our go-to Shopify agency.", initial: "JH", color: "from-blue-800 to-indigo-900" },
  { name: "Clara Bennett", platform: "Upwork", logo: "/Nawaz-builds-icon-upwork.webp", text: "They redesigned our landing pages and the bounce rate plummeted. Professionalism at its best.", initial: "CB", color: "from-teal-400 to-cyan-500" },
  { name: "Paul Richards", platform: "Fiverr", logo: "/Nawaz-builds-icon-Fiverr.webp", text: "The best investment for my e-commerce brand. Their theme customization is flawless and clean.", initial: "PR", color: "from-red-600 to-red-800" },
];

const SocialProofSection = () => {
  const dataSet = [...allReviews, ...allReviews];
  const rows = [
    dataSet.slice(0, 13),
    dataSet.slice(13, 26),
    dataSet.slice(26, 39),
  ];

  return (
    <section className="py-12 relative overflow-hidden z-20">
      <div className="section-container relative z-10 text-white">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-y border-white/5 py-10 bg-white/[0.01] backdrop-blur-sm shadow-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {[
            { value: 150, suffix: "+", label: "Stores Launched" },
            { value: 2, prefix: "$", suffix: "M+", label: "Client Revenue" },
            { value: 150, suffix: "k+", label: "Orders Processed" },
            { value: 15, suffix: "-Day", label: "Avg Delivery" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} custom={i} className="text-center group cursor-default">
              <div className="text-4xl sm:text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-medium text-white/40 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Trusted by Global Merchants
          </h2>
          <p className="text-white/40 max-w-[600px] mx-auto text-lg font-light">
            Real feedback from happy store owners who scaled their business with me.
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-left { animation: marquee-left 90s linear infinite; }
        .animate-right { animation: marquee-right 90s linear infinite; }
        .marquee-wrapper:hover .animate-left, .marquee-wrapper:hover .animate-right { animation-play-state: paused; }
      `}</style>

      <div className="marquee-wrapper flex flex-col gap-4 relative py-4">
        {rows.map((rowData, rowIndex) => (
          <div key={rowIndex} className="marquee-container relative flex overflow-hidden py-1">
            <div className={`flex gap-4 whitespace-nowrap ${rowIndex === 1 ? "animate-right" : "animate-left"}`}>
              {rowData.map((t, i) => (
                <div
                  key={i}
                  className="w-[320px] shrink-0 p-5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 whitespace-normal shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={t.logo}
                        alt={t.platform}
                        width={16}
                        height={16}
                        loading="lazy"
                        decoding="async"
                        className="w-4 h-4 opacity-70"
                      />
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{t.platform}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[12px] text-white/70 mb-4 italic leading-relaxed font-light">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-[10px] font-bold text-white shadow-lg border border-white/20`}>
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-xs text-white">{t.name}</div>
                      <div className="text-[9px] text-white/40 uppercase tracking-wider">Merchant</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-30 pointer-events-none" />
      </div>
    </section>
  );
};

export default SocialProofSection;
