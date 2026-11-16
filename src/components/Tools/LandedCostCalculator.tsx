import { useState } from "react";
import { HelpCircle, ChevronDown, Calculator, ArrowRight, PieChart, Info, TrendingUp, Truck } from "lucide-react";
import toolData from "../../data/tool-content.json";

const LandedCostCalculator = () => {
  const [unitCost, setUnitCost] = useState<number>(0);
  const [units, setUnits] = useState<number>(0);
  const [freight, setFreight] = useState<number>(0);
  const [dutyPct, setDutyPct] = useState<number>(0);
  const [otherFees, setOtherFees] = useState<number>(0);
  const [targetMargin, setTargetMargin] = useState<number>(40);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // --- CALCULATION LOGIC ---
  // Duty is charged on the goods value (units x unit cost) in most setups.
  const goodsValue = unitCost * units;
  const duty = (goodsValue * dutyPct) / 100;
  const totalLanded = goodsValue + freight + duty + otherFees;
  const landedPerUnit = units > 0 ? totalLanded / units : 0;
  const extraPerUnit = units > 0 ? (freight + duty + otherFees) / units : 0;

  // Suggested price: the price at which the landed cost leaves the target
  // margin. Price = landed cost / (1 - margin/100).
  const suggestedPrice = targetMargin > 0 && targetMargin < 100 ? landedPerUnit / (1 - targetMargin / 100) : 0;

  const goodsShare = totalLanded > 0 ? (goodsValue / totalLanded) * 100 : 0;

  const activeToolId = "landed-cost-calculator";
  const content = (toolData as any)[activeToolId];

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:border-[#f9a825] outline-none transition-all placeholder:text-white/25";
  const labelCls = "text-white/60 text-[10px] font-bold uppercase ml-2 tracking-widest";

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-[32px] shadow-2xl overflow-hidden">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase">
            Landed <span className="text-[#f9a825]">Cost</span> Calculator
          </h2>
          <p className="text-white/70 text-[10px] font-black uppercase tracking-[4px]">What a Unit Really Costs You</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* INPUT SECTION */}
          <div className="space-y-4 bg-white/[0.02] p-6 rounded-3xl border border-white/5">
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
              <Calculator size={14} className="text-[#f9a825]" /> Shipment Numbers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className={labelCls}>Product Cost Per Unit ($)</label>
                <input type="number" onChange={(e) => setUnitCost(Number(e.target.value))} className={inputCls} placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Units in Shipment</label>
                <input type="number" onChange={(e) => setUnits(Number(e.target.value))} className={inputCls} placeholder="0" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Freight Total ($)</label>
                <input type="number" onChange={(e) => setFreight(Number(e.target.value))} className={inputCls} placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className={labelCls}>Duty (% of goods value)</label>
                <input type="number" step="0.1" onChange={(e) => setDutyPct(Number(e.target.value))} className={inputCls} placeholder="0" />
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <label className={labelCls}>Other Fees Total ($)</label>
              <input type="number" onChange={(e) => setOtherFees(Number(e.target.value))} className={inputCls} placeholder="Insurance, brokerage, port fees..." />
            </div>
            <div className="space-y-2 pt-2">
              <label className={labelCls}>Target Margin (%)</label>
              <input type="number" value={targetMargin} onChange={(e) => setTargetMargin(Number(e.target.value))} className={inputCls} placeholder="40" />
              <p className="text-white/40 text-[11px] leading-relaxed ml-2">Used only for the suggested selling price. Payment fees and ad costs come on top, so most stores leave room above their true target here.</p>
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[32px] flex flex-col justify-between h-full">
              <div>
                <p className="text-[#f9a825] text-[10px] font-black uppercase tracking-[3px] mb-8 flex items-center gap-2">
                  <PieChart size={14} /> True Cost Per Unit
                </p>

                <div className="text-center mb-10">
                  <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-2">Landed Cost Per Unit</p>
                  <h5 className="text-6xl font-black text-white tracking-tighter">${landedPerUnit.toFixed(2)}</h5>
                  <p className="text-white/40 text-xs mt-3 leading-relaxed max-w-xs mx-auto">Against a product cost of ${unitCost.toFixed(2)}. The difference is what freight, duty and fees quietly add.</p>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-black uppercase mb-3">
                    <span className="text-white/70 tracking-widest">Goods Share of Total</span>
                    <span className="text-[#f9a825]">{goodsShare.toFixed(0)}%</span>
                  </div>
                  <div className="h-5 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/5 p-0.5">
                    <div
                      style={{ width: `${goodsShare}%` }}
                      className="h-full bg-[#f9a825] rounded-full transition-all duration-700 ease-out shadow-[0_0_20px_rgba(249,168,37,0.4)]"
                    ></div>
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/5 pt-6 mt-8">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest"><span className="text-white/50">Goods value</span><span className="text-white">${goodsValue.toFixed(2)}</span></div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest"><span className="text-white/50">Freight</span><span className="text-white">${freight.toFixed(2)}</span></div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest"><span className="text-white/50">Duty</span><span className="text-white">${duty.toFixed(2)}</span></div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest"><span className="text-[#f9a825]">Total landed cost</span><span className="text-[#f9a825]">${totalLanded.toFixed(2)}</span></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12">
                 <div className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
                    <p className="text-[9px] font-black text-[#f9a825] uppercase tracking-widest mb-1">Extra Per Unit</p>
                    <h5 className="text-3xl font-black text-white tracking-tighter">+${extraPerUnit.toFixed(2)}</h5>
                 </div>
                 <div className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col justify-center">
                    <p className="text-[9px] font-black text-white/70 uppercase tracking-widest mb-1">Suggested Price</p>
                    <h5 className="text-3xl font-black text-white tracking-tighter">${suggestedPrice.toFixed(2)}</h5>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM QUICK STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#f9a825]/10 flex items-center justify-center text-[#f9a825]"><Truck size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/88 uppercase tracking-widest">Why it matters</p>
                    <p className="text-sm font-bold text-white/60 leading-snug">Pricing from product cost alone is how stores sell at a loss without knowing.</p>
                </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60"><Info size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/80 uppercase tracking-widest">Duty Paid</p>
                    <p className="text-xl font-black text-white/60 tracking-tighter">${duty.toFixed(2)}</p>
                </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[24px] flex items-center gap-4 hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60"><TrendingUp size={20}/></div>
                <div>
                    <p className="text-[9px] font-black text-white/88 uppercase tracking-widest">Margin at Suggested Price</p>
                    <p className="text-xl font-black text-white/60 tracking-tighter">{targetMargin}%</p>
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

export default LandedCostCalculator;
