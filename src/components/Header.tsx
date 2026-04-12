import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Rocket, ChevronDown, Calculator, ShieldCheck, Layout, ShoppingBag } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const websiteLogo = "/NawazCart.webp"; 

  const tools = [
    { name: "Profit Calculator", icon: <Calculator size={14} />, path: "/tools?tool=calculator" },
    { name: "Policy Generator", icon: <ShieldCheck size={14} />, path: "/tools?tool=policy" },
    { name: "Theme Detector", icon: <Layout size={14} />, path: "/tools?tool=detector" },
    { name: "Name Generator", icon: <ShoppingBag size={14} />, path: "/tools?tool=generator" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["services", "portfolio", "pricing", "faq"];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
      else if (location.pathname === "/blog") setActiveSection("blog");
      else if (location.pathname.includes("/tools")) setActiveSection("tools");
      else setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Underline Component for consistency
  const NavUnderline = ({ active }: { active: boolean }) => (
    <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 rounded-full bg-[#f9a825] ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pt-4 pointer-events-none">
      <div 
        className={`
          flex items-center justify-between transition-all duration-700 ease-in-out pointer-events-auto
          ${isScrolled 
            ? "max-w-5xl w-[95%] md:w-[90%] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            // ? "max-w-5xl w-[90%] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            : "max-w-7xl w-full bg-transparent px-6 py-4"
          }
        `}
      >
        {/* Logo Section */}
        <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer shrink-0">
          <img src={websiteLogo} alt="Logo" className="w-10 h-10 object-contain rounded-full border border-white/10" />
          <span className="text-xl font-black tracking-tight text-white italic">Nawaz Ahmad</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Services */}
          <div className="relative py-1 group">
            <button onClick={() => handleNavClick("services")} className={`text-[13px] font-medium transition-all ${activeSection === "services" ? "text-[#f9a825]" : "text-white/50 hover:text-[#f9a825]"}`}>
              Services
            </button>
            <NavUnderline active={activeSection === "services"} />
          </div>

          {/* Portfolio */}
          <div className="relative py-1 group">
            <button onClick={() => handleNavClick("portfolio")} className={`text-[13px] font-medium transition-all ${activeSection === "portfolio" ? "text-[#f9a825]" : "text-white/50 hover:text-[#f9a825]"}`}>
              Portfolio
            </button>
            <NavUnderline active={activeSection === "portfolio"} />
          </div>
          
          {/* TOOLS DROPDOWN */}
          <div 
            className="relative py-1 group cursor-pointer"
            onMouseEnter={() => setIsToolsOpen(true)}
            onMouseLeave={() => setIsToolsOpen(false)}
          >
            <div className={`flex items-center gap-1 text-[13px] font-medium transition-all ${activeSection === "tools" ? "text-[#f9a825]" : "text-white/50 group-hover:text-[#f9a825]"}`}>
              Tools <ChevronDown size={14} className={`transition-transform duration-300 ${isToolsOpen ? 'rotate-180' : ''}`} />
            </div>
            
            <div className={`
              absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 w-52
              ${isToolsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
            `}>
              <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-2xl">
                {tools.map((tool) => (
                  <Link
                    key={tool.name}
                    to={tool.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold text-white/40 hover:text-[#f9a825] hover:bg-white/5 transition-all group"
                  >
                    <span className="text-white/20 group-hover:text-[#f9a825]">{tool.icon}</span>
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
            <NavUnderline active={activeSection === "tools"} />
          </div>

          {/* Blog */}
          <div className="relative py-1 group">
            <Link to="/blog" className={`text-[13px] font-medium transition-all ${activeSection === "blog" ? "text-[#f9a825]" : "text-white/50 hover:text-[#f9a825]"}`}>
              Blog
            </Link>
            <NavUnderline active={activeSection === "blog"} />
          </div>

          {/* FAQ */}
          <div className="relative py-1 group">
            <button onClick={() => handleNavClick("faq")} className={`text-[13px] font-medium transition-all ${activeSection === "faq" ? "text-[#f9a825]" : "text-white/50 hover:text-[#f9a825]"}`}>
              FAQ
            </button>
            <NavUnderline active={activeSection === "faq"} />
          </div>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick("pricing")}
          className={`bg-gradient-to-r from-[#ffb347] via-[#f9a825] to-[#f57c00] text-[#0a0a0a] rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(249,168,37,0.4)] ${isScrolled ? "px-5 py-2 text-[11px]" : "px-7 py-2.5 text-xs"}`}>
          <Rocket className="w-3.5 h-3.5 fill-black/20" /> 
          <span className="uppercase tracking-wider">Get Started</span>
        </button>
      </div>
    </header>
  );
};

export default Header;