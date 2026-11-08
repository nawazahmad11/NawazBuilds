import React, { useState } from 'react';

export default function ShopifyThemeCustomizationServices() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "How much does Shopify theme customization cost?",
            a: "It depends on how much of the theme changes. A focused set of changes to an existing theme costs far less than a full custom theme build. Book a strategy call, show us what you want changed, and you get an exact price before any work begins."
        },
        {
            q: "Can you customize my current theme, or do I need a new one?",
            a: "Most stores keep their current theme. If the theme is modern, well built and still supported by its developer, customizing it is the smart move. If it is old, patched many times or no longer updated, we will tell you honestly, because building on a dying theme wastes your money."
        },
        {
            q: "Will customization break my apps or checkout?",
            a: "We work on a duplicate of your live theme, never on the live one. Apps, tracking and checkout are tested on the copy before anything is published, so your store keeps selling while we build."
        },
        {
            q: "Will I be able to edit the pages myself afterwards?",
            a: "Yes. Custom sections are built for the Shopify theme editor, so your team can change text, images and layout blocks without touching code and without calling a developer for every small update."
        },
        {
            q: "How long does a theme customization project take?",
            a: "Small change sets are usually a matter of days. A full theme rebuild takes longer, and you get a confirmed timeline with the quote, before you commit to anything."
        },
        {
            q: "Do you build fully custom Shopify themes as well?",
            a: "Yes. When a premium theme cannot express your brand or your product pages need layouts no theme offers, we design and build a custom theme in Liquid. That is theme development, and it sits at the bigger end of this same service."
        }
    ];

    const includes = [
        "Header, navigation and announcement areas rebuilt around your brand and your buyers",
        "Product page layouts designed to sell: media, buy path, trust signals and cross sells",
        "Collection pages with working filters, sorting and quick views your customers actually use",
        "Custom sections your team can edit in the theme editor, no code needed",
        "Cart drawer improvements, free shipping progress and upsell placement done tastefully",
        "Custom templates for landing pages, lookbooks and campaign pages",
        "A consistent font and color system across the whole store, not page by page patches",
        "For Shopify Plus stores: checkout customization with Shopify Functions and checkout blocks"
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
                            Theme Projects Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        Theme Design and Development
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Theme Customization</span> Services
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        Shopify theme customization means taking your theme beyond its settings panel. We reshape your existing theme, or build a custom one, so your store looks like your brand, loads fast and turns visitors into buyers instead of looking like every other store on the same theme.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        Every change is built on a duplicate of your live theme and tested before it publishes. Your store keeps selling while we work, and your team can edit everything afterwards without touching code.
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What can be customized in a Shopify theme?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        Almost everything a customer sees and touches. These are the changes store owners ask us for most often.
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

            {/* Customize or rebuild */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Should you customize your theme or build a custom one?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>Customizing your current theme is right when the foundation is healthy. The layout is close to what you need, the theme is still updated by its developer, and your problems are about presentation: product pages that undersell, a homepage that looks generic, sections you cannot edit.</p>
                    <p>A custom theme build is right when the foundation is the problem. Your brand has a strong visual identity no stock theme can carry, your product pages need layouts that do not exist in any theme, or years of patches have made the current theme slow and fragile. Our guide to the <a href="/blog/shopify-redesign-signs-2026" className="text-amber-500 hover:underline">signs your store needs a redesign</a> helps you tell the two apart.</p>
                    <p>And sometimes the honest answer is neither. If a good premium theme plus its built in settings already does what you need, we will say so on the call. Paying for customization you do not need helps nobody.</p>
                </div>
            </section>

            {/* Custom vs premium */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Should you buy a premium theme or build a custom theme?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>A premium theme is a ready made theme bought from the Shopify Theme Store for a one time license fee. You get a proven layout, regular updates from its developer and a fast start. But your store shares its skeleton with thousands of others, and your brand must fit inside its sections.</p>
                    <p>A custom theme is designed and built for your store only. The layout follows your products and your brand. Features your store needs are built in instead of added as apps, so every removed app is one less monthly fee and one less script slowing pages. Sections are built so your team can edit them without code.</p>
                    <p>Premium wins on speed of launch and lower upfront cost. Custom wins when your product pages need layouts no theme offers. Custom also wins when app fees and app scripts are piling up, or when your brand look is the product itself.</p>
                    <p>Many stores start premium and go custom when growth justifies it. We will say honestly when premium plus settings is enough for your store. If you are weighing a custom build, see how <a href="/services/custom-liquid-development" className="text-amber-500 hover:underline">Custom Liquid Development</a> fits into that choice.</p>
                </div>
            </section>

            {/* Where customization stops */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Where does theme customization stop and custom development begin?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>Theme customization covers what the store looks like and how its pages are arranged. Custom development covers what the store can do: new features, custom logic, integrations and functionality no theme or app provides cleanly.</p>
                        <p>Many projects need both, and they are planned together so the design and the features never fight each other. If your project is mostly features, read about our <a href="/services/custom-liquid-development" className="text-amber-500 hover:underline">custom Liquid development</a> work. If it is mostly look and layout, you are on the right page.</p>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does the customization process work?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>We start by reviewing your current theme and your change list on a duplicate copy of your store. You see every change on that copy first, on real product pages, not on mockups that hide the problems.</p>
                    <p>You review, we refine, and nothing publishes until you approve it. Speed is checked before and after, because a prettier store that loads slower sells less, not more.</p>
                    <p>After launch we show your team how the new sections work in the theme editor, so the store stays yours to run. If you would rather not think about updates at all afterwards, that is what our <a href="/services/shopify-maintenance-services" className="text-amber-500 hover:underline">maintenance service</a> exists for.</p>
                </div>
            </section>

            {/* Proof */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What does good theme work look like in practice?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>Look at the stores in our portfolio. <a href="/case-studies/Saha" className="text-amber-500 hover:underline">Saha</a> and our <a href="/case-studies/clothing-store" className="text-amber-500 hover:underline">clothing store</a> build live or die on product presentation, and our <a href="/case-studies/jewelry-store" className="text-amber-500 hover:underline">jewelry store</a> shows how much trust a careful layout creates for high value items.</p>
                        <p>That is the standard theme customization is judged by. Not whether the store looks different, but whether the product pages make buying feel easy and safe.</p>
                        <p>Not sure whether your store needs design work, development work or both? A <a href="/services/shopify-store-audit" className="text-amber-500 hover:underline">store audit</a> answers that with a ranked list before you spend on the wrong fix.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Make Your Store Look Like Your Brand</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call, show us your store and your change list, and get an exact price and timeline before any work begins.
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
