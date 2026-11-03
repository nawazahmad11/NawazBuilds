import React, { useState } from 'react';

export default function MobileFirstUxService() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "Why is a responsive Shopify theme not enough for mobile?",
            a: "A responsive theme only shrinks the desktop layout until it fits. The result is small text, crowded filters and buttons placed where thumbs cannot comfortably reach. Mobile first UX designs the phone experience as the main experience: thumb reach, fast actions and layouts built for how people actually shop on a phone."
        },
        {
            q: "Will focusing on mobile break my desktop layout?",
            a: "No. The build uses fluid breakpoints, so each screen size gets a layout designed for it. Desktop shoppers keep a rich, wide experience. Mobile shoppers stop getting a squeezed copy of it."
        },
        {
            q: "How do you keep mobile pages fast?",
            a: "By writing lean code natively in the theme instead of loading heavy frameworks and apps. Images are sized for the device and loaded only when needed, interactions run on the theme's own assets, and nothing renders that the shopper did not ask for."
        },
        {
            q: "Can you build app-like drawers and filters without apps?",
            a: "Yes. Cart drawers, search drawers and multi level filter panels are coded natively in Liquid and theme assets. That saves the monthly app fees and, more importantly on mobile, removes the extra scripts those apps load on every page."
        },
        {
            q: "How are mobile changes tested before launch?",
            a: "On real devices and throttled connections, not only a resized desktop browser. The full path is walked the way a shopper walks it: land, browse, filter, open a product, add to cart, check out. If an interaction feels slow or awkward there, it does not ship."
        },
        {
            q: "Is mobile UX the same as speed optimization?",
            a: "They overlap but they are not the same job. Speed optimization removes weight so pages load fast. Mobile UX decides how the loaded page behaves in a hand: layout, reach, gestures and flow. A fast page with a clumsy layout still loses sales, which is why stores often pair this service with our speed work."
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
                            Mobile Audits Available
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Designed for the Phone First
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Mobile-First UX</span> Design
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Mobile first UX means designing your store for the phone before the desktop, because the phone is where most of your customers shop. Not a desktop site squeezed into a small screen, but layouts, buttons and flows built around thumbs, glances and short attention.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        If your store feels clunky on a phone, shoppers do not complain. They leave, usually inside the first screen. This service rebuilds that experience properly.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/strategy-call" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center">
                            Book a Strategy Call
                        </a>
                        <a href="#framework" className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium rounded-xl border border-zinc-800 transition-all duration-200 text-center">
                            Explore Capabilities
                        </a>
                    </div>
                </div>
            </section>

            {/* Layout Comparison Grid */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-center text-xs text-zinc-500 font-bold tracking-widest uppercase mb-12">Why do shrunk desktop themes lose mobile sales?</h2>
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

                        <div className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/40 relative">
                            <h3 className="text-xl font-bold text-zinc-300 mb-4">Standard Shrunk Templates</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500/80 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Microscopic targets:</strong> Tiny buttons and dense filter menus placed outside the natural thumb comfort zone.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500/80 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Laggy drawer interactions:</strong> Clunky, slow slide outs that delay the path from browsing to cart.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500/80 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Desktop weight:</strong> Hero media and scripts sized for broadband desktops, loaded over mobile data.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#121214] p-8 rounded-2xl border border-amber-500/30 relative shadow-[0_0_30px_rgba(245,158,11,0.05)]">
                            <h3 className="text-xl font-bold text-amber-500 mb-4">Engineered Mobile UX</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Thumb zone precision:</strong> Buy actions, checkout triggers and key switches kept within natural reach.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Fluid interactions:</strong> Smooth drawers, instant filters and layouts that adjust without jumping.</span>
                                </li>
                                <li className="flex items-start gap-3 text-zinc-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span><strong>Native, not app based:</strong> App like behavior coded in the theme, with no per page script tax.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section id="framework" className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What does mobile first design change?</h2>
                    <p className="text-zinc-400">The parts of the store a phone shopper touches most, rebuilt for the hand instead of the mouse.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-[#121214] p-8 rounded-2xl border border-zinc-800/60 group">
                        <h3 className="text-xl font-bold mb-3">Sticky Buy Actions</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            The primary action stays intelligently within thumb reach at the bottom of the screen while the shopper reads, compares and decides.
                        </p>
                    </div>
                    <div className="bg-[#121214] p-8 rounded-2xl border border-zinc-800/60 group">
                        <h3 className="text-xl font-bold mb-3">Swipe Friendly Filters</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Heavy dropdowns become horizontal swipe tags and clean filter drawers, designed for fast catalog discovery with one hand.
                        </p>
                    </div>
                    <div className="bg-[#121214] p-8 rounded-2xl border border-zinc-800/60 group">
                        <h3 className="text-xl font-bold mb-3">Compact Asset Pipeline</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Mobile assets are sized and sequenced for real connections, so pages assemble correctly even on unstable mobile data.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-16 space-y-5 text-zinc-400 leading-relaxed">
                    <p>Underneath the visible work sits discipline: every mobile pattern is checked against load weight. A beautiful interaction that costs two seconds is a bad trade on mobile, so patterns are built natively and measured. Where pure load weight is the problem, the fix belongs to our <a href="/services/shopify-speed-optimization-services" className="text-amber-500 hover:underline">speed optimization</a> service, and the two are often quoted together honestly.</p>
                </div>
            </section>

            {/* Case Study */}
            <section className="py-20 bg-zinc-950/80 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div>
                            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">
                                Mobile UX Showcase Case Study
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                                High-Volume Mobile Scale: Premium Apparel Store
                            </h2>
                            <p className="text-zinc-400 mb-6 leading-relaxed text-[15px]">
                                For this fast growing fashion brand, we reimagined how users interact on phone viewports. By replacing clunky standard rows with responsive multi grid viewports and instant app like navigation, mobile friction dropped away.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8 border-y border-zinc-900 py-6">
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-amber-500">85%+</div>
                                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                                        Mobile Purchase Share
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold text-emerald-500">Sub 1.8s</div>
                                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold mt-1">
                                        Mobile Interaction Speed
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://www.nawazbuilds.com/case-studies/clothing-store"
                                className="inline-flex items-center gap-2 text-zinc-300 hover:text-amber-500 font-medium group transition-colors duration-200 text-sm"
                            >
                                <span>Read Full Apparel Case Study</span>
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
                                <span className="text-[11px] text-zinc-600 font-mono ml-2 tracking-tight">nawazbuilds.com/clothing-store</span>
                            </div>

                            <div className="aspect-[16/11] bg-zinc-950 rounded-lg border border-zinc-800/80 relative overflow-hidden group-hover:border-amber-500/30 transition-colors duration-300">
                                <img
                                    src="/clothing-store-case-study.webp"
                                    alt="Apparel Mobile UX Optimization Design Layout"
                                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                            </div>
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
                    <h2 className="text-3xl font-bold mb-4">Fix Your Mobile Experience</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and we will walk your store on a real phone with you, screen by screen, and show you where shoppers struggle.
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
