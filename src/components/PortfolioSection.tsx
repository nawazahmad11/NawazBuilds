import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" as const },
  }),
};

const projects = [
  { name: "Luxe Fragrances", cat: "Luxury Perfumes", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800" },
  { name: "FitGear India", cat: "Fitness Apparel", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800" },
  { name: "Silk & Stone", cat: "Modern Fashion", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800" },
  { name: "Urban Kicks", cat: "Sneaker Store", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800" },
  { name: "Pure Brew", cat: "Coffee Roasters", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800" },
  { name: "Glow Skin", cat: "Organic Skincare", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800" },
];

// Tripled for seamless infinite loop
const duplicatedProjects = [...projects, ...projects, ...projects];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-10 bg-black/40 overflow-hidden relative">
      {/* CSS for Smooth Infinite Scroll */}
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

      <div className="section-container mb-16 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tight">
            My <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
            Premium Shopify stores designed for high conversions and global scale.
          </p>
        </motion.div>
      </div>

      {/* 3D Carousel Container */}
      <div className="portfolio-container relative flex items-center overflow-hidden py-10">
        <div className="animate-portfolio flex gap-8 whitespace-nowrap px-4">
          {duplicatedProjects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="w-[350px] md:w-[450px] shrink-0 group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl transition-all duration-500"
            >
              {/* Image with Grayscale to Color Transition */}
              <div className="aspect-[16/11] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                    {project.cat}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold hover:bg-primary transition-colors">
                      Live Preview <ExternalLink className="w-3 h-3" />
                    </button>
                    <span className="text-white/40 text-xs font-medium group-hover:text-primary transition-colors italic">
                      Shopify Plus Build
                    </span>
                  </div>
                </div>
              </div>

              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-3xl transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Cinematic Side Fades */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-background via-background/75 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-background via-background/75 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Decorative Line */}
      <div className="mt-1 flex justify-center">
         <div className="h-[2px] w-60 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      </div>
    </section>
  );
};

export default PortfolioSection;