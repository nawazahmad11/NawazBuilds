import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Link import kiya

const blogs = [
  {
    id: "shopify-checkout-extensibility-guide",
    title: "Shopify Checkout Extensibility: Customer Events, Web Pixels and Attribution Data, Explained",
    excerpt: "Checkout.liquid is retired. How customer events and web pixels now carry your tracking and attribution, and how to check your store made the move properly.",
    date: "November 2, 2026",
    image: "/blog/shopify-checkout-extensibility-guide.webp",
  },
  {
    id: "shopify-store-audit-checklist",
    title: "Shopify Store Audit Checklist: 20 Checks That Matter",
    excerpt: "Run the 20 checks a professional audit runs: speed, product pages, checkout, trust and SEO basics, in order, with a phone and a laptop.",
    date: "November 2, 2026",
    image: "/blog/shopify-store-audit-checklist.webp",
  },
  {
    id: "magento-to-shopify-migration-checklist",
    title: "Magento to Shopify Migration Checklist: Before, During and After the Move",
    excerpt: "The migration checklist we work from: data mapping, extension decisions, redirect planning, testing and launch checks, in the order that protects your rankings.",
    date: "November 2, 2026",
    image: "/blog/magento-to-shopify-migration-checklist.webp",
  }
];

const BlogSection = () => {
  // useNavigate ki ab zaroorat nahi hai yahan

  return (
    <section id="blog" className="py-24 bg-black/10 relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Header Portion */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Latest <span className="text-gradient-gold">Shopify Guides</span>
            </h2>
            <p className="text-white/60 text-lg font-light">
              Latest insights on Shopify development and e-commerce scaling.
            </p>
          </div>
          
          {/* ✅ Fixed: Link for Right Click Support */}
          <Link 
            to="/blog" 
            className="px-6 py-2 border border-primary/40 text-primary rounded-full text-sm font-bold flex items-center gap-2 hover:bg-primary/10 transition-all group no-underline"
          >
            View all posts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {blogs.map((blog, i) => (
            /* ✅ Fixed: Wrapped entire card in Link for Right Click functionality */
            <Link 
              key={i} 
              to={`/blog/${blog.id}`} 
              className="no-underline block group"
            >
              <motion.div 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                className={`p-8 h-full flex flex-col border-white/5 ${i !== blogs.length - 1 ? 'md:border-r' : ''} border-b md:border-b-0 transition-colors`}
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 relative group-card">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 select-none">
                {blog.title}
                  
                </h3>
                <p className="text-white/60 text-sm font-light mb-6 flex-1 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="text-[10px] text-white/40 font-black uppercase tracking-widest border-t border-white/5 pt-4 flex justify-between items-center">
                  <span>{blog.date}</span>
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;