import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import FunnelStep1 from "./pages/FunnelStep1";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails.tsx";
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/" element={<Navigate to="/funnel/step1" replace />} />
          <Route path="/funnel/step1" element={<FunnelStep1 />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
