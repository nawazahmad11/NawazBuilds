import React, { useState } from 'react';

export default function ShopifyConsultingServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "How much does Shopify consulting cost?",
            a: "It depends on the scope. A single decision review costs far less than a full store roadmap. Book a strategy call, tell us the decision you are facing, and you get an exact price before anything starts. There is no hourly meter running in the background."
        },
        {
            q: "What is the difference between consulting and a store audit?",
            a: "An audit diagnoses your store itself: speed, product pages, checkout, apps and SEO basics, delivered as a ranked fix list. Consulting is wider. It covers decisions and plans: rebuild or patch, migrate or stay, upgrade to Plus or not, which agency quote to trust. Many owners start with an audit, then use consulting to plan what happens with the findings."
        },
        {
            q: "Will you also do the implementation work?",
            a: "If you ask us to, yes, quoted separately after the plan exists. There is no obligation. The roadmap is written so your own developer or another agency can execute it. Advice that only works if you hire the advisor is not advice, it is a sales funnel."
        },
        {
            q: "Can you review a quote or plan from another agency?",
            a: "Yes, and it is one of the most common requests. A second opinion before you sign a large build contract is cheap insurance. We review the scope line by line and tell you what is necessary, what is padding and what is missing entirely."
        },
        {
            q: "How long does a consulting engagement take?",
            a: "A focused decision review is usually days. A full roadmap for a rebuild or migration takes longer, because it includes reviewing your store, your data and your current setup. You get a confirmed timeline with the quote."
        },
        {
            q: "Who is Shopify consulting for?",
            a: "Owners facing an expensive decision: a redesign, a platform migration, a Plus upgrade, a growth plateau they cannot explain. If the decision costs real money and getting it wrong costs more, an experienced outside view pays for itself."
        }
    ];

    const includes = [
        "A full review of your store, funnel and numbers before any opinion is given",
        "Rebuild or patch decisions, made with evidence from your actual store",
        "Migration planning: what moves, what breaks, what it should cost",
        "Shopify Plus decisions: whether the upgrade pays for your store, or does not",
        "App and technology stack review: what to keep, replace or remove",
        "Second opinions on agency quotes and technical plans, line by line",
        "A written growth roadmap ranked by impact, not by what is easiest to sell you",
        "Clear briefs your team can hand to any developer, including ours"
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
                            Consulting Slots Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Independent Shopify Advice
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Consulting</span> Services
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        A Shopify consultant reviews your store, your plans and your numbers, then tells you what to do next and what to stop doing. You get a clear, ranked roadmap from someone who builds Shopify stores every week, and you are free to execute it with any developer you like.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Most store decisions fail quietly. The rebuild that was not needed. The migration nobody planned properly. The Plus upgrade bought a year too early. Consulting exists to catch those before they cost you.
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What does a Shopify consultant actually do?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        Turns expensive guesses into planned decisions. Concretely, it looks like this.
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

            {/* Consultant vs developer */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">When do you need a consultant instead of a developer?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>When the question is what to do, not how to build it. A developer executes a brief. If the brief itself is wrong, good execution just delivers the wrong thing faster and at full price.</p>
                    <p>Typical consulting moments: your store has plateaued and three agencies gave you three different explanations. You are quoted a full rebuild and suspect a targeted fix would do. You are moving from another platform and the migration plan is a shrug. You are considering Plus and nobody can show you the math for your store specifically.</p>
                    <p>Once the decision is made and the plan is written, development takes over. If you already know exactly what you need built, skip consulting and look at our <a href="/services/custom-liquid-development" className="text-amber-500 hover:underline">custom development</a> work instead.</p>
                </div>
            </section>

            {/* How it works */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does a consulting engagement work?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>It starts with the decision, not a sales deck. On the first call you explain what you are facing. If we are not the right help for it, we say so on that call.</p>
                        <p>Then we review. Store access as a collaborator, your analytics, your current setup and any quotes or plans you want examined. The review is done by the same people who build stores here, not handed to a junior with a checklist.</p>
                        <p>You receive the roadmap in writing: the decision we recommend, the evidence behind it, the steps in order, and the honest risks. We walk through it together on a call until every line makes sense. What you do with it afterwards is entirely your choice.</p>
                    </div>
                </div>
            </section>

            {/* Honest limits */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What will this consulting never tell you?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>It will never tell you what you want to hear instead of what your store shows. If the right answer is do nothing yet, that is the answer you get, even though it earns us nothing. If your current developer's plan is actually good, we say that too.</p>
                    <p>It also comes with no revenue promises. A roadmap removes bad decisions and sequences good ones. It cannot guarantee sales, and any consultant who guarantees a number is guessing with your money.</p>
                    <p>For many stores the natural first step is smaller: a <a href="/services/shopify-store-audit" className="text-amber-500 hover:underline">store audit</a> gives you the diagnosis, and consulting turns that diagnosis into a plan. The two pair well, in that order.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Facing an Expensive Shopify Decision?</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and talk it through with a builder first. Thirty minutes now can save a rebuild you never needed.
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
