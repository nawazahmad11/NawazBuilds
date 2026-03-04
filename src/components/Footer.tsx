import { useNavigate, useLocation, Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Youtube, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // CHANGE THIS: Agay aap apni logo image ya icon ka path yahan de saken ge
  const websiteLogo = "/path-to-your-logo.png"; // Example: "/nawaz-logo.png"

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-[#050505] backdrop-blur supports-[backdrop-filter]:bg-[#050505]/60">
      <div className="container mx-auto px-6 py-16">
        
        {/* Top Section: Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              
              {/* --- LOGO IMAGE / ICON OPTION --- */}
              {websiteLogo ? (
                <img 
                  src={websiteLogo} 
                  alt="Nawaz Ahmad Logo" 
                  className="h-10 w-auto rounded-full object-contain" // Style ko Shajeel Afzal ke logo se align kiya hai
                />
              ) : (
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-black text-black text-xl">
                  N
                </div>
              )}
              
              <h3 className="text-xl font-bold tracking-tight text-white">Nawaz Ahmad</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Shopify Architect & Performance Expert. Helping e-commerce brands scale from $0 to 7-figures with high-performance Shopify stores.
            </p>
            
            <div className="space-y-3 text-sm text-white/40">
              <div className="flex items-center space-x-3 hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} />
                <a href="mailto:hello@nawazahmad.com">hello@nawazahmad.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Lahore, Dubai & Remote</span>
              </div>
            </div>
          </div>

          {/* Column 2: Main Platforms */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Expertise</h4>
            <ul className="space-y-3 text-sm text-white/40 font-medium">
              <li><button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">Store Development</button></li>
              <li><button onClick={() => scrollToSection("performance")} className="hover:text-primary transition-colors">Speed Optimization</button></li>
              <li><button onClick={() => scrollToSection("ux")} className="hover:text-primary transition-colors">UX Audit</button></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          {/* Column 3: Freelance/Trust */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Hire Me</h4>
            <ul className="space-y-3 text-sm text-white/40 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Upwork Profile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fiverr Pro</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shopify Partners</a></li>
            </ul>
          </div>

          {/* Column 4: Community */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Resources</h4>
            <ul className="space-y-3 text-sm text-white/40 font-medium">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Free Shopify Tips</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">WhatsApp Channel</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FB Community</a></li>
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-white/40 font-medium">
              <li><a href="https://wa.me/923059552222" className="flex items-center gap-2 hover:text-primary transition-colors"><MessageCircle size={14} /> WhatsApp</a></li>
              <li><a href="mailto:hello@nawazahmad.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={14} /> Email Me</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Newsletter */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-1">Scale Your Shopify Store</h4>
            <p className="text-sm text-white/40">Get weekly conversion and speed tips directly to your inbox.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input 
              placeholder="you@example.com" 
              className="flex-1 min-w-0 sm:min-w-[300px] px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
              type="email" 
            />
            <button className="px-8 py-3 rounded-xl bg-primary text-black font-black uppercase text-[10px] tracking-widest hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              Subscribe <Send size={14} />
            </button>
          </form>
        </div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-black uppercase tracking-[3px] text-white/20">Follow me:</span>
            <div className="flex items-center space-x-3">
              {[
                { icon: <Youtube size={18} />, link: "#" },
                { icon: <Linkedin size={18} />, link: "#" },
                { icon: <Instagram size={18} />, link: "#" },
                { icon: <MessageCircle size={18} />, link: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-[10px] font-bold text-white/20 uppercase tracking-[3px]">
            © {new Date().getFullYear()} NAWAZ AHMAD. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;