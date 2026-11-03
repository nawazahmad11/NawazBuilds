import React, { useState } from 'react';

export default function ShopifyStoreManagementServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "What is the difference between store management and maintenance?",
            a: "Maintenance is technical care: updates, backups, speed and security checks, small fixes. Management is operational work: product uploads, content changes, campaigns and the daily tasks that keep the store current. Many stores take both. Maintenance keeps the store healthy, management keeps it moving."
        },
        {
            q: "How much does Shopify store management cost?",
            a: "It is a monthly service priced on task volume: how many products, how frequent the campaigns, how much content changes. Book a strategy call, walk us through your weekly workload, and you get an exact monthly price in writing before anything starts."
        },
        {
            q: "How do I send tasks, and how fast are they done?",
            a: "You send tasks through one shared channel, so nothing gets lost across chats and inboxes. Routine tasks are handled on a steady weekly rhythm, and anything time sensitive, like a sale going live, gets flagged and scheduled first. Turnaround for your plan is confirmed in writing."
        },
        {
            q: "Does management include customer support or order fulfillment?",
            a: "No. Management covers the store itself: products, content, promotions and platform tasks. Answering your customers and shipping orders stay with your team. Keeping that line clear is what makes the service reliable instead of a vague promise to do everything."
        },
        {
            q: "Can I start with management and add maintenance later?",
            a: "Yes. The two combine cleanly because the same team already knows your store. Owners often start with whichever pain is louder, daily tasks piling up or technical upkeep being skipped, and add the other when it makes sense."
        },
        {
            q: "Is there a long contract?",
            a: "The service runs monthly with the scope and price agreed in writing before the first month. If your workload changes, the plan is adjusted to match, instead of you paying for capacity you no longer use."
        }
    ];

    const includes = [
        "Product uploads and edits: titles, images, variants, pricing and tags done properly",
        "Collection setup and upkeep, including seasonal and campaign collections",
        "Homepage and banner updates for sales, launches and seasonal changes",
        "Discount codes and promotion setup, tested before they go live",
        "Content edits across pages, blogs and policy pages, formatted consistently",
        "App coordination: installs, removals and settings changes handled in the right order",
        "A weekly check that the storefront looks right on mobile and desktop",
        "A monthly summary of everything done, so you always know what you paid for"
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
                            Management Slots Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Day to Day Store Operations
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Store Management</span> Services
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Shopify store management means someone reliable runs the daily work of your store for you: products uploaded properly, collections kept current, promotions set up and tested, content updated on time. You stop spending your evenings inside the Shopify admin, and the store stops drifting out of date.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Every task is logged, and you get a monthly summary of exactly what was done. No mystery hours, no forgotten requests.
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What does store management include?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        The recurring work a growing store generates every week, handled as a routine instead of a scramble.
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

            {/* Management vs maintenance */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Do you need management, maintenance, or both?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Ask where your time and risk actually sit. If your week disappears into uploads, edits and campaign setup, that is management work. If updates get skipped, backups are a rumor and nobody has checked speed in months, that is maintenance work, and it is the riskier gap of the two.</p>
                    <p>Most growing stores carry both problems, which is why the services are built to combine. Read about <a href="/services/shopify-maintenance-services" className="text-amber-500 hover:underline">maintenance</a> if the technical side is your worry, and stay here if the daily workload is.</p>
                    <p>Either way, access is handled safely. We work as a collaborator on your store. We never need your password, and you can remove access at any time.</p>
                </div>
            </section>

            {/* Honest scope */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What does store management not include?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>Customer support, order fulfillment and advertising stay with your team. Management is the store itself: the catalog, the content, the promotions and the platform tasks around them.</p>
                        <p>Big builds are not management tasks either. A new feature or a redesign is scoped as its own project under <a href="/services/custom-liquid-development" className="text-amber-500 hover:underline">custom development</a>, so small daily work never queues behind a large build, and a large build never gets chopped into tickets.</p>
                        <p>That clear boundary is deliberate. A service that claims to do everything usually does the urgent things badly. This one does a defined list well, and reports on it monthly.</p>
                    </div>
                </div>
            </section>

            {/* How it runs */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does the service run week to week?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Onboarding is a single working session: your catalog structure, your brand rules, your recurring calendar of sales and launches. After that, tasks flow through one shared channel with priorities marked by you.</p>
                    <p>Routine work is batched into a steady weekly rhythm, which is faster and more accurate than scattered one off requests. Anything tied to a date, a product drop or a campaign launch, gets scheduled against that date first.</p>
                    <p>At month end you receive the summary: tasks completed, time sensitive work delivered, and anything we noticed that deserves your attention next month.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Get Your Evenings Back</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call, walk us through your weekly store workload, and get an exact monthly price for handing it over.
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
