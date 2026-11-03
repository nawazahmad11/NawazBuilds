import React, { useState } from 'react';

export default function VisualStorytellingService() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "How does visual storytelling affect conversions?",
            a: "High ticket products are hard to sell from a plain grid, because a grid invites price comparison. Editorial presentation changes the frame: the product is shown in context, at scale, with materials and details visible, so the shopper judges value instead of only price. It does not rescue a weak product, but it stops a strong product from looking ordinary."
        },
        {
            q: "Will heavy lookbooks and videos drag down my site speed?",
            a: "Not when built natively. Media is compressed properly, served in the right sizes from Shopify's CDN, and loaded only when it approaches the screen. The slow version of visual storytelling comes from apps fetching scripts from outside servers. Native sections avoid that entirely."
        },
        {
            q: "Can you add interactive hotspots on my existing theme?",
            a: "Yes. Lookbooks and hotspot sections are built as isolated custom sections. You place them anywhere from the theme editor, position the points on your imagery, and link each one to a product or a cart drawer. Your current theme stays in place."
        },
        {
            q: "Do these layouts work on mobile?",
            a: "They must, because most of your audience is on mobile. Editorial grids are restructured for small screens into clean swipeable rows, and video is sized for phones first. Luxury that only works on a desktop is a screensaver, not a sales tool."
        },
        {
            q: "Do I need new photography for this to work?",
            a: "Sometimes, and we will tell you plainly after seeing your current assets. Layout cannot rescue dark, low resolution photos. When a reshoot is needed, we provide an exact shot list so one session produces everything the new layouts require, instead of photography by guesswork."
        },
        {
            q: "How much does visual storytelling work cost?",
            a: "It depends on scope: a single lookbook section is a small project, a full storefront presentation rebuild is a larger one. Book a strategy call, show us your products and current imagery, and you get an exact price before any work begins."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0b0b0c] text-white font-sans selection:bg-amber-500 selection:text-black relative z-10">

            {/* Navigation Header */}
            <div className="w-full pt-[80px] md:pt-[90px] block relative z-20">
                <div className="max-w-7xl mx-auto px-6 py-5 border-b border-zinc-900/60 flex justify-between items-center bg-[#0b0b0c]">
                    <a
                        href="/"
                        className="flex items-center gap-2.5 group text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-xs font-semibold tracking-widest uppercase">
                            Back to Home
                        </span>
                    </a>

                    <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800/80 px-3 py-1.5 rounded-full shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span className="text-[11px] text-zinc-400 font-medium tracking-wider uppercase">
                            Aesthetic Audits Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Editorial Layout and Brand Presentation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Visual Storytelling</span> for Premium Brands
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Visual storytelling is how your store presents products: editorial layouts, lookbooks, video and interactive imagery that show a product in context instead of listing it in a grid. For premium and high ticket brands, presentation is what separates your price from a cheaper competitor's price in the shopper's mind.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Everything is built natively in your theme as editable sections. The store looks like a magazine and still loads like a store should.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/strategy-call" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center">
                            Book a Strategy Call
                        </a>
                        <a href="#capabilities" className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium rounded-xl border border-zinc-800 transition-all duration-200 text-center">
                            See Editorial Assets
                        </a>
                    </div>
                </div>
            </section>

            {/* Layout Identity Grid */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-xs text-zinc-500 font-bold tracking-widest uppercase mb-12">Why do premium products fail in ordinary grids?</h2>
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

                        <div className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/40 relative">
                            <h3 className="text-xl font-bold text-zinc-300 mb-4">Standard Template Rows</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500/80 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Commodity feel:</strong> Stiff boxes and repetitive templates that look like every low tier store on the internet.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500/80 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Flat media:</strong> Static images that cannot communicate texture, scale or quality, so the price looks arbitrary.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500/80 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>No story:</strong> Products shown without context or use, leaving the shopper to imagine everything alone.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#121214] p-8 rounded-2xl border border-amber-500/30 relative shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                            <h3 className="text-xl font-bold text-amber-500 mb-4">Editorial Lookbook Frameworks</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Deliberate space:</strong> Asymmetric layouts, real whitespace and a typography system that signals quality before a word is read.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Shoppable editorial:</strong> Hotspots on lifestyle imagery link straight to the product and the cart, so inspiration is one tap from purchase.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Motion with restraint:</strong> Subtle reveals and hover states that feel expensive because they are quiet, not loud.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section id="capabilities" className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What does an editorial storefront include?</h2>
                    <p className="text-zinc-400">Presentation pieces built as native theme sections your team can reuse every season.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-[#121214] p-8 rounded-2xl border border-zinc-800/60 group">
                        <h3 className="text-xl font-bold mb-3">Cinematic Scroll Sections</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Full bleed video and image sequences that carry the shopper through a collection like a story, without layout jumps or heavy scripts.
                        </p>
                    </div>
                    <div className="bg-[#121214] p-8 rounded-2xl border border-zinc-800/60 group">
                        <h3 className="text-xl font-bold mb-3">Interactive Lookbook Hotspots</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Points placed on lifestyle imagery open the exact product in a side drawer, so a look can be bought the moment it is wanted.
                        </p>
                    </div>
                    <div className="bg-[#121214] p-8 rounded-2xl border border-zinc-800/60 group">
                        <h3 className="text-xl font-bold mb-3">Material and Detail Views</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Zoomable detail sections for texture, stitching, finish and craft, the evidence a premium price needs next to it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Honest fit */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">When is visual storytelling worth it, and when is it decoration?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>It is worth it when your products are genuinely better and the current store hides that: premium materials, craft, fit or results that a thumbnail cannot show. Presentation closes the gap between what the product is and what the page makes it look like.</p>
                        <p>It is decoration when the basics are broken. If product pages lack clear information, reviews or a working buy path, fix those first. Our work on <a href="/blog/high-converting-product-pages" className="text-amber-500 hover:underline">product pages that convert</a> covers that order of operations, and <a href="/services/shopify-theme-customization-services" className="text-amber-500 hover:underline">theme customization</a> is the service that handles the structural side.</p>
                        <p>On a call we will look at your products and tell you which side of that line your store is on, before quoting anything.</p>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div>
                        <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">
                            Editorial Framework Case Study
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                            High-End Visual Evolution: Kith Inspired Editorial Layout
                        </h2>
                        <p className="text-zinc-400 mb-6 leading-relaxed text-[15px]">
                            Taking structural cues from premier multi brand luxury experiences, we engineered an editorial storefront focused entirely on brand perception. By dropping standard boxed setups for continuous fluid sections, the layout turns browsing into a narrative instead of a catalog.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8 border-y border-zinc-900 py-6">
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-amber-500">Luxury Aura</div>
                                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                                    Design Benchmark
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-bold text-emerald-500">Zero App</div>
                                <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                                    Bloat Overhead
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.nawazbuilds.com/case-studies/kith-store"
                            className="inline-flex items-center gap-2 text-zinc-300 hover:text-amber-500 font-medium group transition-colors duration-200 text-sm"
                        >
                            <span>Read Full Kith Store Case Study</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-2xl relative group overflow-hidden shadow-2xl">
                        <div className="flex items-center gap-1.5 mb-3 px-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></span>
                            <span className="text-[11px] text-zinc-600 font-mono ml-2 tracking-tight">nawazbuilds.com/kith-store</span>
                        </div>

                        <div className="aspect-[16/11] bg-zinc-950 rounded-lg border border-zinc-800/80 relative overflow-hidden group-hover:border-amber-500/30 transition-colors duration-300">
                            <img
                                src="/kith-inspired-case-study.webp"
                                alt="Kith Layout Inspired Shopify Editorial Presentation"
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 max-w-3xl mx-auto px-6 border-t border-zinc-900">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="bg-[#121214]/60 rounded-xl border border-zinc-800/60 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left text-zinc-200 hover:text-white transition-colors duration-200 group focus:outline-none"
                                >
                                    <span className="text-[15px] font-semibold tracking-tight pr-4 group-hover:text-amber-500 transition-colors">
                                        {faq.q}
                                    </span>
                                    <span className={`flex-shrink-0 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-500" : ""}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] border-t border-zinc-900/50" : "max-h-0"}`}>
                                    <p className="p-5 text-zinc-400 text-[14px] leading-relaxed bg-[#0c0c0e]/40">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#121214] border-t border-zinc-900 text-center relative overflow-hidden">
                <div className="max-w-2xl mx-auto px-6 relative">
                    <h2 className="text-3xl font-bold mb-4">Make the Store Look Like the Product Deserves</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call, show us your products and current imagery, and get an honest read on what presentation work would actually change.
                    </p>
                    <a href="/strategy-call" className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transform hover:-translate-y-0.5 transition-all">
                        <span>Book Your Strategy Call</span>
                    </a>
                </div>
            </section>

            <footer className="py-8 bg-zinc-950 text-center border-t border-zinc-900 text-xs text-zinc-500">
                © {new Date().getFullYear()} Nawaz Builds. Design Engineering. All rights reserved.
            </footer>
        </div>
    );
}
