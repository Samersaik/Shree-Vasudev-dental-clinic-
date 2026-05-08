import React from 'react';
import { motion } from 'motion/react';
import { Settings, Shield, Smile, UserCheck, DollarSign, Heart, PhoneCall, Home } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { title: "Advanced Technology", desc: "Top-tier diagnostic & treatment tools.", icon: Settings },
    { title: "Sterilized Equipment", desc: "100% infection control protocol.", icon: Shield },
    { title: "Gentle & Painless", desc: "Comfortable treatments guaranteed.", icon: Smile },
    { title: "Experienced Dentist", desc: "Expert care by Dr. Jaivik Patel.", icon: UserCheck },
    { title: "Affordable Care", desc: "Premium treatments that fit your budget.", icon: DollarSign },
    { title: "Personalized Attention", desc: "Bespoke treatment plans for you.", icon: Heart },
    { title: "Emergency Support", desc: "Immediate care when you need it.", icon: PhoneCall },
    { title: "Comfortable Environment", desc: "Relaxing, spa-like clinic ambiance.", icon: Home },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Why Choose <span className="text-gradient-cyan">Shree Vasudev?</span>
          </h2>
          <p className="text-clinic-silver font-light text-lg">
            We merge cutting-edge technology with compassionate care to deliver a dental experience unlike any other.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-clinic-cyan/10 flex items-center justify-center mb-4 text-clinic-cyan">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm md:text-base font-semibold mb-2">{reason.title}</h3>
                <p className="text-xs text-clinic-silver/70 font-light leading-relaxed">{reason.desc}</p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
