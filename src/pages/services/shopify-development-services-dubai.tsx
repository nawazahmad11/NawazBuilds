import React, { useState } from 'react';

export default function ShopifyDevelopmentServicesDubai() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "Do you have an office in Dubai?",
            a: "No, and we will not pretend otherwise. NawazBuilds is a studio based in Lahore, Pakistan, and Dubai and UAE clients are served fully remotely. Everything on this page describes that arrangement honestly: video calls, written scopes, collaborator access to your store, and work you review before it goes live."
        },
        {
            q: "How do meetings work across the distance?",
            a: "By video call, in English, at times that suit your working day. Lahore is one hour behind Dubai, so the working days overlap almost completely. Day to day questions move on chat and email, and every piece of work is scoped and approved in writing, which matters more than anyone's postcode."
        },
        {
            q: "Can you build a store set up for the UAE market?",
            a: "Yes. A UAE store needs its local setup done properly: dirham pricing, the payment gateways available to UAE businesses on Shopify, shipping zones for the Emirates and the wider Gulf, and tax settings that match your registration position. These are configuration decisions we walk through with you at the start, not details discovered at launch."
        },
        {
            q: "Can you migrate our existing store to Shopify?",
            a: "Yes. We migrate stores from Magento, WooCommerce, WordPress and other platforms to Shopify, with data, design and redirects planned before the move. Our migration services page describes the process, and the same remote working pattern applies: your current store keeps selling while the new one is built and tested."
        },
        {
            q: "How is the price set, and what do we sign?",
            a: "Every project is scoped in writing before work starts: what will be built and the exact price for it, with no open ended hourly billing. You review the build on a duplicate of your store before anything is published. The arrangement is the same one our US and UK clients work under."
        },
        {
            q: "What happens after our store launches?",
            a: "You get a walkthrough of what was built and how to run it. After that, most stores move onto monthly maintenance or store management, where updates, checks and small changes are handled for you on a schedule. Distance changes nothing about that arrangement."
        },
        {
            q: "Why choose a remote specialist instead of a Dubai agency?",
            a: "Fit and focus. A general local agency splits attention across many platforms and services. We do one thing, Shopify, and the developer you speak to is the developer who writes your code. If you need a team physically present in Dubai, we are not that, and we would rather say it here than after a contract."
        }
    ];

    const includes = [
        "New Shopify store builds for UAE brands, set up for dirham pricing and local gateways",
        "Custom theme development and custom Liquid features your theme cannot do",
        "Migration to Shopify from Magento, WooCommerce, WordPress and other platforms",
        "App integration, and private apps for the tools your store depends on",
        "Shopify Plus development, including checkout extensibility and B2B setup",
        "Speed and mobile fixes made inside the theme, measured before and after",
        "Ongoing maintenance and store management after launch, handled remotely",
        "Every project scoped in writing first, with one direct developer contact"
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
                            Remote Projects Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Shopify Development for UAE Stores
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Development</span> Services in Dubai
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Our Shopify web development services help Dubai and UAE brands build, rebuild and improve their stores: new builds, custom themes, migrations, app integration and Plus work. NawazBuilds is a specialist studio based in Lahore that serves UAE clients fully remotely, and this page exists to explain exactly how that works.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        If you are searching for a Shopify developer in Dubai, what you actually need is a developer who knows your store, answers directly and ships clean work. Geography matters less than that, especially one hour apart. Here is the honest version of working with us from the Emirates.
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What do our Shopify development services cover for UAE stores?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        The same full scope as our main development practice, with the UAE setup handled properly. Concretely, it looks like this.
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

            {/* How remote work runs */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does working with a studio in Lahore actually work?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Almost exactly like working with a developer in the next emirate, minus the traffic. Lahore runs one hour behind Dubai, so your morning is our morning. Calls happen inside your working day, questions get answered the same day, and nothing waits overnight for a timezone to come back around.</p>
                    <p>The process carries the trust, not the meeting room. Every project starts with a strategy call, then a written scope with an exact price. Building happens on a duplicate of your store, which you can open, click through and judge at any moment. Nothing is published until you approve it, and you keep collaborator level visibility of the work the whole way through.</p>
                    <p>Communication stays in English and stays direct. You talk to the developer building your store, not an account manager relaying messages. That directness is the main reason our remote clients stay, and it is the same arrangement behind our <a href="/services/shopify-development-services" className="text-amber-500 hover:underline">main development services</a> for the US and UK.</p>
                </div>
            </section>

            {/* UAE setup */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What does a UAE store need set up properly?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>The platform is the same, the details are local. Currency in dirhams, the payment gateways your UAE trade licence can actually use, shipping zones and rates for delivery inside the Emirates and across the Gulf, and tax settings that reflect your VAT position. Getting these right at build time is routine. Discovering them at launch is expensive.</p>
                        <p>Many UAE stores also sell in two directions at once: locally to the Emirates and internationally to the Gulf and beyond. Shopify markets, domains and shipping profiles handle that well when they are structured deliberately, and badly when they grow by accident. We set the structure up front, the same careful approach we bring to <a href="/services/shopify-migration-services" className="text-amber-500 hover:underline">platform migrations</a>.</p>
                        <p>After launch the store needs the same care as any other: updates, checks and small changes on a schedule. That is covered by our <a href="/services/shopify-maintenance-services" className="text-amber-500 hover:underline">maintenance services</a> and <a href="/services/shopify-store-management-services" className="text-amber-500 hover:underline">store management</a>, delivered remotely without missing a beat.</p>
                    </div>
                </div>
            </section>

            {/* Honest limits */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What are the honest limits of working remotely?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>There are two, and you should hear them from us first. We cannot sit in your office, and we cannot attend a meeting in Dubai in person. Everything happens by video call, chat and shared documents. For development work, which lives in a browser and a codebase, most clients never feel that limit. If your project genuinely needs people on site, a local agency is the right call.</p>
                    <p>The second limit is scope. We are a Shopify specialist studio, not a full service marketing agency. We build and look after stores. If you need ad buying, photography or a brand campaign in the UAE market, you need partners for those, and your store will be ready for them when they arrive.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Talk to a Shopify Developer About Your UAE Store</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and describe your store and where it sells. We will tell you plainly what it takes to build or improve it, and what it costs, before you commit to anything.
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
