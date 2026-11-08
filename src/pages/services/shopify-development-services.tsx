import React, { useState } from 'react';

export default function ShopifyDevelopmentServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "What is the difference between development and a theme setup?",
            a: "A theme setup configures what a theme already offers: colors, fonts and sections in the editor. Development writes code the theme does not have: new section types, custom features, integrations and checkout behavior. If the editor says no, it is development."
        },
        {
            q: "Can my store keep selling while you build?",
            a: "Yes. Building and testing happen on a duplicate of your live theme. Customers see the current store until the new version is reviewed, approved by you and published in a planned step. Nothing is edited live and hoped for the best."
        },
        {
            q: "Do you build on Shopify Plus?",
            a: "Yes. Plus work includes checkout extensibility and Shopify Functions for discount and shipping logic. The same rule applies as everywhere else here: if a Plus feature is not worth its cost for your store, we say so first."
        },
        {
            q: "Will you fix our current theme or rebuild it?",
            a: "It depends on what the theme shows us. A sound theme with a few hard problems gets fixed. A theme carrying years of app residue often costs more to clean than to rebuild in part. We inspect first and put the reasoning in the quote."
        },
        {
            q: "How is the price of a development project set?",
            a: "By scope, in writing, before work starts. After the strategy call you receive what will be built and the exact price for it. If the scope grows, the addition is priced and approved before it is built. No open ended hourly billing."
        },
        {
            q: "What do you need from us to begin?",
            a: "A strategy call, collaborator access to your store, and a clear statement of what the store needs to do. Designs or examples help if you have them. If not, we work from your goals, and the scope shows the direction before the build is approved."
        },
        {
            q: "What happens after the build goes live?",
            a: "You get a walkthrough of what changed and how to use it, and defects in the delivered work are fixed as part of the project. After that, most stores move ongoing changes into a maintenance arrangement, so one developer keeps looking after code they already know."
        },
        {
            q: "Are you an agency or a freelancer?",
            a: "NawazBuilds is a small Shopify development company. You work directly with the developer who builds your store, and projects run with a written scope and quote like agency work, without account managers in between."
        }
    ];

    const includes = [
        "New Shopify and Shopify Plus store builds, set up clean from the first day",
        "Custom theme development, and rebuilds when patching an old theme stops paying",
        "Custom Liquid sections and features your theme cannot do out of the box",
        "App integration, and private app work for the tools your store depends on",
        "Checkout customization on Plus, using checkout extensibility and Shopify Functions",
        "Migration into Shopify from other platforms, with redirects and data checks",
        "Speed and mobile fixes made inside the theme, not bolted on top of it",
        "Ongoing improvement work after launch, scoped in small and clear batches"
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
                            Development Projects Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Shopify Development Agency
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Development</span> Services
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        A Shopify development agency builds what your store needs in code: a new store build, custom theme work, features your theme cannot do, app integration and checkout changes. NawazBuilds works as your Shopify development agency without the agency layers: the developer you speak to first is the developer who writes the code, so the plan you approve is the store you get.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Most stores arrive here the same way. The first theme did its job, sales grew, and now every change is a workaround. Another app for this, a patch for that. Development is how a store stops accumulating workarounds and gets built properly instead.
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What do Shopify development services cover?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        One engagement that covers the build end to end. Concretely, it looks like this.
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

            {/* Development vs another app */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">When does a store need development instead of another app?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Apps are right for standard jobs: reviews, email capture, subscriptions. Trouble starts when an app is asked to bend your store into a shape it was never designed for. Then you pay monthly for a compromise that slows every page it touches.</p>
                    <p>Custom development fits the problems that are specific to your store. A product page layout your niche needs. A bundle flow your warehouse can actually fulfill. A checkout step that only makes sense for your customers. If the feature is part of why people buy from you, it belongs in your theme, built once and owned by you.</p>
                    <p>The middle path is common too. Keep the apps that earn their place, move the critical pieces into the theme through <a href="/services/custom-liquid-development" className="text-amber-500 hover:underline">custom Liquid development</a>, and give the result a finish that feels designed, not assembled.</p>
                </div>
            </section>

            {/* How a project runs */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does a development project run here?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>It starts with a strategy call about the outcome, not the code. You describe what the store needs to do. We tell you whether development is the right spend, or whether a setting, an app or a smaller fix solves it.</p>
                        <p>Then the work is scoped in writing: what will be built, what it depends on, and the exact price. Building happens on a duplicate of your live theme, so your store keeps selling while the work is tested. You review on the duplicate before anything goes live.</p>
                        <p>Publishing is a planned step, not a hope. Redirects, apps and checkout are checked against a list, and the old theme stays as a fallback. If you are not sure your store is ready for a build, a <a href="/services/shopify-store-audit" className="text-amber-500 hover:underline">store audit</a> is the smaller first step: it shows what needs development and what does not.</p>
                    </div>
                </div>
            </section>

            {/* Honest limits */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What should you expect from a Shopify development company?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Code cannot rescue a product nobody wants or an offer priced against you. If the store gets traffic and the pages are honest, development removes friction. If the problem sits earlier, in the product or the positioning, we tell you that instead of selling you a rebuild.</p>
                    <p>A defined project also has a finish line, and a growing store usually needs both kinds of help at different times. If your need is regular access to a developer who already knows your store, rather than one scoped build, read how it works to <a href="/services/hire-shopify-developer" className="text-amber-500 hover:underline">hire a Shopify developer</a> instead.</p>
                </div>
            </section>

                        {/* Agency or freelancer */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Should you hire a Shopify development agency or a freelancer?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>An agency gives you a team. If one person is away, someone else can cover the work. The cost is higher because you also pay for account managers and hand offs, and the person who sells the work rarely writes the code.</p>
                        <p>A freelancer is usually cheaper and you speak to them directly. The risk is simple. Everything stops when they are busy, ill or gone, and their skills end where their experience ends.</p>
                        <p>NawazBuilds is deliberately the middle shape. It is a development company where the developer you speak to is the developer who builds. Every project runs with a defined scope and a written quote, so you get agency reliability without agency layers.</p>
                        <p>A very small one off fix often suits a freelancer. An ongoing programme that needs many skills at once often suits a big agency. A defined store build or rebuild where you want direct developer access suits this model, and you can book a <a href="/strategy-call" className="text-amber-500 hover:underline">strategy call</a> to talk it through.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Tell Us What Your Store Needs to Do</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and describe the outcome you want. We will tell you plainly what it takes to build it, and what it costs, before you commit to anything.
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
