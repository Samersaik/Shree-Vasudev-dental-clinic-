import React from 'react';
import { motion } from 'motion/react';
import { 
  Drill, Activity, Smile, Sparkles, 
  AlignRight, ActivitySquare, Zap, Target, 
  Scissors, RotateCw, Baby, HeartPulse, 
  Star, Box 
} from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Dental Implants', desc: 'Permanent replacement for missing teeth.', icon: Drill },
    { title: 'Root Canal Treatment', desc: 'Painless RCT to save infected teeth.', icon: Activity },
    { title: 'Smile Designing', desc: 'Custom digital smile makeovers.', icon: Smile },
    { title: 'Teeth Whitening', desc: 'Advanced laser teeth whitening.', icon: Sparkles },
    { title: 'Braces & Aligners', desc: 'Invisible aligners & traditional braces.', icon: AlignRight },
    { title: 'Wisdom Tooth Removal', desc: 'Painless surgical extractions.', icon: ActivitySquare },
    { title: 'Laser Dentistry', desc: 'Bloodless and painless laser treatments.', icon: Zap },
    { title: 'Dental Veneers', desc: 'Porcelain veneers for a perfect smile.', icon: Target },
    { title: 'Tooth Extraction', desc: 'Safe and gentle tooth removal.', icon: Scissors },
    { title: 'Full Mouth Rehab', desc: 'Complete restoration of oral function.', icon: RotateCw },
    { title: 'Kids Dentistry', desc: 'Friendly pediatric dental care.', icon: Baby },
    { title: 'Gum Treatments', desc: 'Advanced care for periodontal health.', icon: HeartPulse },
    { title: 'Cosmetic Dentistry', desc: 'Aesthetic enhancements for your teeth.', icon: Star },
    { title: 'Crowns & Bridges', desc: 'Durable caps and bridges.', icon: Box },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <span className="h-px w-8 bg-clinic-cyan"></span>
             <span className="text-clinic-cyan uppercase tracking-widest text-sm font-semibold">Our Expertise</span>
             <span className="h-px w-8 bg-clinic-cyan"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Premium <span className="text-clinic-silver font-light">Treatments</span>
          </h2>
          <p className="text-clinic-silver font-light text-lg">
            We offer comprehensive, multi-speciality dental care using state-of-the-art technology for painless and long-lasting results.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-2xl glass-panel border border-white/5 hover:border-clinic-cyan/30 transition-all duration-300 hover:-translate-y-2 hover:bg-clinic-blue/80 relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-clinic-cyan/0 to-clinic-cyan/0 group-hover:from-clinic-cyan/10 transition-colors duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-clinic-cyan/20 group-hover:border-clinic-cyan/50">
                    <Icon className="w-7 h-7 text-clinic-silver group-hover:text-clinic-cyan transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-clinic-silver/80 font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <a href="#appointment" className="inline-flex items-center text-xs font-semibold text-clinic-cyan uppercase tracking-wider group-hover:gap-2 transition-all">
                    Learn More <span className="text-lg leading-none ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">&rarr;</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
