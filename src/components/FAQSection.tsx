import { ChevronDown, ShoppingBag, Zap, ShieldCheck, Layout, Clock } from "lucide-react";

const faqs = [
  {
    question: "Do you build Shopify stores from scratch or use templates?",
    answer:
      "I specialize in both! I can customize premium themes or build a fully custom 'Liquid' store from scratch. Every store I build is optimized for conversions and mobile-first experience.",
    icon: <Layout className="w-4 h-4" />,
  },
  {
    question: "Will my store be fast and SEO friendly?",
    answer:
      "Absolutely. I guarantee a 90+ speed score on Google PageSpeed Insights. I handle image optimization, code minification, and essential SEO structure to ensure you rank higher.",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    question: "Do I need to buy the Shopify theme separately?",
    answer:
      "Yes, the theme license fee is paid directly to the theme developer. However, I can help you choose the best theme for your niche, saving you from wasting money on 'heavy' or outdated themes.",
    icon: <ShoppingBag className="w-4 h-4" />,
  },
  {
    question: "Can you integrate custom payment gateways?",
    answer:
      "Yes, I can set up Stripe, PayPal, and local gateways like 2Checkout or COD (Cash on Delivery) configurations to ensure your customers have a seamless checkout experience.",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    question: "How long does a full store design take?",
    answer:
      "A professional, high-converting store typically takes 13-15 days. This includes product research, custom design, app integrations, and rigorous testing before launch.",
    icon: <Clock className="w-4 h-4" />,
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-black/20 overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-4xl font-black text-white leading-tight">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>
              <p className="text-muted-foreground mt-6 text-lg font-light">
                Can&apos;t find what you&apos;re looking for? <br />
                <a
                  href="https://wa.me/923059552222"
                  className="text-primary font-bold hover:underline decoration-primary/50"
                  rel="noopener noreferrer"
                >
                  Contact me on WhatsApp
                </a>
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group glass-card border border-white/5 overflow-hidden transition-colors duration-300 open:border-primary/30"
              >
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 p-6 text-left [&::-webkit-details-marker]:hidden">
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary transition-colors group-open:bg-primary group-open:text-black">
                      {faq.icon}
                    </div>
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-white/45 transition-transform duration-300 group-open:rotate-180 group-open:text-primary"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-white/5 px-6 pb-6 pt-2">
                  <p className="text-muted-foreground font-light leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
