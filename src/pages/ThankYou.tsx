import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, Phone, Mail, User, MessageSquare } from "lucide-react";

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    hasStore: "",
    revenueGoal: "",
    readyToInvest: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to Supabase
    console.log("Lead submitted:", { ...form, timestamp: new Date().toISOString(), source: "funnel", step: "booking" });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
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
            Your strategy call request has been confirmed. Our team will reach out via WhatsApp within 24 hours.
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
    <div className="min-h-screen bg-background py-12 sm:py-20">
      <div className="section-container">
        <motion.div
          className="max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} custom={0} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-3 tracking-wider uppercase">
              <CheckCircle className="w-4 h-4" /> Almost There
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Book Your 1-on-1 Shopify Growth{" "}
              <span className="text-gradient-gold">Strategy Call</span>
            </h1>
            <p className="text-muted-foreground">
              Fill in the details below so we can prepare a personalized growth plan for your brand.
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
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full bg-secondary/50 border border-border rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full bg-secondary/50 border border-border rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">WhatsApp Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  className="w-full bg-secondary/50 border border-border rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Has Store */}
            <div>
              <label className="text-sm font-medium mb-2 block">Do you have an existing Shopify store?</label>
              <div className="flex gap-3">
                {["Yes", "No"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleChange("hasStore", opt)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                      form.hasStore === opt
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-secondary/30 text-muted-foreground hover:border-muted-foreground"
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
                {["₹5 Lakh", "₹10 Lakh+", "₹50 Lakh+"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleChange("revenueGoal", opt)}
                    className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${
                      form.revenueGoal === opt
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-secondary/30 text-muted-foreground hover:border-muted-foreground"
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
                        : "border-border bg-secondary/30 text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="gradient-cta w-full py-4 rounded-lg text-base font-bold flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Confirm My Strategy Call
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Your information is 100% secure. We never share your data.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;
