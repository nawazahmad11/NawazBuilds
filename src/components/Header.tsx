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
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/blog" || location.pathname.startsWith("/blog/")) {
      setActiveSection("blog");
      return;
    }
    if (location.pathname.includes("/tools")) {
      setActiveSection("tools");
      return;
    }
    if (location.pathname !== "/" && location.pathname !== "/funnel/step1") {
      setActiveSection("");
      return;
    }

    const ids = ["services", "portfolio", "pricing", "faq"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const candidates = entries.filter((e) => e.isIntersecting && e.target.id);
        if (candidates.length === 0) return;
        const best = [...candidates].sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best?.target.id) setActiveSection(best.target.id);
      },
      {
        root: null,
        rootMargin: "-10% 0px -48% 0px",
        threshold: [0, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [location.pathname]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    if (location.pathname !== "/" && location.pathname !== "/funnel/step1") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavUnderline = ({ active }: { active: boolean }) => (
    <span
      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 rounded-full bg-[#f9a825] ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pt-4 pointer-events-none">
      <div
        className={`
          site-header__inner flex items-center justify-between transition-all duration-700 ease-in-out pointer-events-auto
          ${isScrolled
            ? "max-w-5xl w-[95%] md:w-[90%] bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-8 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            : "max-w-7xl w-full bg-transparent px-6 py-4"
          }
        `}
      >
        <Link to="/" className="site-header__brand flex items-center gap-3 shrink-0" aria-label="Nawaz Ahmad — Home">
          <img
            src={websiteLogo}
            alt=""
            width={40}
            height={40}
            decoding="async"
            fetchPriority="high"
            className="w-10 h-10 object-contain rounded-full border border-white/10"
          />

          <span className="site-header__title text-xl font-black tracking-tight text-white italic">Nawaz Ahmad</span>
        </Link>

        <nav className="site-header__nav items-center gap-7" aria-label="Primary">
          <div className="relative py-1 group">
            <button
              type="button"
              onClick={() => handleNavClick("services")}
              className={`text-[13px] font-medium transition-all border-0 bg-transparent cursor-pointer p-0 font-inherit ${
                activeSection === "services" ? "text-[#f9a825]" : "text-white/55 hover:text-[#f9a825]"
              }`}
            >
              Services
            </button>
            <NavUnderline active={activeSection === "services"} />
          </div>

          <div className="relative py-1 group">
            <button
              type="button"
              onClick={() => handleNavClick("portfolio")}
              className={`text-[13px] font-medium transition-all border-0 bg-transparent cursor-pointer p-0 font-inherit ${
                activeSection === "portfolio" ? "text-[#f9a825]" : "text-white/55 hover:text-[#f9a825]"
              }`}
            >
              Portfolio
            </button>
            <NavUnderline active={activeSection === "portfolio"} />
          </div>

          <div
            className="relative py-1 group"
            onMouseEnter={() => setIsToolsOpen(true)}
            onMouseLeave={() => setIsToolsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={isToolsOpen}
              aria-haspopup="menu"
              className={`flex items-center gap-1 text-[13px] font-medium transition-all border-0 bg-transparent cursor-pointer p-0 font-inherit ${
                activeSection === "tools" ? "text-[#f9a825]" : "text-white/55 group-hover:text-[#f9a825]"
              }`}
            >
              Tools{" "}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isToolsOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`
              absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 w-52
              ${isToolsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
            `}
            >
              <div
                className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-2xl"
                role="menu"
              >
                {tools.map((tool) => (
                  <Link
                    key={tool.name}
                    to={tool.path}
                    role="menuitem"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold text-white/55 hover:text-[#f9a825] hover:bg-white/5 transition-all group"
                  >
                    <span className="text-white/35 group-hover:text-[#f9a825]">{tool.icon}</span>
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
            <NavUnderline active={activeSection === "tools"} />
          </div>

          <div className="relative py-1 group">
            <Link
              to="/blog"
              className={`text-[13px] font-medium transition-all ${
                activeSection === "blog" ? "text-[#f9a825]" : "text-white/55 hover:text-[#f9a825]"
              }`}
            >
              Blog
            </Link>
            <NavUnderline active={activeSection === "blog"} />
          </div>

          <div className="relative py-1 group">
            <button
              type="button"
              onClick={() => handleNavClick("faq")}
              className={`text-[13px] font-medium transition-all border-0 bg-transparent cursor-pointer p-0 font-inherit ${
                activeSection === "faq" ? "text-[#f9a825]" : "text-white/55 hover:text-[#f9a825]"
              }`}
            >
              FAQ
            </button>
            <NavUnderline active={activeSection === "faq"} />
          </div>
        </nav>

        <button
          type="button"
          onClick={() => handleNavClick("pricing")}
          aria-label="Get started — go to pricing"
          className={`site-header__cta bg-gradient-to-r from-[#ffb347] via-[#f9a825] to-[#f57c00] text-[#0a0a0a] rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(249,168,37,0.4)] border-0 cursor-pointer ${
            isScrolled ? "px-5 py-2 text-[11px]" : "px-7 py-2.5 text-xs"
          }`}
        >
          <Rocket className="w-3.5 h-3.5 fill-black/20" aria-hidden />
          <span className="uppercase tracking-wider">Get Started</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
