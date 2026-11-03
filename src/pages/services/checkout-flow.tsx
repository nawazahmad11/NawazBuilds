import React, { useState } from 'react';

export default function CheckoutFlowService() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "Can you personalize the checkout experience without Shopify Plus?",
            a: "Partly, and it is worth being precise about which part. On standard Shopify plans the checkout pages themselves are locked, but everything before them is yours: the cart drawer, shipping thresholds, trust signals and pre-purchase offers. Those moments decide whether a shopper reaches checkout confident or hesitant. On Plus, the checkout itself opens up too."
        },
        {
            q: "What changes on Shopify Plus?",
            a: "Plus unlocks checkout customization through checkout blocks and Shopify Functions. Custom fields, delivery logic, payment rules, discounts that run at checkout level and branded thank you and order status pages. Our guide to the <a class=\"text-amber-500 hover:underline\" href=\"/blog/shopify-checkout-extensibility-guide\">checkout extensibility upgrade</a> explains the current system in plain language."
        },
        {
            q: "How does a custom cart drawer reduce abandonment?",
            a: "Most drop offs happen because of surprises: shipping costs appearing late, unclear delivery times, doubt at the payment step. A well built cart drawer answers those questions early, with a free shipping progress bar, honest totals and trust signals in view, so checkout feels like a formality instead of a risk."
        },
        {
            q: "Will checkout changes hurt my conversion rate?",
            a: "Any change is tested the careful way. Work happens on a duplicate theme, test orders run through the full flow, and tracking is checked before and after. If a change cannot be measured, it does not ship on hope."
        },
        {
            q: "Do you also fix checkout tracking?",
            a: "Yes. Broken or duplicated purchase events make every other decision guesswork. We configure checkout and post purchase events cleanly, including customer events and web pixels. Our article on <a class=\"text-amber-500 hover:underline\" href=\"/blog/shopify-plus-checkout-extensibility-tracking\">Plus checkout tracking</a> shows how we approach it."
        },
        {
            q: "How much does checkout flow work cost?",
            a: "Cart and pre-checkout work is a focused project. Plus checkout builds are larger, because Functions and testing take real engineering time. Book a strategy call and you get an exact price for your store before any work begins."
        }
    ];

    const includes = [
        "Cart drawer rebuilt for clarity: honest totals, free shipping progress and trust signals in view",
        "Shipping and delivery expectations set early, before they can surprise anyone at payment",
        "Pre-purchase offers and add ons placed where they help instead of interrupting",
        "For Shopify Plus: checkout blocks, custom fields and Shopify Functions for discounts and delivery rules",
        "Branded thank you and order status pages that keep selling after the sale",
        "Post purchase offers where they fit your margins and your brand",
        "Checkout and purchase tracking verified end to end, so results are measurable",
        "Full test order runs on desktop and mobile before anything goes live"
    ];

    return (
        <div className="min-h-screen bg-[#0b0b0c] text-white font-sans selection:bg-amber-500 selection:text-black relative z-10">

            {/* Navigation Header */}
            <div className="w-full pt-[80px] md:pt-[90px] block relative z-20">
                <div className="max-w-7xl mx-auto px-6 py-5 border-b border-zinc-900/60 flex justify-between items-center bg-[#0b0b0c]">
                    <a href="/" className="flex items-center gap-2.5 group text-zinc-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-xs font-semibold tracking-widest uppercase">Back to Home</span>
                    </a>
                    <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span className="text-[11px] text-zinc-400 font-medium tracking-wider uppercase">Conversion Audits Available</span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6">
                        Cart to Payment, Engineered
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Checkout Flow</span> Optimization
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-6">
                        Checkout flow optimization is the work between add to cart and paid order: the cart drawer, the expectations set before checkout, and on Shopify Plus the checkout itself. Shoppers rarely abandon because of price alone. They abandon because something surprised them, confused them or made them doubt the store.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        We remove those moments one by one, then prove the flow works with real test orders before it ever meets a real customer.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/strategy-call" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transition-all text-center">
                            Book a Strategy Call
                        </a>
                        <a href="#includes" className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium rounded-xl border border-zinc-800 transition-all text-center">
                            See What Is Included
                        </a>
                    </div>
                </div>
            </section>

            {/* What is included */}
            <section id="includes" className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What does checkout flow optimization include?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        The whole path, not just the payment page. Most of the leaks happen before checkout even starts.
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

            {/* Honest limits */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What can checkout optimization not do?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>It cannot redesign Shopify's core checkout on standard plans, and anyone who promises that is selling something Shopify does not allow. It also cannot fix a weak offer. If the product, price or shipping terms are the problem, a smoother flow only shows it faster.</p>
                    <p>What it does do is remove self inflicted losses: the late shipping surprise, the confusing cart, the missing trust signal at the payment step, the broken mobile layout. Those losses are real, they are common, and unlike demand problems, they are fully in your control.</p>
                    <p>If you are not sure where your funnel leaks, start with the evidence. Our article on <a href="/blog/why-shopify-store-needs-cro-audit" className="text-amber-500 hover:underline">why your store needs a CRO audit</a> explains what to measure first, and a <a href="/services/shopify-store-audit" className="text-amber-500 hover:underline">store audit</a> gives you the ranked list.</p>
                </div>
            </section>

            {/* Case Study Featurette */}
            <section className="py-20 bg-zinc-950/80 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div>
                            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Funnel Optimization Case Study</div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Luxury Jewelry Conversion Optimization</h2>
                            <p className="text-zinc-400 mb-6 leading-relaxed text-[15px]">
                                For this premium luxury jewelry collection, we engineered a multi tier native cart drawer setup. Trust signals sit where doubt appears, totals stay clear at every step, and drop off fell significantly once the surprises were removed.
                            </p>
                            <a href="https://www.nawazbuilds.com/case-studies/jewelry-store" className="inline-flex items-center gap-2 text-zinc-300 hover:text-amber-500 font-medium group transition-colors text-sm">
                                <span>Read Full Jewelry Case Study</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl relative">
                            <div className="space-y-3 font-mono text-xs">
                                <div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3">
                                    <span className="text-zinc-400">1. Cart drawer</span>
                                    <span className="text-emerald-500">Totals clear, no surprises</span>
                                </div>
                                <div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3">
                                    <span className="text-zinc-400">2. Information</span>
                                    <span className="text-emerald-500">Delivery promise in view</span>
                                </div>
                                <div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3">
                                    <span className="text-zinc-400">3. Payment</span>
                                    <span className="text-emerald-500">Trust signals at the decision</span>
                                </div>
                                <div className="flex items-center justify-between bg-zinc-950 border border-amber-500/40 rounded-lg px-4 py-3">
                                    <span className="text-zinc-300">4. Thank you page</span>
                                    <span className="text-amber-500">Keeps selling after the sale</span>
                                </div>
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
                                <button onClick={() => setOpenIndex(isOpen ? null : index)} className="w-full flex items-center justify-between p-5 text-left text-zinc-200 hover:text-white transition-colors group focus:outline-none">
                                    <span className="text-[15px] font-semibold tracking-tight pr-4 group-hover:text-amber-500 transition-colors">{faq.q}</span>
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
                    <h2 className="text-3xl font-bold mb-4">Stop Losing Buyers at the Last Step</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and we will walk your funnel with you, cart to thank you page, and show you exactly where buyers hesitate.
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
