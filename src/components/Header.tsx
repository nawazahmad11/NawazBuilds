import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Rocket } from "lucide-react"; // Screenshot 1 wala Rocket icon

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const websiteLogo = "/footer-logo.png"; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pt-4 pointer-events-none">
      <div 
        className={`
          flex items-center justify-between transition-all duration-700 ease-in-out pointer-events-auto
          ${isScrolled 
            ? "max-w-4xl w-[90%] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-8 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            : "max-w-7xl w-full bg-transparent px-6 py-4"
          }
        `}
      >
        {/* Logo Section */}
        <div 
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer shrink-0"
        >
          {websiteLogo ? (
            <img src={websiteLogo} alt="Logo" className="w-8 h-8 object-contain" />
          ) : (
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-black text-black text-xs">S</div>
          )}
          <span className="text-xl font-black tracking-tight text-white italic">
            Shopify Pros
          </span>
        </div>

        {/* Navigation - With Blog Button */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", id: "services", type: "scroll" },
            { label: "Portfolio", id: "portfolio", type: "scroll" },
            { label: "Pricing", id: "pricing", type: "scroll" },
            { label: "Blog", id: "/blog", type: "link" },
          ].map((link) => (
            link.type === "scroll" ? (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.id}
                to={link.id}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/blog" ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* CTA Button - RESET TO SCREENSHOT 1 STYLE */}
        <button
          onClick={() => handleNavClick("pricing")}
          className={`
            gradient-cta rounded-full text-xs font-bold flex items-center gap-1.5 transition-all
            ${isScrolled ? "px-4 py-2" : "px-6 py-2.5"}
          `}
        >
          <Rocket className="w-3.5 h-3.5" /> 
          <span className="hidden sm:inline">Get Started</span>
        </button>
      </div>
    </header>
  );
};

export default Header;