import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, Phone, Mail, User, MessageSquare, PenTool } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const ThankYou = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Direct Inquiry");

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    hasStore: "",
    revenueGoal: "",
    readyToInvest: "",
    message: "", // Nayi field state mein
  });

  // URL se package capture karna
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("package");
    if (plan) {
      setSelectedPlan(decodeURIComponent(plan));
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source") || params.get("ref") || "direct";

    // Supabase Insert - Ensure Columns match your SQL
    const { error } = await supabase.from("ShopifyTable").insert({
      full_name: form.name,
      email: form.email,
      whatsapp: form.whatsapp,
      has_store: form.hasStore,
      revenue_goal: form.revenueGoal,
      ready_to_invest: form.readyToInvest,
      package_selected: selectedPlan, // Naya Column
      customer_message: form.message,  // Naya Column
      source,
      funnel_step: "booking",
    });

    setLoading(false);

    if (error) {
      console.error("Supabase Error:", error);
      toast({
        title: "Something went wrong",
        description: "Please check your database or try again.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Strategy call booked! 🎉",
      description: "We'll reach out via WhatsApp within 24 hours.",
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-16">
        <motion.div
          className="glass-card p-10 text-center max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 check-green" />
          </div>
          <h2 className="text-2xl font-bold mb-3">You're All Set! 🎉</h2>
          <p className="text-muted-foreground mb-4">
            Your request for <span className="text-primary font-bold">{selectedPlan}</span> has been confirmed.
          </p>
          <div className="glass-card p-4 text-left text-sm">
            <p className="text-muted-foreground">
              <MessageSquare className="w-4 h-4 inline mr-1.5 check-green" />
              Expect a WhatsApp message from our growth strategist to finalize your call time.
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 sm:py-20 pt-28">
      <div className="section-container">
        <motion.div
          className="max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} custom={0} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-3 tracking-wider uppercase">
              <CheckCircle className="w-4 h-4" /> Final Step
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Book Your Shopify <span className="text-gradient-gold">Strategy Call</span>
            </h1>
            <p className="text-muted-foreground">
              Interested in: <span className="text-white font-bold">{selectedPlan}</span>
            </p>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            custom={1}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">WhatsApp Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>

            {/* MESSAGE / REQUIREMENTS (Nayi Field) */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">Tell us about your brand/goals</label>
              <div className="relative">
                <PenTool className="absolute left-3 top-3 w-4 h-4 text-white/40" />
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all min-h-[100px]"
                  placeholder="E.g. I want to scale my clothing brand or I need a new store from scratch..."
                />
              </div>
            </div>

            {/* Has Store */}
            <div>
              <label className="text-sm font-medium mb-2 block">Existing Shopify store?</label>
              <div className="flex gap-3">
                {["Yes", "No"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleChange("hasStore", opt)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                      form.hasStore === opt
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-white/10 bg-secondary/30 text-muted-foreground hover:border-white/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue Goal */}
            <div>
              <label className="text-sm font-medium mb-2 block">Monthly Revenue Goal?</label>
              <div className="grid grid-cols-3 gap-3">
                {["$5K", "$10K+", "$50K+"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleChange("revenueGoal", opt)}
                    className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${
                      form.revenueGoal === opt
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-white/10 bg-secondary/30 text-muted-foreground hover:border-white/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Ready to invest */}
            <div>
              <label className="text-sm font-medium mb-2 block">Ready to invest in growth?</label>
              <div className="flex gap-3">
                {["Yes", "No"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleChange("readyToInvest", opt)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                      form.readyToInvest === opt
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-white/10 bg-secondary/30 text-muted-foreground hover:border-white/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="gradient-cta w-full py-4 rounded-lg text-base font-bold flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send className="w-5 h-5" /> {loading ? "Submitting..." : "Confirm My Strategy Call"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;