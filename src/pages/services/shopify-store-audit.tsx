import React, { useState } from 'react';

export default function ShopifyStoreAudit() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "How much does a Shopify store audit cost?",
            a: "The price depends on your store size and catalog. Book a strategy call and you get an exact price before any work begins. The audit is a one time service with no monthly commitment attached."
        },
        {
            q: "How long does an audit take?",
            a: "Most audits are completed within a few business days of access being granted. You get a confirmed delivery date when you book, and the report arrives on that date."
        },
        {
            q: "Do you need my password to audit my store?",
            a: "No. You invite us as a collaborator with limited permissions, which is Shopify's safe way to grant access. You stay in control, and you can revoke access at any time."
        },
        {
            q: "Will you fix the problems you find?",
            a: "If you ask us to, yes, quoted separately after you have read the report. There is no obligation. The report is written so any competent developer can work from it."
        },
        {
            q: "What is the difference between an audit and maintenance?",
            a: "An audit is a one time diagnosis. Maintenance is ongoing care: updates, checks and small fixes every month. Many stores start with an audit, fix the critical list, then move to maintenance to stay healthy."
        },
        {
            q: "My store was built by someone else. Can you still audit it?",
            a: "Yes. Most stores we audit were built by other developers or by the owner. A fresh pair of expert eyes is the whole point of the exercise."
        }
    ];

    const checks = [
        "Speed on your home, collection and product pages, on mobile first",
        "Product pages: images, descriptions, trust signals, reviews and the buy path",
        "Checkout flow, tested with real test orders from cart to payment",
        "Mobile experience, since most of your traffic shops on a phone",
        "App review: what each app does, what it costs you in speed, and what can be removed",
        "Theme health: outdated code, leftover patches and update risks",
        "SEO basics: titles, headings, duplicate content and broken links",
        "Analytics and tracking setup, so you can trust the numbers you see"
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
                            Audit Slots Open
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <section className="relative overflow-hidden pt-16 pb-16 max-w-7xl mx-auto px-6">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs text-amber-500 font-medium tracking-wide uppercase mb-6 shadow-sm">
                        One Time Store Health Check
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                        Shopify <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Store Audit</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
                        A Shopify store audit is a full health check of your store. We review your speed, product pages, checkout, mobile experience, apps and SEO basics, then hand you a fix list ranked by what is most likely costing you sales.
                    </p>
                    <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10">
                        You do not need to be technical to use the report. Every finding is written in plain language, with what is wrong, why it matters and what fixing it involves. You can hand the same list to any developer, including us.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/strategy-call" className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center">
                            Book Your Audit Call
                        </a>
                        <a href="#checks" className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium rounded-xl border border-zinc-800 transition-all duration-200 text-center">
                            See What We Check
                        </a>
                    </div>
                </div>
            </section>

            {/* What we check */}
            <section id="checks" className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What does a Shopify store audit check?</h2>
                    <p className="text-zinc-400 leading-relaxed mb-10">
                        The audit covers the parts of your store that decide whether a visitor becomes a buyer. Nothing is checked just to make the report longer.
                    </p>
                    <ul className="space-y-4">
                        {checks.map((item, i) => (
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

            {/* What you receive */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What do you receive after the audit?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>You receive a written report, not a sales pitch. It has three parts, and the order matters.</p>
                    <p>First, the critical list. These are problems that directly block sales, such as a broken checkout step or a product page that fails on mobile. Second, the improvement list, ranked by expected impact. Third, the ignore list: things that look like problems but are not worth your money.</p>
                    <p>That third part is unusual, and it is deliberate. An audit that tells you everything is urgent is just a quote in disguise. Ours tells you what to fix, what to fix later and what to leave alone.</p>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How does the audit process work?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>You give us collaborator access to your store. We never need your password, and you can remove the access the moment the audit is done.</p>
                        <p>We then review the store the way a customer uses it, on a real phone and a desktop. Test orders go through checkout. Speed tests run on the pages that make you money, not only the homepage.</p>
                        <p>You receive the report with a delivery date confirmed when you book. If you want, we walk through it together on a call, finding by finding, until every line makes sense to you.</p>
                    </div>
                </div>
            </section>

            {/* Limits */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What can an audit not do?</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>An audit finds problems. It does not fix them, and it cannot guarantee more sales. Anyone who promises a revenue number from an audit alone is guessing with your money.</p>
                    <p>What it does guarantee is clarity. Most store owners we talk to are guessing about why sales are flat. After an audit, you stop guessing. You have a ranked list, real numbers behind each item, and a clear choice about what to do next.</p>
                    <p>Fixing is a separate step, and it is your choice who does it. Many owners hand the list to us, and those fixes often become the start of <a href="/services/shopify-maintenance-services" className="text-amber-500 hover:underline">monthly maintenance</a>. Others take the report to their own developer. Both are fine.</p>
                </div>
            </section>

            {/* Who should get one */}
            <section className="py-16 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Who should get a Shopify store audit?</h2>
                    <div className="space-y-5 text-zinc-400 leading-relaxed">
                        <p>Get an audit if your store gets traffic but sales do not match it. That gap is exactly what an audit explains. Get one before a redesign too, so you rebuild what is broken instead of repainting everything.</p>
                        <p>Get one if your store has grown by adding apps for two years and nobody has reviewed the pile. App bloat is the most common hidden problem we expect to find in stores like that.</p>
                        <p>Skip the audit if your store is brand new with no traffic yet. You do not have a conversion problem yet, you have a traffic problem, and an audit is the wrong tool. Our article on <a href="/blog/high-converting-product-pages" className="text-amber-500 hover:underline">product pages that convert</a> is a better starting point at that stage.</p>
                    </div>
                </div>
            </section>

            {/* Trust */}
            <section className="py-16 max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why owners trust this audit</h2>
                <div className="space-y-5 text-zinc-400 leading-relaxed">
                    <p>The person auditing your store also builds stores. Our portfolio includes a <a href="/case-studies/jewelry-store" className="text-amber-500 hover:underline">jewelry store</a>, a <a href="/case-studies/clothing-store" className="text-amber-500 hover:underline">clothing store</a> and fashion builds like <a href="/case-studies/Saha" className="text-amber-500 hover:underline">Saha</a>, where product presentation and mobile speed decide the sale.</p>
                    <p>That builder's eye changes what an audit catches. Automated tools flag everything and rank nothing. A developer who has rebuilt checkout flows and product pages knows which three problems on the list are quietly eating your revenue, and which twenty can wait. Read more about that thinking in our post on <a href="/blog/why-shopify-stores-fail" className="text-amber-500 hover:underline">why Shopify stores fail</a>.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Find Out What Is Costing You Sales</h2>
                    <p className="text-zinc-400 text-sm mb-8">
                        Book a strategy call and get an exact audit price for your store before any work begins. No monthly commitment attached.
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
