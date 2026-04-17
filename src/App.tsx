import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import WhatsAppButton from "./components/WhatsAppButton";

const AuditPopup = lazy(() => import("./components/AuditPopup"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
        </Routes>
        <Footer />

        <Suspense fallback={null}>
          <AuditPopup />
        </Suspense>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;