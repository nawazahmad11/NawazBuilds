import { motion } from "framer-motion";
import LegalLayout from "../components/LegalLayout"; 

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 italic">Introduction</h2>
          <p className="text-white/60 leading-relaxed">
            Welcome to <span className="text-primary font-bold">Nawaz Builds</span>. I care about your privacy. This page tells you how I collect and use your data when you visit <span className="text-white">nawazbuilds.com</span>. Our goal is to provide the best Shopify store design and development services while keeping your information safe.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 p-8 rounded-[2rem]">
          <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Information I Collect</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Your Name", "Your Email Address", "Your Store Details", "Your Phone Number"].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="relative overflow-hidden p-8 border border-primary/20 bg-primary/5 rounded-[2rem]">
          <h2 className="text-2xl font-bold text-white mb-4 italic">Data Security</h2>
          <p className="text-white/60 relative z-10">
            Your trust is part of our <span className="text-primary font-black tracking-widest uppercase">E-E-A-T</span> (Expertise, Authoritativeness, Trustworthiness). I use high-security tools to protect your data.
          </p>
        </section>
      </motion.div>
    </LegalLayout>
  );
};

export default PrivacyPolicy;