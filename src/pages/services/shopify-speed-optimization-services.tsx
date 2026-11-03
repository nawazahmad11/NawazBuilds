import React, { useState } from 'react';

export default function ShopifySpeedOptimizationServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "How much faster will my store get?",
            a: "It depends on what is slowing it down, and anyone who promises a number before measuring is guessing. Stores slowed by app bloat and unoptimized media usually improve a lot. Stores already lean improve less. What we promise is measurement: before and after numbers on your real pages, in a written report."
        },
        {
            q: "Can you guarantee a PageSpeed score of 100?",
            a: "No, and you should distrust anyone who does. Lab scores swing with test conditions, and a perfect score on a stripped test says little about real shoppers. Google ranks on field data from real visitors, the Core Web Vitals. We optimize for real loading experience on your money pages, and the scores follow."
        },
        {
            q: "Will speed work break my apps or theme?",
            a: "Work happens on a duplicate of your live theme and is tested before publishing. Some apps genuinely are the problem, and when one is, we show you the cost it carries and the alternatives: replace it natively, load it only where needed, or keep it knowingly. Nothing is removed behind your back."
        },
        {
            q: "I searched for Shopify speed optimisation. Is this the same service?",
            a: "Yes. Optimisation is the UK spelling of the same work, and we work with stores selling in the UK as well as the US. The diagnosis and fixes are identical: find what loads, cut what should not, and measure honestly."
        },
        {
            q: "How long does a speed optimization project take?",
            a: "A diagnosis is quick. The fix work depends on how much bloat the store carries: a focused cleanup is days, a theme with years of app residue takes longer. You get a confirmed timeline with the quote, before you commit."
        },
        {
            q: "Is speed a one time fix or an ongoing job?",
            a: "The fix is one time. Staying fast is a habit. Every new app and campaign slowly adds weight back, which is why many stores pair this service with <a class=\"text-amber-500 hover:underline\" href=\"/services/shopify-maintenance-services\">monthly maintenance</a>, where speed is rechecked as part of the routine."
        }
    ];

    const includes = [
        "Speed diagnosis on the pages that sell: home, collection and product pages, mobile first",
        "App script audit: what every app loads, what it costs in speed, what can go",
        "Leftover code removal from uninstalled apps, a silent killer in older themes",
        "Image and video optimization: right sizes, modern formats, no quality loss your customers can see",
        "Font loading fixed so text renders fast instead of flashing or blocking the page",
        "Lazy loading done correctly: below the fold waits, the hero never does",
        "Theme code cleanup and asset order rebuilt so the important content loads first",
        "A written before and after report with measured numbers, not promises"
    ];

    return (
        <div className="min-h-screen bg-[#0b0b0c] text-white font-sans selection:bg-amber-500 selection:text-black relative z-10">

            {/* Navigation header area */}
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
                            Speed Projects Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Core Web Vitals and Load Time
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Speed Optimization</span> Service
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Shopify speed optimization finds what is slowing your store down and fixes it in the theme itself: app scripts, leftover code, heavy images, badly loaded fonts and third party tags. Every fix is measured on your real pages, the ones that take money, not on a test page built to score well.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        A slow store taxes everything. Ads cost more per sale. Rankings suffer. Mobile shoppers, most of your traffic, leave first. Speed is not a technical vanity metric. It is rent you pay on every visit until you fix it.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/strategy-call" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center">
                            Book a Strategy Call
                        </a>
                        <a href="#includes" className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium rounded-xl border border-zinc-800 transition-all duration-200 text-center">
                            See What Is Included
                        </a>
                    </div>
                </div>
            </section>

            {/* What is included */}
            <section id="includes" className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What does speed optimization include?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        Diagnosis first, then surgery. Nothing is cut before we know what it costs you and what it earns you.
                    </p>
                    <ul className="space-y-4">
                        {includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Why stores are slow */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why is your Shopify store slow?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Almost never because of Shopify itself. The platform is fast. Stores get slow by accumulation: every app adds scripts to every page, including pages where the app does nothing. Apps that were uninstalled two years ago leave code behind in the theme. Product images get uploaded at camera size. Fonts load in ways that block the whole page.</p>
                    <p>Each item feels harmless alone. Together they add seconds, and the bill arrives as a mobile bounce rate nobody can explain. That is why the fix is an audit of everything the page loads, in order, with a cost attached to each item.</p>
                    <p>Sometimes the honest finding is structural: a theme patched so many times that cleaning it costs more than rebuilding the heavy parts. When that is the case, we say so, and the <a href="/services/shopify-theme-customization-services" className="text-amber-500 hover:underline">theme customization</a> route becomes the smarter spend.</p>
                </div>
            </section>

            {/* What scores matter */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Which speed scores actually matter?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>Two kinds of measurement exist. Lab tests run your page once in controlled conditions and produce the familiar score out of 100. Field data, the Core Web Vitals, records what real visitors actually experienced over the last 28 days. Google ranks on the field data.</p>
                        <p>So we optimize like this: fix the real bottlenecks on real pages, then watch both. Lab scores should rise as a side effect. Field data improves over the following weeks as faster visits replace slower ones in the window. Anyone selling you a guaranteed lab score is optimizing the test, not your store.</p>
                        <p>Speed also pairs with design. A fast page that feels broken on a phone still loses the sale, which is why this work sits next to our <a href="/services/mobile-first-ux" className="text-amber-500 hover:underline">mobile experience</a> service rather than replacing it.</p>
                    </div>
                </div>
            </section>

            {/* Where to start */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Not sure speed is your problem?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Run your product page through a test on a mobile connection and watch what a first time visitor waits for. If the buy button waits on popups, reviews widgets and three trackers before it can be tapped, you have found the tax your store pays on every session.</p>
                    <p>A <a href="/services/shopify-store-audit" className="text-amber-500 hover:underline">store audit</a> includes the same speed diagnosis as its first section, alongside product pages, checkout and apps. If speed is one item on a longer list of doubts, the audit is the better first step.</p>
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
                                    <p className="p-5 text-zinc-400 text-[14px] leading-relaxed bg-[#0c0c0e]/40" dangerouslySetInnerHTML={{ __html: faq.a }} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#121214] border-t border-zinc-900 text-center relative overflow-hidden">
                <div className="max-w-2xl mx-auto px-6 relative">
                    <h2 className="text-3xl font-bold mb-4">Find Out What Your Store Is Carrying</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and we will show you the heaviest items your pages load, and what removing them is worth.
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
