import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: "shopify-speed-secrets",
    title: "Shopify Speed Secrets: How to Hit a 90+ Score in 2024",
    excerpt: "Learn the exact technical steps to optimize your Liquid code and images for lightning-fast loading times.",
    date: "March 15, 2024",
    image: "/blog-1.jpg" 
  },
  {
    id: "high-converting-funnels",
    title: "The Psychology of High-Converting Shopify Funnels",
    excerpt: "Why some stores get clicks while others get sales. Discover the layout secrets of 7-figure brands.",
    date: "March 10, 2024",
    image: "/blog-2.jpg"
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation: Set Your Sales on Autopilot",
    excerpt: "Stop chasing customers. Learn how to set up email and SMS flows that bring back 30% of abandoned carts.",
    date: "March 5, 2024",
    image: "/blog-3.jpg"
  }
];

const BlogSection = () => {
  const navigate = useNavigate(); // Navigation handle karne ke liye

  return (
    <section id="blog" className="py-24 bg-black/10 relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Header Portion */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Recent <span className="text-gradient-gold">Blog Posts</span>
            </h2>
            <p className="text-white/40 text-lg font-light">
              Latest insights on Shopify development and e-commerce scaling.
            </p>
          </div>
          
          {/* ✅ Improved Button with Navigate */}
          <button 
            onClick={() => navigate('/blog')} 
            className="px-6 py-2 border border-primary/40 text-primary rounded-full text-sm font-bold flex items-center gap-2 hover:bg-primary/10 transition-all group"
          >
            View all posts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          {blogs.map((blog, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              className={`p-8 flex flex-col cursor-pointer border-white/5 ${i !== blogs.length - 1 ? 'md:border-r' : ''} border-b md:border-b-0`}
              onClick={() => navigate(`/blog/${blog.id}`)} // Individual post navigation
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 relative group-card">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-white/40 text-sm font-light mb-6 flex-1 line-clamp-3">
                {blog.excerpt}
              </p>
              <div className="text-[10px] text-white/20 font-black uppercase tracking-widest border-t border-white/5 pt-4 flex justify-between items-center">
                <span>{blog.date}</span>
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;