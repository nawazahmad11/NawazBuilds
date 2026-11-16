import { useState } from "react";
import { HelpCircle, ChevronDown, ArrowRight, ClipboardCheck, CheckCircle2, Circle, Gauge } from "lucide-react";
import toolData from "../../data/tool-content.json";

interface CheckGroup {
  title: string;
  checks: string[];
}

const GROUPS: CheckGroup[] = [
  {
    title: "Speed and Performance",
    checks: [
      "My homepage loads fast on a phone connection",
      "My product images are compressed and in a modern format",
      "I have uninstalled every app I no longer use",
      "My homepage has no heavy autoplay video slowing it down",
      "My theme is a current Online Store 2.0 theme",
    ],
  },
  {
    title: "Product Pages",
    checks: [
      "Every product has more than one clear photo",
      "Descriptions explain benefits, not only features and specs",
      "Price, variants and delivery info are visible without scrolling on mobile",
      "Product pages show reviews or other proof",
      "Product pages suggest related products or a next step",
    ],
  },
  {
    title: "Trust and Clarity",
    checks: [
      "My contact details are easy to find",
      "Shipping and returns info is linked from the footer and product pages",
      "An About page explains who is behind the store",
      "There is no placeholder or sample text anywhere on the store",
      "Privacy, terms and refund policy pages all exist",
    ],
  },
  {
    title: "Checkout and Mobile",
    checks: [
      "I placed a test order in the last 30 days",
      "Guest checkout works without forcing an account",
      "Shipping costs are clear before the checkout starts",
      "Buy buttons are easy to tap on a phone",
      "The abandoned checkout email flow is switched on",
    ],
  },
];

const TOTAL = GROUPS.reduce((n, g) => n + g.checks.length, 0);

function verdictFor(score: number): string {
  if (score >= 17) return "Strong store. The basics are covered, and the gains now come from testing and refinement rather than repairs.";
  if (score >= 12) return "A good base with real gaps. The unchecked items below are your fix list, in the order most stores should tackle them.";
  if (score >= 7) return "Money is leaking. Several basics that decide whether a visitor buys are missing, and each one is fixable.";
  return "Start with the foundations. Work through this list top to bottom, or have the store checked properly from the inside.";
}

const StoreChecker = () => {
  const [checked, setChecked] = useState<boolean[]>(Array(TOTAL).fill(false));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (flatIndex: number) => {
    setChecked((prev) => prev.map((v, i) => (i === flatIndex ? !v : v)));
  };

  const score = checked.filter(Boolean).length;
  const pct = Math.round((score / TOTAL) * 100);

  const missing: string[] = [];
  let flat = 0;
  GROUPS.forEach((g) => {
    g.checks.forEach((c) => {
      if (!checked[flat]) missing.push(c);
      flat++;
    });
  });

  const activeToolId = "shopify-store-checker";
  const content = (toolData as any)[activeToolId];

  let runningIndex = -1;

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-[32px] shadow-2xl overflow-hidden">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase">
            Shopify <span className="text-[#f9a825]">Store</span> Checker
          </h2>
          <p className="text-white/70 text-[10px] font-black uppercase tracking-[4px]">20 Checks. One Honest Score.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* CHECKLIST */}
          <div className="space-y-6">
            {GROUPS.map((group) => (
              <div key={group.title} className="bg-white/[0.02] p-6 rounded-3xl border border-white/5">
                <h3 className="text-white font-black text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
                  <ClipboardCheck size={14} className="text-[#f9a825]" /> {group.title}
                </h3>
                <div className="space-y-2">
                  {group.checks.map((check) => {
                    runningIndex++;
                    const idx = runningIndex;
                    const isOn = checked[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() => toggle(idx)}
                        className={`w-full flex items-start gap-3 text-left p-3.5 rounded-2xl border transition-all duration-200 ${isOn ? "bg-[#f9a825]/10 border-[#f9a825]/40" : "bg-white/[0.02] border-white/5 hover:border-white/15"}`}
                      >
                        {isOn
                          ? <CheckCircle2 size={18} className="text-[#f9a825] shrink-0 mt-0.5" />
                          : <Circle size={18} className="text-white/30 shrink-0 mt-0.5" />}
                        <span className={`text-sm leading-snug ${isOn ? "text-white" : "text-white/60"}`}>{check}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* SCORE PANEL */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[32px] lg:sticky lg:top-8">
              <p className="text-[#f9a825] text-[10px] font-black uppercase tracking-[3px] mb-8 flex items-center gap-2">
                <Gauge size={14} /> Your Store Score
              </p>

              <div className="text-center mb-8">
                <h5 className="text-6xl font-black text-white tracking-tighter">{score}<span className="text-white/30 text-3xl"> / {TOTAL}</span></h5>
                <p className="text-[#f9a825] font-black uppercase tracking-widest text-xs mt-3">{pct}% of the basics covered</p>
              </div>

              <div className="h-5 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/5 p-0.5 mb-8">
                <div
                  style={{ width: `${pct}%` }}
                  className="h-full bg-[#f9a825] rounded-full transition-all duration-700 ease-out shadow-[0_0_20px_rgba(249,168,37,0.4)]"
                ></div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-8">{verdictFor(score)}</p>

              {missing.length > 0 && (
                <div className="border-t border-white/5 pt-6">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest mb-4">Fix first, in this order</p>
                  <ul className="space-y-2.5">
                    {missing.slice(0, 5).map((m, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/55 leading-snug">
                        <span className="text-[#f9a825] font-black">{i + 1}.</span> {m}
                      </li>
                    ))}
                  </ul>
                  {missing.length > 5 && (
                    <p className="text-white/35 text-xs mt-4">Plus {missing.length - 5} more below in the checklist.</p>
                  )}
                </div>
              )}

              <div className="border-t border-white/5 pt-6 mt-8">
                <p className="text-white/60 text-sm leading-relaxed mb-5">This checker covers what you can see from the outside. A full store audit also goes inside: theme code health, app conflicts, checkout tested end to end, and every finding ranked by what it costs you in sales.</p>
                <a href="/services/shopify-store-audit" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#f9a825] hover:bg-[#e0951d] text-black font-black uppercase tracking-widest text-xs rounded-2xl transition-all">
                  See the Store Audit <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DYNAMIC ARTICLE SECTION */}
      {content && (
        <div className="max-w-4xl mx-auto mt-24 px-6 pb-24">
          <div className="mb-16 border-l-4 border-[#f9a825] pl-8">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">{content.title}</h2>
            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">{content.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {content.features?.map((f: any, i: number) => (
              <div key={i} className="p-8 bg-[#0d0d0d] border border-white/5 rounded-[32px] hover:border-[#f9a825]/30 transition-all group">
                <h3 className="text-[#f9a825] font-black uppercase text-[10px] tracking-[3px] mb-4 flex items-center gap-2">
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /> {f.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <HelpCircle className="text-[#f9a825]" size={32} />
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {content.faqs?.map((faq: any, i: number) => (
                <div key={i} className={`group overflow-hidden bg-white/[0.02] border rounded-2xl transition-all duration-300 ${activeIndex === i ? "border-[#f9a825]/40 bg-white/[0.04]" : "border-white/5"}`}>
                  <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="w-full p-6 flex items-center justify-between text-left outline-none">
                    <h4 className={`font-bold uppercase text-sm tracking-wide transition-colors ${activeIndex === i ? "text-[#f9a825]" : "text-white"}`}>Q: {faq.q}</h4>
                    <ChevronDown size={18} className={`text-[#f9a825] transition-transform duration-300 ${activeIndex === i ? "rotate-180" : "rotate-0"}`} />
                  </button>
                  <div className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-white/70 text-sm leading-relaxed border-l-2 border-[#f9a825]/20 pl-4">A: {faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreChecker;
