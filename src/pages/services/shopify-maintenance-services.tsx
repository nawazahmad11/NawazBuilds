import React, { useState } from 'react';

export default function ShopifyMaintenanceServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "How much do Shopify maintenance services cost?",
            a: "The price depends on your store size, your app count and how many small changes you need each month. Book a short strategy call and you get an exact quote for your store. We never quote a generic price that changes later."
        },
        {
            q: "Can I maintain my Shopify store myself?",
            a: "Yes, if you have the time and some technical confidence. Many owners do the basics and come to us when updates start breaking things. If you would rather spend that time on products and marketing, maintenance is the part worth handing over."
        },
        {
            q: "What if I only need a one time fix?",
            a: "Then you do not need a monthly service. Start with a Shopify Store Audit, get the full list of problems, and decide from there. Some owners fix the list once and join maintenance later."
        },
        {
            q: "Do you maintain stores you did not build?",
            a: "Yes. Every store we take on starts with a health check, so we understand its theme and apps before the monthly cycle begins. If the store has serious problems, we will tell you honestly before taking your money."
        },
        {
            q: "Will maintenance make my store faster?",
            a: "Maintenance includes a monthly speed watch and fixes for the usual causes, such as heavy apps and unoptimized images. A deep speed rebuild is development work, not maintenance. If your store needs that, we will show you the numbers and quote it separately."
        },
        {
            q: "How do we start?",
            a: "Book a strategy call and show us your store. We run the first health check, share what we find, and only then talk about a monthly plan. If your store is already healthy, we will say so."
        }
    ];

    const included = [
        "Theme updates, applied to a copy of your theme first and checked before they go live",
        "App updates and a review of apps you no longer use",
        "Backup checks, so a working restore point exists before any change",
        "Security checks on staff accounts, permissions and connected apps",
        "Checkout testing with real test orders, so the payment flow keeps working",
        "Broken link, error page and missing image checks across the store",
        "Speed watch on your key pages, with a flag when a page starts slowing down",
        "Small fixes and content changes, such as banners, text, images and collection updates",
        "A monthly health report in plain language, covering what was done and what needs attention"
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
                            Maintenance Plans Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Ongoing Store Care and Support
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Maintenance</span> Services
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Your store needs regular care after launch, not only when something breaks. Our Shopify maintenance services cover updates, backups, security checks, small fixes and a monthly health report, so your store stays fast, safe and open for business.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        You work directly with the developer. There is no ticket queue and no account manager in between. You report a problem, we look at it, and you hear back from the person who will actually fix it.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/strategy-call?package=Maintenance" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center">
                            Start With a Health Check
                        </a>
                        <a href="#included" className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium rounded-xl border border-zinc-800 transition-all duration-200 text-center">
                            See What Is Included
                        </a>
                    </div>
                </div>
            </section>

            {/* What is included */}
            <section id="included" className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What do Shopify maintenance services include?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        Maintenance covers the small recurring work that keeps a store healthy. Each item below is checked or done on a regular cycle, not only when you ask.
                    </p>
                    <ul className="space-y-4">
                        {included.map((item, i) => (
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

            {/* Why maintenance */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why does a Shopify store need ongoing maintenance?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Most store problems build up quietly. An app updates itself and starts slowing your product pages. A theme change breaks a button on mobile only. Nobody notices until sales dip.</p>
                    <p>Regular checks catch these problems while they are still small. A store that gets monthly care also stays ready for change. New features, seasonal campaigns and platform updates land on a clean base instead of a pile of old patches.</p>
                    <p>Shopify itself keeps changing too. Checkout extensibility replaced the old checkout system, and tracking setups had to be rebuilt with web pixels and customer events. Stores under active care made that shift on time. Stores nobody touched found out late.</p>
                </div>
            </section>

            {/* What is not included */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What is not included in maintenance?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>Honesty saves us both time, so here is the boundary. Maintenance keeps your existing store healthy. It does not build new things.</p>
                        <p>New features, custom sections and integrations are development work, quoted as their own small projects. You can see examples on our <a href="/services/custom-liquid-development" className="text-amber-500 hover:underline">Custom Liquid Development</a> page. A full redesign is also a separate project, and our guide on <a href="/blog/shopify-redesign-signs-2026" className="text-amber-500 hover:underline">the signs your store needs a redesign</a> helps you judge whether you need one.</p>
                        <p>Nothing outside maintenance is ever charged as a surprise. If a fix grows into a project, you hear about it first, with the reason and the cost, before any work starts.</p>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does the maintenance process work?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>It starts with a health check of your store. We review your theme, apps, speed and checkout, and we fix anything urgent before the monthly cycle begins. Stores we did not build always start here, so we know what we are taking care of.</p>
                    <p>After that, the cycle is simple. Updates are prepared on a theme copy, checked on desktop and mobile, and only then published. Test orders run through checkout every month.</p>
                    <p>You get one report each month. It lists what was done, what was found, and what we recommend next. No technical jargon and no padded lists of meaningless tasks.</p>
                </div>
            </section>

            {/* If it breaks + who it is for */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What happens if my store breaks?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed mb-14">
                        <p>You message us directly and describe what you see. Problems that stop people from buying, such as a broken checkout or a store that will not load, go to the front of the line. Smaller issues join the regular fix list.</p>
                        <p>Because we maintain your store every month, we already know its theme, its apps and its history. That knowledge is what makes emergency fixes fast. A developer seeing your store for the first time has to learn all of that before touching anything.</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Who is this service for?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>This service suits stores that are already selling and cannot afford downtime or slow decay. It also suits founders who are not technical and do not want to think about updates, backups and app conflicts.</p>
                        <p>It is not a fit if your store is still being built. In that case, finish the build first. It is also not a fit if you only need one problem fixed once. For that, start with a <a href="/services/shopify-store-audit" className="text-amber-500 hover:underline">Shopify Store Audit</a> and a one time cleanup instead.</p>
                    </div>
                </div>
            </section>

            {/* Proof */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Stores we have built and rebuilt</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Maintenance advice means more when it comes from people who build stores. Our recent work includes a <a href="/case-studies/jewelry-store" className="text-amber-500 hover:underline">jewelry store</a>, a <a href="/case-studies/clothing-store" className="text-amber-500 hover:underline">clothing store</a> and fashion retail builds such as <a href="/case-studies/kith-store" className="text-amber-500 hover:underline">Kith Store</a> and <a href="/case-studies/District99" className="text-amber-500 hover:underline">District99</a>.</p>
                    <p>The pattern we see again and again is simple. Stores rarely fail in one big moment. They slow down, collect small errors and lose sales one quiet week at a time. Monthly care is how you stop that slide.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Keep Your Store Healthy Every Month</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and show us your store. We run the first health check, share what we find, and only then talk about a monthly plan.
                    </p>
                    <a href="/strategy-call?package=Maintenance" className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transform hover:-translate-y-0.5 transition-all">
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
