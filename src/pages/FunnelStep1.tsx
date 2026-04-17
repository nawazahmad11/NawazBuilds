import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Target } from "lucide-react";

const FunnelStep1Content = lazy(() => import("./FunnelStep1Content"));

const belowFoldFallback = (
  <div className="min-h-[40vh] w-full" aria-busy="true" aria-label="Loading page content" />
);

const FunnelStep1 = () => {
  const navigate = useNavigate();
  const handleCTA = () => navigate("/thank-you");

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden pt-16 relative">
      <div className="vignette-overlay" />

      {/* Hero — no framer-motion; CSS-only entrance (see critical CSS in index.html) */}
      <section className="relative overflow-hidden py-24 lg:py-17 z-20 hero-lcp">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
          <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-4xl mx-auto hero-stagger">
            <div className="hero-enter hero-delay-0 mb-8 flex justify-center">
              <div className="relative mx-auto w-fit overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <button
                  type="button"
                  onClick={scrollToServices}
                  className="hover:bg-white/10 bg-muted/30 group flex w-fit items-center gap-4 rounded-full p-1.5 pl-5 transition-all duration-300 cursor-pointer text-left border-0"
                  aria-label="Scroll to services — Available for New Opportunities"
                >
                  <span className="shimmer-text-effect text-sm font-semibold tracking-wide">
                    Available for New Opportunities
                  </span>
                  <span className="h-4 w-0.5 border-l border-white/20" aria-hidden />
                  <span className="bg-background group-hover:bg-white/20 size-6 overflow-hidden rounded-full duration-500">
                    <span className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3 text-white" aria-hidden />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3 text-white" aria-hidden />
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>

            <h1 className="hero-enter hero-delay-1 mx-auto mt-8 max-w-5xl text-balance text-5xl font-medium md:text-7xl lg:mt-10 xl:text-[6rem] tracking-tight leading-[1.1] text-white text-center">
              Shopify{" "}
              <span className="relative inline-block">
                <span
                  className="relative bg-[length:200%_auto] bg-clip-text text-transparent font-bold italic"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #3b82f6 0%, #a855f7 25%, #ec4899 50%, #a855f7 75%, #3b82f6 100%)",
                    WebkitBackgroundClip: "text",
                    animation: "aurora 2s linear infinite",
                  }}
                >
                  Expert
                </span>
              </span>
              <br />
              <span className="flex flex-wrap items-center justify-center gap-x-4">
                <span className="font-light text-white/90">&amp;</span>
                <span className="relative inline-block">
                  <span
                    className="relative bg-[length:200%_auto] bg-clip-text text-transparent font-black"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #3b82f6 0%, #a855f7 25%, #ec4899 50%, #a855f7 75%, #3b82f6 100%)",
                      WebkitBackgroundClip: "text",
                      animation: "aurora 6s linear infinite",
                    }}
                  >
                    Growth
                  </span>
                </span>
                <span className="text-white font-medium">Partner</span>
              </span>
            </h1>

            <p className="hero-enter hero-delay-2 text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 mt-5 font-light leading-relaxed">
              I help businesses launch professional Shopify stores that look modern, load fast, and convert visitors
              into paying customers.
            </p>

            <div className="hero-enter hero-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={handleCTA}
                className="gradient-cta px-8 py-4 rounded-lg text-lg animate-pulse-glow flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20"
                aria-label="Book Free Strategy Call"
              >
                <Target className="w-5 h-5" /> Book Free Strategy Call
              </button>
            </div>
            <div className="hero-enter hero-delay-4 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" aria-hidden /> No obligation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" aria-hidden /> Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" aria-hidden /> Limited monthly slots
              </span>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={belowFoldFallback}>
        <FunnelStep1Content />
      </Suspense>
    </div>
  );
};

export default FunnelStep1;
