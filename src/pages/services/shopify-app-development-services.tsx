import React, { useState } from 'react';

export default function ShopifyAppDevelopmentServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "What is the difference between a private app and a public app?",
            a: "A public app is built for the Shopify App Store and can be installed by any store. A private or custom app is built for one store only: yours. Most of our app work is private, because most stores do not need a product for the whole marketplace. They need one tool that does exactly their job."
        },
        {
            q: "Can you build an app that connects Shopify to our own system?",
            a: "Yes, that is the most common app project here. For District99 we unified multi source logistics channels into Shopify's database through secure endpoint routines, so high volume catalog data stayed in step without manual work. If your system exposes an API, or can exchange files in a structured way, an app can usually bridge it."
        },
        {
            q: "Do we own the app you build for us?",
            a: "Yes. A private app built for your store is your asset, hosted for your store and documented for your team. You are not renting your own business logic back by the month, which is the quiet cost of stacking connector and workflow apps."
        },
        {
            q: "Will a custom app slow down our store?",
            a: "A well built private app should not touch your storefront speed at all, because it works in the background through APIs and webhooks. Storefront slowdowns usually come from public apps injecting scripts into your theme. Part of our build review is checking exactly what loads on the customer facing pages, and keeping app code out of them unless it belongs there."
        },
        {
            q: "Can you fix or extend an app another developer built?",
            a: "Usually, yes. We start by reading the existing code and documenting what it actually does, because inherited apps are often undocumented. Some are sound and just need work. Some are fragile enough that rebuilding the core is cheaper than patching. You get that verdict in writing before any build money is spent."
        },
        {
            q: "How is the price of an app project set?",
            a: "By scope, in writing, before work starts. App projects vary too much for honest blind pricing: the systems involved, the data moving between them and the edge cases decide the cost. Our blog guide to what drives Shopify app development cost explains the factors in plain language."
        },
        {
            q: "What do you need from us to begin?",
            a: "A strategy call, a clear statement of the job the app must do, and access details for the systems it must connect to. If you are not sure an app is even the right answer, say so on the call. Sometimes a theme feature or an existing app solves it, and we will tell you."
        }
    ];

    const includes = [
        "Private Shopify apps built for one store and one job, owned by you",
        "Custom apps that connect Shopify to your ERP, warehouse, CRM or in house systems",
        "Webhook systems that react to orders, inventory and customer events as they happen",
        "Admin tools your team actually uses: bulk edits, checks and reports inside Shopify",
        "Theme app extensions and app blocks that add features without editing theme code",
        "Checkout extensions on Plus, for logic that belongs inside the checkout itself",
        "Data sync tools with logging and failure alerts, so silent breakage stops",
        "Documentation and a walkthrough for every app we hand over"
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
                            App Projects Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Custom and Private App Builds
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">App Development</span> Services
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Shopify app development services build the software your store needs when the App Store does not have it: private apps that connect your systems, automate the repetitive work and add features built around how your store actually runs. At NawazBuilds the app is scoped, built and documented by the same developer you talk to.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Most stores reach this point honestly. The public apps covered the standard jobs, then the store grew a process of its own, and now staff are copying data between systems or paying monthly for three apps that each do a third of the job. A private app replaces that pile with one tool that fits.
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What do Shopify app development services cover?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        Software that lives behind your store and does a defined job reliably. Concretely, it looks like this.
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

            {/* App store app or custom app */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">When does a store need a custom app instead of an App Store app?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>An App Store app is the right first answer for standard problems. Reviews, email capture, subscriptions, common integrations: install, configure, move on. We say so on our <a href="/services/app-api-sync" className="text-amber-500 hover:underline">integration services</a> page too, because selling custom software for a standard job is a bad trade for you.</p>
                    <p>A custom app earns its place when the job is specific to your business. Your warehouse logic. Your pricing rules. The system your company already runs on, which no marketplace app has ever heard of. Or the moment you notice the monthly app stack quietly costs more than the problem it solves, while still forcing your team to work around its limits.</p>
                    <p>The deciding question is simple. Is this process the same as every other store's process, or is it yours? Standard gets an app off the shelf. Yours gets built, once, and owned by you.</p>
                </div>
            </section>

            {/* Proof from integration work */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What does this work look like in practice?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>Our app work grows out of our integration practice. For District99, a high volume catalog operation, we built secure endpoint routines that unified their multi source logistics channels directly into Shopify's database, replacing manual data handling with a sync the team could trust. That is the shape of most private app projects: unglamorous plumbing that removes daily friction.</p>
                        <p>The same discipline applies to smaller builds. Every app ships with logging, so when something fails you can see what happened instead of guessing. Every build is documented, so the knowledge does not live only in one developer's head. And where an app needs storefront or checkout presence, it is built with extensions, inside the rules Shopify sets, rather than hacks that break on the next platform update.</p>
                        <p>App projects sit inside our wider <a href="/services/shopify-development-services" className="text-amber-500 hover:underline">Shopify development services</a>: the same hands that build your theme can build the software behind it, so the two never fight each other.</p>
                    </div>
                </div>
            </section>

            {/* How a project runs */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does an app development project run here?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>It starts with the job, described in plain words. What should happen, when, and what it replaces. From that we map the data: what moves, in which direction, and what counts as an error. Many app ideas shrink at this stage into something simpler, and that is a good outcome, not a lost sale.</p>
                    <p>Then the build is scoped in writing: what the app will do, what it connects to, and the exact price. The app is developed and tested against a development store and real sample data before it touches your live operation. Your team gets a walkthrough and documentation at handover.</p>
                    <p>After launch, apps need the same care themes do: platform APIs change, and Shopify retires old versions on a schedule. Stores usually fold that watching brief into <a href="/services/shopify-maintenance-services" className="text-amber-500 hover:underline">monthly maintenance</a>, so the app is checked before an API change becomes an outage.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Describe the Job Your Store Needs Done</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and explain the process you want automated or connected. We will tell you plainly whether it needs a custom app, an existing app, or no app at all.
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
