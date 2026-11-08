import React, { useState } from 'react';

export default function ShopifyPlusDevelopmentServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "We are upgrading to Plus. What has to change in our store?",
            a: "The storefront mostly carries over. The real work sits in checkout and automation: checkout.liquid customizations must be rebuilt with checkout extensibility, Shopify Scripts must move to Functions, and any thank you page tools must be replaced with supported app blocks and pixels. Our published guides walk through both the upgrade and the tracking checks in detail."
        },
        {
            q: "Can you move our Shopify Scripts to Functions?",
            a: "Yes. Discount, shipping and payment rules written as Scripts get rebuilt as Shopify Functions, then tested rule by rule against the old behavior before the Scripts are retired. Edge cases are where this work is won or lost, so each rule is checked with real cart combinations, not assumed."
        },
        {
            q: "Can you set up B2B on Shopify Plus?",
            a: "Yes. Company accounts, catalogs with customer specific pricing, payment terms and the B2B checkout flow are all native Plus features, but they need deliberate setup to match how your wholesale operation actually sells. We configure them around your real price lists and terms instead of handing you the default shape."
        },
        {
            q: "Do you build Shopify Flow automations?",
            a: "Yes. Flow is usually the fastest Plus win: tagging, fulfilment routing, inventory alerts, fraud checks and customer follow ups that your team currently does by hand. We build the workflows, test them against real orders, and document what each one does so your team can adjust them safely."
        },
        {
            q: "Can you audit our current Plus checkout and tracking?",
            a: "Yes, and for many Plus stores it is the right first step. The audit follows the same checks we publish: every pixel in your settings accounted for, checkout events firing in the right order, thank you page tools that survived the extensibility move, and the money matching across your reports. You get a fix list ranked by what it costs you."
        },
        {
            q: "How is the price of a Plus project set?",
            a: "By scope, in writing, before work starts. A checkout rebuild, a B2B setup and a full Plus build are different sizes of job, and each is quoted exactly after a strategy call and a look at your store. Additions are priced and approved before they are built. No open ended hourly billing."
        },
        {
            q: "Our store is not on Plus. Can you still help?",
            a: "Yes. Most of our development work is on standard Shopify plans, and some stores honestly should stay there. If your volumes and needs do not justify Plus fees yet, we will say so and point you to our general development services instead."
        }
    ];

    const includes = [
        "Checkout extensibility upgrades: checkout.liquid rebuilt with UI extensions and Functions",
        "Shopify Scripts migration to Shopify Functions, tested rule by rule",
        "Custom checkout blocks: banners, upsells, fields and delivery options inside checkout",
        "B2B setup: company accounts, catalogs, customer specific pricing and payment terms",
        "Shopify Flow workflows for orders, inventory, fraud checks and customer follow ups",
        "Launchpad campaigns: scheduled sales, product drops and price changes that run themselves",
        "Plus store builds and plan upgrades planned around your existing store, not a restart",
        "Checkout and tracking verification after every Plus change, with a written report"
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
                            Plus Projects Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Shopify Plus Builds and Upgrades
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify Plus <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Development</span> Services
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Shopify Plus development services cover the work only Plus unlocks: checkout extensibility, Shopify Functions, B2B storefronts, Flow automation and Launchpad campaigns. If you are comparing every Shopify plus development agency on your shortlist, the difference that matters is who actually writes the code. Here, it is the person on your strategy call.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Plus stores usually arrive here mid transition. The plan is upgraded, but the checkout still runs on yesterday's customizations, the Scripts still carry the discount logic, and nobody is fully sure the tracking survived. That in between state is exactly where we work.
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What do Shopify Plus development services cover?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        The Plus only layer of your store, built and verified properly. Concretely, it looks like this.
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

            {/* Checkout extensibility first */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why does checkout extensibility come first?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Because Shopify retired the old way. Checkout.liquid and script based checkout changes are gone, and stores that have not rebuilt their checkout customizations with extensibility are carrying silent breakage: missing blocks, dead tracking, thank you page tools that no longer fire. Our <a href="/blog/shopify-checkout-extensibility-guide" className="text-amber-500 hover:underline">checkout extensibility guide</a> explains the whole move in plain language.</p>
                    <p>The rebuild itself is methodical. Every existing customization is listed, then rebuilt as a UI extension or a Function, then tested with real orders. Tracking gets the same treatment: our <a href="/blog/shopify-plus-checkout-extensibility-tracking" className="text-amber-500 hover:underline">Plus tracking checks</a> walk through pixels, event order and report matching, because a checkout that sells but cannot be measured is only half fixed.</p>
                    <p>Once checkout is sound, the rest of Plus starts paying: Functions take over discount and shipping logic, Flow removes manual operations, and Launchpad turns campaigns into scheduled events instead of late nights.</p>
                </div>
            </section>

            {/* How a project runs */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does a Plus project run here?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>It starts with an inventory of what your store actually uses: checkout customizations, Scripts, apps with checkout access, B2B needs, automations done by hand. Plus projects fail when teams build the exciting parts first and discover the dependencies later. The inventory prevents that.</p>
                        <p>Then the work is scoped in writing: what will be built, in what order, and the exact price. Building and testing happen on a duplicate theme and development checkouts, so your live store keeps trading. Each piece is verified against the behavior it replaces before the old one is retired.</p>
                        <p>If you are not sure where your Plus store stands, a <a href="/services/shopify-store-audit" className="text-amber-500 hover:underline">store audit</a> is the honest first step. It shows which Plus features you are paying for and not using, and which gaps are actually costing you.</p>
                    </div>
                </div>
            </section>

            {/* Honest limits */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">When is Plus not worth it?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Plus is a serious monthly fee, and it is not for every store. If your checkout needs are standard, your volumes are modest and you have no B2B operation, standard Shopify with good development will serve you better and cost you less. We would rather tell you that than build you a Plus store you did not need.</p>
                    <p>Plus earns its fee when checkout control, automation and B2B are real needs rather than ambitions. If that is your store, the features in this page stop being plan perks and start removing daily work. And if your need is broader than Plus alone, our <a href="/services/shopify-development-services" className="text-amber-500 hover:underline">Shopify development services</a> cover the full build underneath it.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Make Plus Earn Its Fee</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and tell us where your Plus store stands. We will tell you plainly what to rebuild first, what to leave alone, and what it costs.
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
