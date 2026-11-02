import React, { useState } from 'react';

export default function ShopifyMigrationServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "How much do Shopify migration services cost?",
            a: "The price depends on your platform, your catalog size and how much custom functionality must be rebuilt. Book a strategy call with your current store details and you get an exact quote. No quote is given blind, because blind quotes are how migrations go wrong."
        },
        {
            q: "How long does a migration take?",
            a: "A small, clean catalog moves quickly. A store with years of custom data and extensions takes longer, and rushing it is how data gets lost. You get a realistic timeline after the initial audit, before you commit to anything."
        },
        {
            q: "Will my customers have to create new accounts?",
            a: "Customer records migrate, but passwords cannot move between platforms. That is a security rule, not a limitation of our process. Your customers receive a simple account activation invite on the new store, and their order history comes across with them."
        },
        {
            q: "Can I keep my current design?",
            a: "The look and feel can be carried over closely. Underneath, it is rebuilt as a native Shopify theme, because copied or converted code is where speed and update problems start. Most owners take the chance to freshen the design at the same time, as in our Saha and clothing store rebuilds."
        },
        {
            q: "What happens to my old store during the move?",
            a: "It stays live and keeps selling until the switch. The new store is built and tested separately. Orders placed during the final window are reconciled as part of the launch checklist."
        },
        {
            q: "Do you migrate platforms other than Magento and WooCommerce?",
            a: "Yes, most established platforms can be migrated, including custom built stores, as long as your data can be exported. Tell us what you are running on the strategy call and we will tell you honestly whether the move is clean, complex or not worth doing."
        }
    ];

    const included = [
        "Products, variants, images, collections and inventory data",
        "Customer accounts and order history, as far as the platforms allow",
        "Pages, blog posts and policy content",
        "A full redirect map, so every important old URL lands on its new page",
        "Your design, rebuilt as a proper Shopify theme rather than copied code",
        "Replacement apps for the features your old platform handled with extensions or plugins",
        "Payment, tax, shipping and domain settings, configured and tested",
        "Custom features rebuilt in Liquid where the old store had them"
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
                            Migration Projects Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Magento and WooCommerce to Shopify
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Migration</span> Services
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        A Shopify migration moves your store from Magento, WooCommerce or another platform to Shopify without losing your products, your customers or your Google rankings. We plan the data, the design and the redirects before anything moves, because most migration damage happens when those three are treated as an afterthought.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Your old store keeps selling while we build the new one. The switch happens once, in a quiet window, after test orders pass on the new store. Nothing goes live on hope.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/strategy-call" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center">
                            Plan Your Migration
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What does a Shopify migration include?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        A migration is more than copying products. This is the full scope of what moves, and what gets rebuilt. Custom features are rebuilt in Liquid where the old store had them, as described on our <a href="/services/custom-liquid-development" className="text-amber-500 hover:underline">Custom Liquid Development</a> page.
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

            {/* Magento */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Magento to Shopify migration</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Magento owners usually migrate for one reason: the cost and effort of simply keeping the store running. Hosting, security patches, developer time for every small change. Shopify removes most of that weight.</p>
                    <p>The move itself needs care. Magento catalogs often carry years of custom attributes, layered navigation and extension features that have no direct Shopify equal. We map each one before the move: keep it as an app, rebuild it in Liquid, or drop it because nobody uses it.</p>
                    <p>That mapping step is where Magento migrations are won or lost. Stores that skip it discover missing features after launch, when customers are already looking at them.</p>
                </div>
            </section>

            {/* WooCommerce */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">WooCommerce to Shopify migration</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>WooCommerce stores usually migrate when plugin upkeep becomes the job. Updates break checkouts, plugins fight each other, and hosting slows down exactly when traffic grows.</p>
                        <p>The data move is straightforward for products and customers. The careful part is everything around it: plugin features that must be replaced with Shopify apps or native features, and a checkout that behaves differently from the WooCommerce flow your regulars know.</p>
                        <p>We rebuild that flow deliberately, using the same thinking behind our <a href="/services/checkout-flow" className="text-amber-500 hover:underline">Checkout Flow</a> work. Your returning customers should feel the new store is easier, not just different.</p>
                    </div>
                </div>
            </section>

            {/* Rankings */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Will a migration hurt your Google rankings?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>It can, and pretending otherwise would be dishonest. Rankings dip when URLs change without redirects, when content gets dropped in the move, or when the new store launches slower than the old one. These are the three classic migration injuries, and all three are preventable.</p>
                    <p>Our protection is boring and thorough. Every important old URL is mapped to its new home before launch. Content moves in full, not in summary. The new store is speed checked before the switch, the sitemap is submitted the day it goes live, and rankings and traffic are watched in the weeks after.</p>
                    <p>Even with all of that, a small temporary dip is possible while Google recrawls the new store. Anyone who promises zero movement is selling you comfort, not a plan. What we promise is that no page is lost by carelessness.</p>
                    <p>This care is deliberate. Your migration is planned by a developer who also works in SEO every day, so the redirect map gets the same attention as the design.</p>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does the migration process work?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>It starts with an audit of your current store. We look at your catalog size, your custom features, your traffic and your top pages. If a migration does not make sense for you yet, you will hear that first. The same review is available on its own as a <a href="/services/shopify-store-audit" className="text-amber-500 hover:underline">Shopify Store Audit</a>.</p>
                        <p>Next comes the data mapping and the staging build. Your new store is built on a development copy, with real products and real data, while your old store keeps trading. You review it, click through it and test it like a customer.</p>
                        <p>Then we run test orders, payment tests and the redirect checks. Only after all of that passes do we schedule the switch, in your quietest trading window. After launch, we monitor traffic, errors and key pages, and your store can move onto <a href="/services/shopify-maintenance-services" className="text-amber-500 hover:underline">monthly maintenance</a> so it stays healthy from day one.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Move Without Losing Sales</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call with your current store details and get an exact quote and a realistic timeline, before you commit to anything.
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
