import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SeoManager from "./components/SeoManager";

// Pages
import Home from "./pages/Home";

import StrategyCallForm from "./pages/StrategyCall";
import ThankYouDone from "./components/ThankYouDone";

import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";

import BlogPostDetail from "./pages/BlogPostDetail";
import ToolsPage from "./pages/Tools";

import AuditPopup from "./components/AuditPopup";
import WhatsAppButton from "./components/WhatsAppButton";

import CaseStudyDetail from "./pages/CaseStudyDetail";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

import ShopifyLiquidService from './pages/services/ShopifyLiquidService';

import MobileFirstUxService from './pages/services/mobile-first-ux';
import VisualStorytellingService from './pages/services/visual-storytelling';
import AppApiSyncService from './pages/services/app-api-sync';
import CheckoutFlowService from './pages/services/checkout-flow';
import ShopifyMaintenanceServices from './pages/services/shopify-maintenance-services';
import ShopifyStoreAudit from './pages/services/shopify-store-audit';
import ShopifyMigrationServices from './pages/services/shopify-migration-services';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SeoManager />
        <ScrollToTop />
        <Header />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Home />} />
          <Route path="/funnel/step1" element={<Home />} />

          {/* Strategy Call Form */}
          <Route path="/strategy-call" element={<StrategyCallForm />} />

          {/* Conversion thank you page */}
          <Route path="/thank-you" element={<ThankYouDone />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />

          {/* Tools */}
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/:toolName" element={<ToolsPage />} />

          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudyDetail />} />
          <Route path="/case-studies/:projectId" element={<CaseStudyDetail />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />

          {/* Services */}
          <Route path="/services/custom-liquid-development" element={<ShopifyLiquidService />} />
          <Route path="/services/mobile-first-ux" element={<MobileFirstUxService />} />
          <Route path="/services/visual-storytelling" element={<VisualStorytellingService />} />
          <Route path="/services/app-api-sync" element={<AppApiSyncService />} />
          <Route path="/services/checkout-flow" element={<CheckoutFlowService />} />
          <Route path="/services/shopify-maintenance-services" element={<ShopifyMaintenanceServices />} />
          <Route path="/services/shopify-store-audit" element={<ShopifyStoreAudit />} />
          <Route path="/services/shopify-migration-services" element={<ShopifyMigrationServices />} />

          {/* 404 - Always keep this at the very bottom */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

        <AuditPopup />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
