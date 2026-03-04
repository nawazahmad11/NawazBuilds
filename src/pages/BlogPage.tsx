import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { useState } from "react";

// Blog Data (Ye wahi data hai jo aapke Details page mein hai)
const allPosts = [
  {
    id: "shopify-speed-secrets",
    title: "Shopify Speed Secrets: How to Hit a 90+ Score in 2024",
    excerpt: "Learn the exact technical steps to optimize your Liquid code and images for lightning-fast loading times.",
    date: "March 15, 2024",
    readTime: "6 min read",
    image: "/blog-1.jpg",
    tags: ["Development", "Performance"]
  },
  {
    id: "high-converting-funnels",
    title: "The Psychology of High-Converting Shopify Funnels",
    excerpt: "Why some stores get clicks while others get sales. Discover the layout secrets of 7-figure brands.",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "/blog-2.jpg",
    tags: ["UX Design", "Conversion"]
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation: Set Your Sales on Autopilot",
    excerpt: "Stop chasing customers. Learn how to set up email and SMS flows that bring back 30% of abandoned carts.",
    date: "March 5, 2024",
    readTime: "8 min read",
    image: "/blog-3.jpg",
    tags: ["Automation", "Sales"]
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation: Set Your Sales on Autopilot",
    excerpt: "Stop chasing customers. Learn how to set up email and SMS flows that bring back 30% of abandoned carts.",
    date: "March 5, 2024",
    readTime: "8 min read",
    image: "/blog-3.jpg",
    tags: ["Automation", "Sales"]
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation: Set Your Sales on Autopilot",
    excerpt: "Stop chasing customers. Learn how to set up email and SMS flows that bring back 30% of abandoned carts.",
    date: "March 5, 2024",
    readTime: "8 min read",
    image: "/blog-3.jpg",
    tags: ["Automation", "Sales"]
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation: Set Your Sales on Autopilot",
    excerpt: "Stop chasing customers. Learn how to set up email and SMS flows that bring back 30% of abandoned carts.",
    date: "March 5, 2024",
    readTime: "8 min read",
    image: "/blog-3.jpg",
    tags: ["Automation", "Sales"]
  }
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-40 pb-20">
      <div className="section-container">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
                Insights for <br />
                <span className="text-primary italic">Shopify Titans.</span>
            </motion.h1>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl">
                Technical guides, conversion psychology, and scaling strategies for the modern e-commerce landscape.
            </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="relative mb-16 max-w-xl group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={20} />
            <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 pl-16 pr-6 text-sm focus:outline-none focus:border-primary/50 transition-all"
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Link to={`/blog/${post.id}`} className="group block bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-6 hover:border-primary/20 transition-all h-full flex flex-col">
                        {/* Thumbnail */}
                        <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8 border border-white/5 relative">
                            <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute top-4 left-4 flex gap-2">
                                {post.tags.slice(0, 1).map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md text-[9px] font-black uppercase tracking-widest rounded-full border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 space-y-4 px-2">
                            <div className="flex items-center gap-4 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                                <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {post.date}</span>
                                <span className="flex items-center gap-1.5"><Clock size={12} className="text-primary" /> {post.readTime}</span>
                            </div>
                            <h3 className="text-2xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Footer Link */}
                        <div className="pt-8 mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[2px] text-white/20 group-hover:text-primary transition-colors px-2">
                            Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>

        {filteredPosts.length === 0 && (
            <div className="text-center py-40 border border-dashed border-white/5 rounded-[3rem]">
                <p className="text-white/40 uppercase tracking-widest font-black">No articles found matching your search.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;