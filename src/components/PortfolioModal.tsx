import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

// 1. SARE 10 PROJECTS KA DATA MODAL KE ANDAR SHIFT (Home Page Load Free)
export const portfolioProjects = [
  {
    id: 'gala-tea',
    title: 'Gala Tea',
    category: 'FICTIONAL NOVELS',
    thumbnail: '/portfolio/gala-tea-thumb.webp',
    longImage: '/portfolio/gala-tea-full.webp',
    liveUrl: 'https://galatea.com',
    description: 'Premium dark-themed Shopify store designed for immersive storytelling and high-converting book bundles.'
  },
  {
    id: 'fitgears',
    title: 'FitGears',
    category: 'FITNESS APPAREL',
    thumbnail: '/portfolio/fitgears-thumb.webp',
    longImage: '/portfolio/fitgears-full.webp',
    liveUrl: 'https://fitgears.com',
    description: 'High-end fitness apparel store with ultra-clean grid layouts, micro-interactions, and instant cart triggers.'
  },
  {
    id: 'silk-stone',
    title: 'Silk & Stone',
    category: 'MODERN FASHION',
    thumbnail: '/portfolio/silk-stone-thumb.webp',
    longImage: '/portfolio/silk-stone-full.webp',
    liveUrl: 'https://silkandstone.com',
    description: 'A minimalist fashion store focusing on high-quality apparel mockups, premium typography, and seamless checkout.'
  },
  {
    id: 'project-4',
    title: 'Aura Cosmetics',
    category: 'BEAUTY & SKINCARE',
    thumbnail: '/portfolio/aura-thumb.webp',
    longImage: '/portfolio/aura-full.webp',
    liveUrl: 'https://auracosmetics.com',
    description: 'Luxury skincare boutique store featuring custom product customizers and sticky quick-buy drawers.'
  },
  {
    id: 'project-5',
    title: 'Apex Tech',
    category: 'GADGETS & ELECTRONICS',
    thumbnail: '/portfolio/apex-thumb.webp',
    longImage: '/portfolio/apex-full.webp',
    liveUrl: 'https://apextech.com',
    description: 'Conversion-focused electronics single-product store with detailed feature matrices and glow animations.'
  },
  {
    id: 'project-6',
    title: 'Velo Gear',
    category: 'SPORTS & OUTDOORS',
    thumbnail: '/portfolio/velo-thumb.webp',
    longImage: '/portfolio/velo-full.webp',
    liveUrl: 'https://velogear.com',
    description: 'Premium Shopify layout built for outdoor gear brands, complete with multi-tier filtration mapping.'
  },
  {
    id: 'project-7',
    title: 'Brew & Co',
    category: 'FOOD & BEVERAGE',
    thumbnail: '/portfolio/brew-thumb.webp',
    longImage: '/portfolio/brew-full.webp',
    liveUrl: 'https://brewandco.com',
    description: 'Subscription-based premium coffee store with high-end storytelling and dynamic bundle builders.'
  },
  {
    id: 'project-8',
    title: 'Luxe Home',
    category: 'INTERIOR & DECOR',
    thumbnail: '/portfolio/luxe-home-thumb.webp',
    longImage: '/portfolio/luxe-home-full.webp',
    liveUrl: 'https://luxehome.com',
    description: 'An elegant interior catalog storefront optimizing high-res editorial shots without losing load speed.'
  },
  {
    id: 'project-9',
    title: 'Paw Care',
    category: 'PET SUPPLIES',
    thumbnail: '/portfolio/pawcare-thumb.webp',
    longImage: '/portfolio/pawcare-full.webp',
    liveUrl: 'https://pawcare.com',
    description: 'A friendly yet premium layout designed for pet wellness solutions with interactive value props.'
  },
  {
    id: 'project-10',
    title: 'Chronos',
    category: 'LUXURY WATCHES',
    thumbnail: '/portfolio/chronos-thumb.webp',
    longImage: '/portfolio/chronos-full.webp',
    liveUrl: 'https://chronoswatches.com',
    description: 'A masterpiece watch store template combining dark aesthetics, gold accents, and fluid product imagery.'
  }
];

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, projectId }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !projectId) return null;

  // Click kiye gaye ID ke mutabiq project find karna
  const project = portfolioProjects.find(p => p.id === projectId);
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl h-[90vh] bg-[#0f0a1c] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
          
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                Live Store <ExternalLink size={14} />
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-black/40 flex flex-col lg:flex-row gap-6 scrollbar-thin">
          
          {/* Details (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h4 className="text-sm font-semibold text-white/90 mb-2">Project Overview</h4>
              <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2.5 text-sm">
              <div className="flex justify-between"><span className="text-white/40">Platform:</span><span className="text-white/80 font-medium">Shopify Expert</span></div>
              <div className="flex justify-between"><span className="text-white/40">Stack:</span><span className="text-white/80 font-medium">Liquid, Tailwind, GSAP</span></div>
            </div>
          </div>

          {/* Fiverr Style Scrollable Frame (Right) */}
          <div className="w-full lg:w-2/3 h-[50vh] lg:h-full rounded-xl border border-white/10 overflow-hidden bg-[#07040d] relative">
            <div className="w-full h-full overflow-y-auto scrollbar-none scroll-smooth">
              <img 
                src={project.longImage} 
                alt={`${project.title} Full Preview`}
                loading="eager" 
                decoding="async"
                className="w-full h-auto object-top"
              />
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-white/50 border border-white/5">
              Scroll to explore ↓
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;