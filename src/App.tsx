import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import ScrollToTop from "./components/ScrollToTop";

// Pages
import FunnelStep1 from "./pages/FunnelStep1";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogPostDetail from "./pages/BlogPostDetail";  
import ToolsPage from "./pages/Tools";
import AuditPopup from "./components/AuditPopup";
import WhatsAppButton from "./components/WhatsAppButton";

import CaseStudyDetail from "./pages/CaseStudyDetail";


const queryClient = new QueryClient();


// Pixel Tracking
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// const location = useLocation();
// useEffect(() => {
//   if (window.fbq) {
//     window.fbq('track', 'PageView');
//   }
// }, [location]);


const PixelTracker = () => {
  const location = useLocation(); 
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);
  return null; 
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

      <PixelTracker />

        <ScrollToTop />
        <Header />
        <Routes>
          {/* Root Redirect */}
          <Route path="/" element={<FunnelStep1 />} />
          {/* <Route path="/" element={<Navigate to="/funnel/step1" replace />} /> */}
          

          {/* Funnel Routes */}
          <Route path="/funnel/step1" element={<FunnelStep1 />} />
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* Blog Routes - Dynamic System */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          
          {/* Tools Page */}
          <Route path="/tools" element={<ToolsPage />} />
          
          {/* 404 - Always keep this at the very bottom */}
          <Route path="*" element={<NotFound />} />

          {/* PEHLA ROUTE: Jab koi sirf /case-studies par jaye (404/Not Found khatam karne ke liye) */}
          <Route path="/case-studies" element={<CaseStudyDetail />} />

          {/* DOOSRA ROUTE: Jab specific project khule (Aurex, Bloom etc.) */}
          <Route path="/case-studies" element={<CaseStudyDetail />} />
          <Route path="/case-studies/:projectId" element={<CaseStudyDetail />} />


          
        </Routes>
        <Footer />

        <AuditPopup />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;