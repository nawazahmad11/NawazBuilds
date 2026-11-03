import React, { useState } from 'react';

export default function HireShopifyDeveloper() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "How is hiring a developer different from hiring an agency?",
            a: "With a developer, the person who scopes your work is the person who does it, and every conversation is with that person. An agency adds account managers and a team bench, which suits very large builds with many parallel workstreams, at a matching cost. For one store with steady work, the relay layer usually adds delay, not quality."
        },
        {
            q: "Can I hire you for a single fix, or is it ongoing only?",
            a: "Both. Many owners start with one scoped task: a stubborn bug, a section the theme cannot do, a checkout problem. If the relationship fits, it grows into regular work. If not, you still own clean code and a store in better shape than before."
        },
        {
            q: "What should I ask a Shopify developer before hiring one?",
            a: "Ask how they test before publishing, and expect to hear about duplicate themes. Ask who writes the code, and whether it is the person on the call. Ask what happens when something breaks after a change, and who owns the code at the end. Clear answers separate professionals from hopefuls."
        },
        {
            q: "Will you work alongside our designer or marketing team?",
            a: "Yes, and it is a common arrangement. Your designer owns the look, your marketer owns the campaigns, and the developer makes the store behave the way both need. One direct contact keeps that triangle simple instead of turning every change into a ticket passed between strangers."
        },
        {
            q: "How much does it cost to hire a Shopify developer?",
            a: "It depends on the work, so the honest answer is a written one. After a first call you get the scope and the exact price, before anything starts. There is no open ended hourly meter, and additions are priced and approved before they are built, not discovered on an invoice."
        },
        {
            q: "What if you are not the right fit for my store?",
            a: "Then you hear it on the first call, not after an invoice. Some stores need a big agency bench, some need a specialist we are not, and some need no developer at all yet. A clear no early is worth more than a hopeful yes, and we would rather point you at the right route."
        }
    ];

    const includes = [
        "One point of contact who has read your theme and knows its history",
        "Theme changes and custom Liquid features, tested on a duplicate theme first",
        "Bug fixes and debugging of the strange issues nobody else wants to touch",
        "App setup, integration, and removal of code left behind by old apps",
        "Checkout and Shopify Plus changes, kept inside what the platform allows",
        "Speed and mobile problems fixed in the theme itself, not masked by apps",
        "Plain second opinions on quotes and plans you receive from other providers",
        "Every batch of work scoped in writing before it starts, so you approve it first"
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
                            Now Taking New Stores
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        One Developer, No Middlemen
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Hire a Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Developer</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Hiring a Shopify developer means one named person who knows your store writes and looks after its code, instead of a ticket queue at an agency. At NawazBuilds that person is the founder, Nawaz Ahmad. You explain the problem once, to the developer who will actually fix it.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Owners usually get here after the same frustrations. A freelancer who went quiet mid project. An agency where every message passes through two people before reaching anyone technical. A store that works, mostly, with nobody who truly knows its code.
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What can you hire a Shopify developer to do?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        Practically, whatever your store needs in code, with one person answering for it. It looks like this.
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

            {/* Skills to check */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What skills should you check before you hire?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Start with the craft itself. A real Shopify developer is fluent in Liquid and theme architecture, comfortable with JavaScript, and honest about the edges of the platform: what checkout allows, what apps cannot do, where a workaround will hurt you later. Ask for a limit they talked a client out of crossing. The answer tells you a lot.</p>
                    <p>Then check working habits, because they decide your experience more than talent does. Work should happen on a duplicate theme, never live. Changes should be explained in plain words, not jargon. Scope should arrive in writing before work starts. A developer who resists any of those three will resist them at the worst possible moment.</p>
                    <p>Speed is part of the craft too. A developer who builds features without watching what they cost your load time is quietly taxing every visitor, which is why our <a href="/services/shopify-speed-optimization-services" className="text-amber-500 hover:underline">speed optimization</a> work and our development work are done by the same hands.</p>
                </div>
            </section>

            {/* Developer vs freelancer vs agency */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Developer, freelancer or agency: which fits your store?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>An agency fits a large build with many moving parts, where designers, developers and project managers must work in parallel. You pay for that bench whether you use all of it or not, and your day to day contact is rarely the person writing code.</p>
                        <p>A marketplace freelancer fits a tiny, well defined task with a clear end. The risk is continuity: when they disappear, and some do, your store knowledge disappears with them, because it was never written down anywhere.</p>
                        <p>A dedicated developer is the middle most growing stores actually need: one accountable person, direct conversation, and knowledge of your store that compounds over time. If you have one defined build rather than a stream of work, our <a href="/services/shopify-development-services" className="text-amber-500 hover:underline">Shopify development services</a> page describes that route instead.</p>
                    </div>
                </div>
            </section>

            {/* How working together starts */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does working together start?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>With a strategy call and a small first task, deliberately. You should not have to commit to a long arrangement to learn whether a developer communicates well and ships clean work. The first task proves the relationship at low risk, on something your store actually needs.</p>
                    <p>From there, work settles into a rhythm: you raise what the store needs, it is scoped in writing, approved by you, built on a duplicate theme and published in a planned step. Stores that want the routine handled fold this into <a href="/services/shopify-maintenance-services" className="text-amber-500 hover:underline">monthly maintenance</a>, where the same developer keeps watch over updates and small fixes.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Talk to the Developer, Not a Sales Rep</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and bring the problem your store is carrying. The person on the call is the person who would fix it.
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
