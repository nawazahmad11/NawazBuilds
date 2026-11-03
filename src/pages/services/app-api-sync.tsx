import React, { useState } from 'react';

export default function AppApiSyncService() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "Which systems can you connect to Shopify?",
            a: "Most systems with an API: ERPs, warehouse and 3PL platforms, CRMs, accounting tools, email and marketing platforms, and custom internal databases. If a system has no usable API, we will tell you honestly and discuss what is actually possible instead of selling you a fragile workaround."
        },
        {
            q: "Can you sync a specialized ERP inventory system natively?",
            a: "Yes. We build dedicated private Shopify apps and sync webhooks that speak directly with your warehouse, ERP or legacy database, keeping real time multi location counts accurate without a chain of subscription connector apps in between."
        },
        {
            q: "Will custom API webhooks bypass Shopify rate limits?",
            a: "They work within them properly. By deploying a middleware layer that queues heavy requests and retries safely, high volume moments like product drops stop failing against Shopify's connection ceilings. Orders and inventory updates keep flowing instead of erroring out silently."
        },
        {
            q: "What happens when an integration breaks?",
            a: "Breaks are detected, not discovered by your customers. Integrations are built with logging and failure alerts, so a failed sync raises a flag while retries run. If you pair the build with monthly maintenance, someone is watching those flags for you."
        },
        {
            q: "Why not just use a connector app?",
            a: "For standard tools with standard needs, a connector app is fine and cheaper, and we will say so. Custom integration earns its cost when your logic is not standard: multiple locations with special rules, legacy systems, high volumes, or data that must move in near real time. Apps charge monthly forever for a compromise. A private integration is yours."
        },
        {
            q: "How much does a Shopify integration project cost?",
            a: "It depends on the number of systems and the complexity of the data moving between them. Book a strategy call, show us the systems involved, and you get an exact price and timeline before any work begins."
        }
    ];

    const includes = [
        "ERP and inventory sync: stock levels accurate across every location, in near real time",
        "Warehouse and 3PL connections: orders out, tracking numbers back, automatically",
        "CRM and marketing platform integrations your team can actually trust",
        "Accounting sync: orders, refunds and payouts flowing to your books without exports",
        "Private Shopify apps built for your integration, owned by you, no monthly connector fees",
        "Webhook architecture with queues, retries and safe handling of Shopify rate limits",
        "Data mapping and cleanup when systems disagree about formats and fields",
        "Logging and failure alerts, so a broken sync is found in minutes, not at month end"
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
                        <span className="text-[11px] text-zinc-400 font-medium tracking-wider uppercase">Backend Integrations Active</span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6">
                        Apps, APIs and Data Synchronization
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Integration Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-6">
                        Shopify integration services connect your store to the rest of your business: your ERP, warehouse, CRM, accounting and marketing tools. Data is entered once and flows everywhere it is needed, through private apps, APIs and webhooks built for your exact setup, instead of manual exports and fragile connector chains.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Bad integrations fail quietly. Stock counts drift, orders go missing between systems, and the team stops trusting every number. We build integrations that log everything and alert on failure, so quiet failures stop being your discovery process.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/strategy-call" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transition-all text-center">
                            Discuss Your Integration
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What do Shopify integration services cover?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        Anywhere your store data needs to be and currently is not, or arrives late, wrong or by hand.
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

            {/* App or custom */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">When is a connector app enough, and when do you need this?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>A connector app is enough when your setup is standard: one warehouse, common tools, ordinary volumes. Install it, map the fields, done. We will tell you that plainly if it describes you, because custom work you do not need is a bad buy.</p>
                    <p>Custom integration earns its place when the standard path breaks: multi location inventory with real rules, a legacy ERP the app store has never heard of, order volumes that punish slow syncs, or data that has to move the moment something happens. That is also where connector chains get expensive: three subscriptions deep, and nobody can say which link failed.</p>
                    <p>The builds themselves sit inside our <a href="/services/custom-liquid-development" className="text-amber-500 hover:underline">custom development</a> practice: private apps and middleware written for your store alone, documented, and owned by you.</p>
                </div>
            </section>

            {/* Case Study Featurette */}
            <section className="py-20 bg-zinc-950/80 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div>
                            <div className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3">Featured Infrastructure Case Study</div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">District99 Operations Scaling</h2>
                            <p className="text-zinc-400 mb-6 leading-relaxed text-[15px]">
                                Realized zero lag operations for high volume catalogs. By executing secure endpoint routines and optimizing data collection, we unified their multi source logistics channels right into Shopify's database.
                            </p>
                            <a href="https://www.nawazbuilds.com/case-studies/District99" className="inline-flex items-center gap-2 text-zinc-300 hover:text-amber-500 font-medium group transition-colors text-sm">
                                <span>Explore District99 Integration Schema</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-2xl relative">
                            <div className="aspect-[16/11] bg-zinc-950 rounded-lg border border-zinc-800/80 overflow-hidden">
                                <div className="p-4 font-mono text-xs text-zinc-500">{"// API Connection established..."} <br /> <span className="text-emerald-500">STATUS: 200 OK</span></div>
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
                    <h2 className="text-3xl font-bold mb-4">Connect Your Store to Everything Else</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call, list the systems your store must talk to, and get an exact plan and price for connecting them properly.
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
