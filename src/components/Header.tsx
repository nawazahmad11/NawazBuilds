import { useNavigate, useLocation } from "react-router-dom";
import { Rocket } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/funnel/step1") {
      navigate("/funnel/step1");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 rounded-none border-x-0">
      <div className="section-container flex items-center justify-between h-16">
        <button
          onClick={() => navigate("/funnel/step1")}
          className="text-xl font-black tracking-tight text-gradient-gold"
        >
          Shopify Pros
        </button>

        <nav className="hidden sm:flex items-center gap-8">
          {[
            { label: "Services", id: "services" },
            { label: "Portfolio", id: "portfolio" },
            { label: "Pricing", id: "pricing" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection("final-cta")}
          className="gradient-cta px-5 py-2 rounded-lg text-sm flex items-center gap-1.5"
        >
          <Rocket className="w-4 h-4" /> Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
