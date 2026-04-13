// import { motion } from "framer-motion";
// import { ArrowRight, ExternalLink } from "lucide-react";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const }, // Thora delay optimize kiya
//   }),
// };

// const projects = [
//   { name: "Luxe Fragrances", cat: "Luxury Perfumes", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800" },
//   { name: "FitGears", cat: "Fitness Apparel", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800" },
//   { name: "Silk & Stone", cat: "Modern Fashion", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800" },
//   { name: "Urban Kicks", cat: "Sneaker Store", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800" },
//   { name: "Pure Brew", cat: "Coffee Roasters", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800" },
//   { name: "Glow Skin", cat: "Organic Skincare", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800" },
// ];

// // Tripled for seamless infinite loop
// const duplicatedProjects = [...projects, ...projects, ...projects];

// const PortfolioSection = () => {
//   return (
//     <section id="portfolio" className="py-10 bg-black/40 overflow-hidden relative">
//       {/* CSS for Smooth Infinite Scroll */}
//       <style>{`
//         @keyframes scroll-portfolio {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-33.33%); }
//         }
//         .animate-portfolio {
//           animation: scroll-portfolio 40s linear infinite;
//         }
//         .portfolio-container:hover .animate-portfolio {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="section-container mb-16 text-center">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={fadeInUp}
//           custom={0}
//         >
//           <h2 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight">
//             My <span className="text-gradient-gold">Work</span>
//           </h2>
//           <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
//             Premium Shopify stores designed for high conversions and global scale.
//           </p>
//         </motion.div>
//       </div>

//       {/* 3D Carousel Container */}
//       <div className="portfolio-container relative flex items-center overflow-hidden py-10">
//         <div className="animate-portfolio flex gap-8 whitespace-nowrap px-4">
//           {duplicatedProjects.map((project, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10, scale: 1.02 }} // Scale thora subtle kiya for elegance
//               className="w-[350px] md:w-[450px] shrink-0 group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 cursor-pointer"
//             >
//               {/* Image with Grayscale to Color Transition */}
//               <div className="aspect-[16/11] overflow-hidden bg-white/5">
//                 <img 
//                   src={project.img} 
//                   alt={`${project.name} Portfolio Preview`} 
//                   loading="lazy" // <--- Performance boost
//                   className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110"
//                 />
//               </div>

//               {/* Overlay Content */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
//                 <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
//                   <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block drop-shadow-md">
//                     {project.cat}
//                   </span>
//                   <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">{project.name}</h3>
                  
//                   <div className="flex items-center gap-4">
//                     <button 
//                       aria-label={`View live preview of ${project.name}`}
//                       className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-primary hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--primary),0.4)] transition-all duration-300"
//                     >
//                       Live Preview <ExternalLink className="w-3 h-3" />
//                     </button>
//                     <span className="text-white/50 text-xs font-medium group-hover:text-primary transition-colors duration-300 italic">
//                       Shopify Plus Build
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Glowing Border on Hover */}
//               <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-3xl transition-all duration-500 pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Cinematic Side Fades */}
//         <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background via-background/560 to-transparent z-10 pointer-events-none" />
//         <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none" />
//       </div>

//       {/* Decorative Line */}
//       <div className="mt-4 flex justify-center">
//          <div className="h-[2px] w-60 bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-50" />
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;



import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence add kiya
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react"; // Hooks add kiye

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

// Data for the new Feature Showcase section
const showcaseProjects = [
  {
    title: "Forma Liv",
    description: "A minimalist furniture store designed for a premium feel. We kept the layout clean and warm, making it easy for customers to browse and shop for high-end home decor without any distractions.",
    features: ["45% Increase in Mobile CR", "Sub-1s Loading Time", "Custom Scent Finder" , "Clean & Minimal Design"],
    img: "/FormaLiv.webp",
    color: "#facc15"
  },
  {
    title: "AeroTech Gear",
    description: "A sharp, modern tech store built for gadgets and drones. I focused on a professional look and a fast checkout flow to make buying electronics easy and reliable.",
    features: ["Flash Sale Optimization", "Advanced Inventory Sync", "3D Product Previews"],
    img: "/AeroTech-Gear-Shopify-Store.webp",
    color: "#ffffff"
  },
  {
    title: "Axeon Sport",
    description: "A high-performance store built for athletes. I combined a bold, technical look with a fast shopping flow to make sure the gear stands out and the checkout is effortless.",
    // features: ["Subscription Model", "UGC Integration", "Skincare Quiz Funnel"],
    features: ["Rapid Peak Scaling", "UGC Integration", "Mobile Optimization"],
    img: "/Axeon-Sport-Shopify-Store.webp",
    color: "#facc15"
  },
  {
    title: "Haven Loom",
    description: "A high-end, bespoke furniture store designed for the thoughtful home. I combined a clean, natural palette with a seamless interface to make shopping for handcrafted luxury simple and incredibly intuitive.",
    features: ["Bespoke UI Design", "360° AR Visualization", "Mobile-First Luxury"],
    img: "/Haven-Loom-Shopify-Store.webp",
    color: "#facc15"
  },  
  {
    title: "Naturale Skincare",
    description: "Experience botanical luxury. I crafted this premium skincare store with a focus on natural elegance and modern functionality. The goal was to make high-end beauty shopping feel effortless and perfectly personalized for every customer.",
    features: ["Smart Skincare Funnel", "UGC Integration", "Skincare Quiz Funnel"],
    img: "/Naturale-Skincare-Shopify-Store.webp",
    color: "#facc15"
  },
  {
    title: "Sustainable Drops",
    description: "Modern streetwear with a conscious soul. I designed this store to bridge the gap between high-end fashion and eco-friendly practices. The layout is intentionally clean, allowing the `recycled` aesthetic and premium textures to take center stage.",
	  features: ["Dynamic Drop Architecture", "Lookbook-Integrated UX", "Eco-Metric Visualization"],
    img: "/Sustainable-Drops-Shopify-Store.webp",
    color: "#facc15"
  },
  {
    title: "Gadget Array",
    description: "Premium tech meets effortless shopping. I designed this storefront for high-end electronics, focusing on a clean white-space aesthetic that highlights technical details. The goal was to create a trustworthy environment for gadget enthusiasts to explore and buy with ease.",
	  features: ["High-Fidelity Product Previews", "Unified Accessory Ecosystem", "Sub-1s Interaction Speed"],
    img: "/Gadget-Array-Shopify-Store.webp",
    color: "#facc15"
  },
  {
    title: "Vitality Wellness",
    description: "A serene, botanical-inspired store built for the health-conscious consumer. I created a calm, organic atmosphere using earthy tones to make browsing for premium supplements feel like a natural extension of a wellness routine.",
	  features: ["Smart Supplement Finder", "Subscription Model Ready", "Conversion-Optimized Flow"],
    img: "/Vitality-Wellness-Shopify-Store.webp",
    color: "#facc15"
  },
  {
    title: "Culinary Edge",
    description: "A sophisticated, high-end storefront built for professional chefs and home cooking enthusiasts. We designed this experience to reflect the precision of the tools it sells, using a bold, dark aesthetic that emphasizes quality, durability, and premium kitchen aesthetics.",
	  features: ["Precision UI Design", "Conversion-Optimized Checkout", "Dynamic Sales Analytics"],
    img: "/Culinary-Edge-Shopify-Store.webp",
    color: "#facc15"
  }
];

const projects = [
  { name: "Luxe Fragrances", cat: "Luxury Perfumes", img: "/Nawaz-Builds-Perfume-ShopifyStore.webp" },
  { name: "FitGears", cat: "Fitness Apparel", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800" },
  { name: "Silk & Stone", cat: "Modern Fashion", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800" },
  { name: "Urban Fit", cat: "Clothing Store", img: "/Nawaz-Builds-Urban-Clothing-ShopifyStore.webp" },
  { name: "Glow Skin", cat: "Organic Skincare", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800" },
  { name: "Nura Fashion", cat: "Fashion", img: "/Nawaz-Builds-Ladies-ShopifyStore.webp" },
  { name: "Pure Brew", cat: "Coffee Roasters", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800" },
  { name: "Denim Den", cat: "Kids Wear", img: "/Nawaz-Builds-KidsWear-ShopifyStore.webp" },
];

const duplicatedProjects = [...projects, ...projects, ...projects];

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide logic for the Feature Showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-black/40 overflow-hidden relative">
      <style>{`
        @keyframes scroll-portfolio {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-portfolio {
          animation: scroll-portfolio 40s linear infinite;
        }
        .portfolio-container:hover .animate-portfolio {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- EXISTING INFINITE SLIDER --- */}
      <div className="section-container mb-16 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} custom={0}>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight">
            My <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
            Premium Shopify stores designed for high conversions and global scale.
          </p>
        </motion.div>
      </div>

      <div className="portfolio-container relative flex items-center overflow-hidden py-10 mb-20">
        <div className="animate-portfolio flex gap-8 whitespace-nowrap px-4">
          {duplicatedProjects.map((project, i) => (
            <motion.div key={i} whileHover={{ y: -10, scale: 1.02 }} 
            className="w-[350px] md:w-[450px] shrink-0 group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="aspect-[16/11] overflow-hidden bg-white/5">
                <img src={project.img} alt={project.name} loading="lazy" className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">{project.cat}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-primary transition-all duration-300">
                      Live Preview <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      {/* --- NEW FEATURE SHOWCASE SECTION (APPEAR/DISAPPEAR) --- */}
      {/* <div className="section-container relative z-20">
        <div className="bg-white/[0.03] border border-white/6 rounded-[2rem] p-8 md:p-7 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
            
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-primary font-black tracking-widest text-xs uppercase mb-4 block">Project Spotlight</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    {showcaseProjects[activeIndex].title}
                  </h2>
                  <p className="text-white/50 text-lg mb-8 font-light leading-relaxed">
                    {showcaseProjects[activeIndex].description}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {showcaseProjects[activeIndex].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-white/80">
                        <CheckCircle2 size={20} className="text-primary" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="group flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-500">
                    View Case Study <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-3 mt-12">
                {showcaseProjects.map((_, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 transition-all duration-500 cursor-pointer rounded-full ${activeIndex === i ? 'w-12 bg-primary' : 'w-4 bg-white/10'}`}
                  />
                ))}
              </div>
            </div>
              <div className="order-1 lg:order-2 relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 50, filter: "blur(10px)", scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, x: -50, filter: "blur(10px)", scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 20, 
                      duration: 0.8,
                      ease: "easeOut" 
                    }}
                    className="w-full flex justify-center"
                  >
                    <img
                      src={showcaseProjects[activeIndex].img}
                      className="w-full h-auto max-h-[580px] object-contain rounded-[2.5rem] drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]" 
                      alt="Showcase Project"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute -z-10 w-[80%] h-[80%] bg-primary/10 blur-[120px] rounded-full" />
              </div>

          </div>
        </div>
      </div> */}


      {/* --- NEW FEATURE SHOWCASE SECTION --- */}
<div className="section-container relative z-20">
  <div className="bg-white/[0.03] border border-white/6 rounded-[2rem] p-8 md:p-7 backdrop-blur-xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
      
      {/* Left Side: Text Details */}
      {/* ADDED: min-h and flex to keep text centered and stable */}
      <div className="order-2 lg:order-1 min-h-[450px] md:min-h-[400px] flex flex-col justify-center relative">
        <AnimatePresence mode="popLayout"> {/* MOVED: mode to popLayout */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-black tracking-widest text-xs uppercase mb-4 block">Project Spotlight</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {showcaseProjects[activeIndex].title}
            </h2>
            <p className="text-white/50 text-lg mb-8 font-light leading-relaxed">
              {showcaseProjects[activeIndex].description}
            </p>
            
            <div className="space-y-4 mb-10">
              {showcaseProjects[activeIndex].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-500">
              View Case Study <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators - Stays fixed at bottom of text container */}
        <div className="flex gap-3 mt-12">
          {showcaseProjects.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setActiveIndex(i)}
              className={`h-1 transition-all duration-500 cursor-pointer rounded-full ${activeIndex === i ? 'w-12 bg-primary' : 'w-4 bg-white/10'}`}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Image Appear/Disappear */}
      {/* ADDED: min-h to prevent layout collapse on mobile */}
      <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[300px] md:min-h-[580px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, x: -50, filter: "blur(10px)", scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
            className="w-full flex justify-center absolute inset-0 items-center" // ADDED: absolute inset-0
          >
            <img
              src={showcaseProjects[activeIndex].img}
              className="w-full h-auto max-h-[450px] md:max-h-[580px] object-contain rounded-[2.5rem] drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]" 
              alt="Showcase Project"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Glow Background */}
        <div className="absolute -z-10 w-[80%] h-[80%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

    </div>
  </div>
</div>



      
    </section>
  );
};

export default PortfolioSection;