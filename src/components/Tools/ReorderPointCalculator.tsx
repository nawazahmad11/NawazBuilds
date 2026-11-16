import { useState } from "react";
import { HelpCircle, ChevronDown, Calculator, ArrowRight, PieChart, Info, TrendingUp, RefreshCcw } from "lucide-react";
import toolData from "../../data/tool-content.json";

const ReorderPointCalculator = () => {
  const [dailySales, setDailySales] = useState<number>(0);
  const [leadTime, setLeadTime] = useState<number>(0);
  const [safetyDays, setSafetyDays] = useState<number>(3);
  const [currentStock, setCurrentStock] = useState<number>(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // --- CALCULATION LOGIC ---
  // Reorder point = expected sales during the lead time + safety stock.
  const safetyStock = dailySales * safetyDays;
  const leadTimeDemand = dailySales * leadTime;
  const reorderPoint = leadTimeDemand + safetyStock;

  const daysLeft = dailySales > 0 ? currentStock / dailySales : 0;
  const orderInDays = daysLeft - leadTime;

  const status = currentStock <= 0
    ? "Enter your current stock to see when to order."
    : orderInDays <= 0
      ? "Order now. At the current sales rate, stock runs out before a new delivery would arrive."
      : orderInDays <= safetyDays
        ? "Order very soon. You are inside the safety window."
        : "Stock is healthy. You have time before the next order is due.";

  const activeToolId = "reorder-point-calculator";
  const content = (toolData as any)[activeToolId];

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:border-[#f9a825] outline-none transition-all placeholder:text-white/25";
  const labelCls = "text-white/60 text-[10px] font-bold uppercase ml-2 tracking-widest";

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-[32px] shadow-2xl overflow-hidden">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase">
            Reorder <span className="text-[#f9a825]">Point</span> Calculator
          </h2>
          <p className="text-white/70 text-[10px] font-black uppercase tracking-[4px]">Never Sell Out of a Winner</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* INPUT SECTION */}
          <div className="space-y-4 bg-white/[0.02] p-6 rounded-3xl border border-white/5">
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <Calculator size={14} className="text-[#f9a825]" /> Stock Numbers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={labelCls}>Average Daily Sales (units)</label>
                <input type="number" step="0.1" onChange={(e) => setDailySales(Number(e.target.value))} className={inputCls} placeholder="0" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Supplier Lead Time (days)</label>
                <input type="number" onChange={(e) => setLeadTime(Number(e.target.value))} className={inputCls} placeholder="0" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Safety Cover (days)</label>
                <input type="number" value={safetyDays} onChange={(e) => setSafetyDays(Number(e.target.value))} className={inputCls} placeholder="3" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Current Stock (units)</label>
                <input type="number" onChange={(e) => setCurrentStock(Number(e.target.value))} className={inputCls} placeholder="0" />
              </div>
            </div>
            <p className="text-white/40 text-[11px] leading-relaxed ml-2 pt-2">Use the last 30 days of orders for the daily sales average. Safety cover is your cushion for late deliveries and surprise demand; 3 to 7 days is typical, more when a supplier is unreliable.</p>
          </div>

          {/* RESULTS SECTION */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[32px] flex flex-col justify-between h-full">
              <div>
                <p className="text-[#f9a825] text-[10px] font-black uppercase tracking-[3px] mb-8 flex items-center gap-2">
                  <PieChart size={14} /> When to Reorder
                </p>

                <div className="text-center mb-10">
                  <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-2">Reorder Point</p>
                  <h5 className="text-6xl font-black text-white tracking-tighter">{Math.ceil(reorderPoint)}<span className="text-white/30 text-3xl"> units</span></h5>
                  <p className="text-white/40 text-xs mt-3 leading-relaxed max-w-xs mx-auto">When stock on hand falls to this number, place the order the same day.</p>
                </div>

                <p className={`text-sm leading-relaxed text-center font-bold ${orderInDays <= 0 && currentStock > 0 ? "text-red-400" : "text-white/60"}`}>{status}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12">
                 <div className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
                    <p className="text-[9px] font-black text-[#f9a825] uppercase tracking-widest mb-1">Safety Stock</p>
                    <h5 className="text-3xl font-black text-white tracking-tighter">{Math.ceil(safetyStock)} units</h5>
                 </div>
                 <div className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
                    <p className="text-[9px] font-black text-white/70 uppercase tracking-widest mb-1">Days of Stock Left</p>
                    <h5 className="text-3xl font-black text-white tracking-tighter">{daysLeft > 0 ? daysLeft.toFixed(1) : "0"}</h5>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM QUICK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#f9a825]/10 flex items-center justify-center text-[#f9a825]"><RefreshCcw size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/88 uppercase tracking-widest">The Formula</p>
                    <p className="text-sm font-bold text-white/60 leading-snug">Daily sales x lead time, plus safety stock. Simple on purpose.</p>
                </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60"><Info size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/80 uppercase tracking-widest">Sales During Lead Time</p>
                    <p className="text-xl font-black text-white/60 tracking-tighter">{Math.ceil(leadTimeDemand)} units</p>
                </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60"><TrendingUp size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/88 uppercase tracking-widest">Order Within</p>
                    <p className="text-xl font-black text-white/60 tracking-tighter">{currentStock > 0 ? (orderInDays > 0 ? `${orderInDays.toFixed(1)} days` : "Now") : "n/a"}</p>
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

export default ReorderPointCalculator;
