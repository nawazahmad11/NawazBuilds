import { useState } from "react";
import { HelpCircle, ChevronDown, Calculator, ArrowRight, PieChart, Info, TrendingUp, BarChart3 } from "lucide-react";
import toolData from "../../data/tool-content.json";

// Shopify Payments card rates and third party transaction fees by plan.
// US defaults shown first. Every rate stays editable, because rates differ
// by country and change over time. Source a store should check against:
// Shopify's own pricing page for its country.
const PLAN_RATES: Record<string, { label: string; processingPct: number; processingFixed: number; transactionPct: number }> = {
  basic: { label: "Basic", processingPct: 2.9, processingFixed: 0.3, transactionPct: 2 },
  grow: { label: "Grow (Shopify plan)", processingPct: 2.7, processingFixed: 0.3, transactionPct: 1 },
  advanced: { label: "Advanced", processingPct: 2.5, processingFixed: 0.3, transactionPct: 0.5 },
  plus: { label: "Shopify Plus", processingPct: 2.15, processingFixed: 0.3, transactionPct: 0.2 },
};

const ProfitCalculator = () => {
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [productCost, setProductCost] = useState<number>(0);
  const [adSpend, setAdSpend] = useState<number>(0);
  const [shipping, setShipping] = useState<number>(0);
  const [other, setOther] = useState<number>(0);

  const [plan, setPlan] = useState<string>("basic");
  const [processingPct, setProcessingPct] = useState<number>(PLAN_RATES.basic.processingPct);
  const [processingFixed, setProcessingFixed] = useState<number>(PLAN_RATES.basic.processingFixed);
  const [transactionPct, setTransactionPct] = useState<number>(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePlanChange = (key: string) => {
    setPlan(key);
    const rates = PLAN_RATES[key];
    if (rates) {
      setProcessingPct(rates.processingPct);
      setProcessingFixed(rates.processingFixed);
    }
  };

  // --- FEE LOGIC ---
  // Processing fee applies to the amount the customer pays.
  // Transaction fee applies only when a store uses an external payment
  // gateway instead of Shopify Payments, so it defaults to 0.
  const processingFee = sellingPrice > 0 ? (sellingPrice * processingPct) / 100 + processingFixed : 0;
  const transactionFee = sellingPrice > 0 ? (sellingPrice * transactionPct) / 100 : 0;
  const shopifyFees = processingFee + transactionFee;

  // --- CALCULATION LOGIC ---
  const totalCost = productCost + adSpend + shipping + other + shopifyFees;
  const profit = sellingPrice - totalCost;
  const margin = sellingPrice > 0 ? (profit / sellingPrice) * 100 : 0;

  // ROAS: Revenue divided by Ad Spend (e.g., 5.0x)
  const roas = adSpend > 0 ? (sellingPrice / adSpend) : 0;

  // ROI: (Profit / Total Cost) * 100
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;

  // Visual Bars Logic
  const costPercentage = sellingPrice > 0 ? Math.min((totalCost / sellingPrice) * 100, 100) : 0;
  const profitPercentage = sellingPrice > 0 ? Math.max(0, (profit / sellingPrice) * 100) : 0;

  const activeToolId = "profit-calculator";
  const content = (toolData as any)[activeToolId];

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:border-[#f9a825] outline-none transition-all placeholder:text-white/25";
  const labelCls = "text-white/60 text-[10px] font-bold uppercase ml-2 tracking-widest";

  return (
    <div className="w-full min-h-screen bg-black">
      {/* MAIN CALCULATOR UI */}
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-[32px] shadow-2xl overflow-hidden">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase">
            Shopify <span className="text-[#f9a825]">Profit</span> Calculator
          </h2>
          <p className="text-white/70 text-[10px] font-black uppercase tracking-[4px]">Fees, Margin and ROI in One Place</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* INPUT SECTION */}
          <div className="space-y-4 bg-white/[0.02] p-6 rounded-3xl border border-white/5">
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <Calculator size={14} className="text-[#f9a825]" /> Expense Breakdown
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={labelCls}>Selling Price ($)</label>
                <input type="number" onChange={(e) => setSellingPrice(Number(e.target.value))} className={inputCls} placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Product Cost ($)</label>
                <input type="number" onChange={(e) => setProductCost(Number(e.target.value))} className={inputCls} placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Ad Spend ($)</label>
                <input type="number" onChange={(e) => setAdSpend(Number(e.target.value))} className={inputCls} placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Shipping ($)</label>
                <input type="number" onChange={(e) => setShipping(Number(e.target.value))} className={inputCls} placeholder="0.00" />
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <label className={labelCls}>Other Costs ($)</label>
              <input type="number" onChange={(e) => setOther(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#f9a825] outline-none transition-all placeholder:text-white/25" placeholder="Apps, packaging, taxes..." />
            </div>

            {/* SHOPIFY FEES */}
            <div className="pt-4 mt-2 border-t border-white/5 space-y-4">
              <h3 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <Calculator size={14} className="text-[#f9a825]" /> Shopify Fees
              </h3>
              <div className="space-y-2">
                <label className={labelCls}>Your Shopify Plan</label>
                <select value={plan} onChange={(e) => handlePlanChange(e.target.value)} className={inputCls}>
                  {Object.entries(PLAN_RATES).map(([key, r]) => (
                    <option key={key} value={key} className="bg-[#0a0a0a] text-white">{r.label}</option>
                  ))}
                </select>
                <p className="text-white/40 text-[11px] leading-relaxed ml-2">Rates below are US defaults for Shopify Payments. Check your own plan rates in Settings, then Payments, and edit any number to match your store.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className={labelCls}>Card Rate (%)</label>
                  <input type="number" step="0.01" value={processingPct} onChange={(e) => setProcessingPct(Number(e.target.value))} className={inputCls} placeholder="2.9" />
                </div>
                <div className="space-y-2">
                  <label className={labelCls}>Per Order ($)</label>
                  <input type="number" step="0.01" value={processingFixed} onChange={(e) => setProcessingFixed(Number(e.target.value))} className={inputCls} placeholder="0.30" />
                </div>
                <div className="space-y-2">
                  <label className={labelCls}>Gateway Fee (%)</label>
                  <input type="number" step="0.1" value={transactionPct} onChange={(e) => setTransactionPct(Number(e.target.value))} className={inputCls} placeholder="0" />
                </div>
              </div>
              <p className="text-white/40 text-[11px] leading-relaxed ml-2">Gateway fee is 0 with Shopify Payments. If you use an external gateway, set it to your plan rate: Basic {PLAN_RATES.basic.transactionPct}%, Grow {PLAN_RATES.grow.transactionPct}%, Advanced {PLAN_RATES.advanced.transactionPct}%, Plus {PLAN_RATES.plus.transactionPct}%.</p>
            </div>
          </div>

          {/* VISUAL CHART SECTION */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[32px] flex flex-col justify-between h-full">
              <div>
                <p className="text-[#f9a825] text-[10px] font-black uppercase tracking-[3px] mb-8 flex items-center gap-2">
                  <PieChart size={14} /> Revenue Analysis
                </p>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase mb-3">
                      <span className="text-white/70 tracking-widest">Profit vs Expenses</span>
                      <span className="text-[#f9a825]">{profitPercentage.toFixed(0)}% Margin</span>
                    </div>
                    <div className="h-5 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/5 p-0.5">
                      <div
                        style={{ width: `${costPercentage}%` }}
                        className="h-full bg-red-600/40 rounded-l-full transition-all duration-700 ease-out"
                      ></div>
                      <div
                        style={{ width: `${profitPercentage}%` }}
                        className="h-full bg-[#f9a825] rounded-r-full transition-all duration-700 ease-out shadow-[0_0_20px_rgba(249,168,37,0.4)]"
                      ></div>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-red-600/40"></div><span className="text-[9px] text-white/70 uppercase font-black tracking-widest">Total Costs</span></div>
                      <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#f9a825]"></div><span className="text-[9px] text-white/70 uppercase font-black tracking-widest">Net Profit</span></div>
                    </div>
                  </div>

                  {/* FEE BREAKDOWN */}
                  <div className="space-y-2 border-t border-white/5 pt-6">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest"><span className="text-white/50">Card processing fee</span><span className="text-white">${processingFee.toFixed(2)}</span></div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest"><span className="text-white/50">Gateway transaction fee</span><span className="text-white">${transactionFee.toFixed(2)}</span></div>
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest"><span className="text-[#f9a825]">Total Shopify fees</span><span className="text-[#f9a825]">${shopifyFees.toFixed(2)}</span></div>
                  </div>
                </div>
              </div>

              {/* DUAL STATS: ROAS & ROI */}
              <div className="grid grid-cols-2 gap-4 mt-12">
                 <div className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
                    <p className="text-[9px] font-black text-[#f9a825] uppercase tracking-widest mb-1">ROAS (Ad Scale)</p>
                    <h5 className="text-3xl font-black text-white tracking-tighter">
                      {roas.toFixed(1)}x
                    </h5>
                 </div>
                 <div className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
                    <p className="text-[9px] font-black text-white/70 uppercase tracking-widest mb-1">Net ROI %</p>
                    <h5 className={`text-3xl font-black tracking-tighter ${roi >= 0 ? 'text-white' : 'text-red-500'}`}>
                      {roi.toFixed(1)}%
                    </h5>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM QUICK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#f9a825]/10 flex items-center justify-center text-[#f9a825]"><Info size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/88 uppercase tracking-widest">Net Profit ($)</p>
                    <p className={`text-xl font-black text-white/60 tracking-tighter ${profit >= 0 ? 'text-white' : 'text-red-500'}`}>
                      ${profit.toFixed(2)}
                    </p>
                </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60"><BarChart3 size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/80 uppercase tracking-widest">Break-Even Point</p>
                    <p className="text-xl font-black text-white/60 tracking-tighter">${totalCost.toFixed(2)}</p>
                </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60"><TrendingUp size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/88 uppercase tracking-widest">Margin After Fees</p>
                    <p className="text-xl font-black text-white/60 tracking-tighter">{margin.toFixed(1)}%</p>
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

export default ProfitCalculator;
