import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
  visible: { transition: { staggerChildren: 0.15 } },
};

const projects = [
  {
    name: "Luxe Fragrances",
    category: "Beauty & Wellness",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop",
  },
  {
    name: "FitGear India",
    category: "Sports & Fitness",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=400&fit=crop",
  },
  {
    name: "Silk & Stone",
    category: "Luxury Fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-20">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="text-center mb-12"
      >
        <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-2">
          Our Work
        </motion.h2>
        <motion.p variants={fadeInUp} custom={1} className="text-muted-foreground text-lg">
          Premium Shopify stores we've launched
        </motion.p>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i}
            className="group relative glass-card overflow-hidden rounded-xl cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} - Shopify Development Services`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                <ExternalLink className="w-4 h-4" /> Visit Live
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PortfolioSection;
