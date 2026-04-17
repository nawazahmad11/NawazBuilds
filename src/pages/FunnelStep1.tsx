import { lazy, Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Target, Play } from "lucide-react";

const FunnelStep1Content = lazy(() => import("./FunnelStep1Content"));

// --- LITE YOUTUBE COMPONENT ---
const LiteYouTube = ({ videoId }: { videoId: string }) => {
  const [loadVideo, setLoadVideo] = useState(false);

  return (
    <div className="section-container my-16">
      <div 
        className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl group cursor-pointer"
        onClick={() => setLoadVideo(true)}
      >
        {!loadVideo ? (
          <div className="absolute inset-0 w-full h-full">
            {/* Optimized Thumbnail - High priority fetch */}
            <img 
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
              alt="Video Thumbnail"
              className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/90 text-primary-foreground p-5 rounded-full shadow-glow-gold group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-4 left-6 text-white font-medium text-lg drop-shadow-lg">
              Watch Our Strategy Video
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

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
    <div className="min-h-screen bg-background pt-16 relative">
      <div className="vignette-overlay" />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 z-20 hero-lcp">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Notification Badge */}
            <div className="mb-8 flex justify-center">
              <button
                type="button"
                onClick={scrollToServices}
                className="hover:bg-white/10 bg-muted/30 group flex w-fit items-center gap-4 rounded-full p-1.5 pl-5 transition-all duration-300 border border-white/5"
                aria-label="Available for New Opportunities"
              >
                <span className="shimmer-text-effect text-sm font-semibold tracking-wide text-white">
                  Available for New Opportunities
                </span>
                <span className="h-4 w-0.5 border-l border-white/20" />
                <span className="bg-background group-hover:bg-white/20 size-6 rounded-full flex items-center justify-center">
                  <ArrowRight className="size-3 text-white" />
                </span>
              </button>
            </div>

            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-medium md:text-7xl xl:text-[6rem] tracking-tight leading-[1.1] text-white">
              Shopify{" "}
              <span className="relative inline-block font-bold italic text-gradient-gold">
                Expert
              </span>
              <br />
              <span className="flex flex-wrap items-center justify-center gap-x-4">
                <span className="font-light text-white/90">&amp;</span>
                <span className="font-black text-gradient-gold">Growth</span>
                <span className="text-white font-medium">Partner</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 mt-6 font-light leading-relaxed">
              I help businesses launch professional Shopify stores that look modern, load fast, and convert visitors into customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={handleCTA}
                className="gradient-cta px-10 py-4 rounded-lg text-lg flex items-center gap-2 shadow-xl shadow-primary/20"
                aria-label="Book Free Strategy Call"
              >
                <Target className="w-5 h-5" /> Book Free Strategy Call
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground/80">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> No obligation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-500" /> Free consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- YOUTUBE SECTION (ADDED HERE) --- */}
      <LiteYouTube videoId="YOUR_VIDEO_ID_HERE" /> 

      <Suspense fallback={belowFoldFallback}>
        <FunnelStep1Content />
      </Suspense>
    </div>
  );
};

export default FunnelStep1;