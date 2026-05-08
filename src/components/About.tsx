import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, GraduationCap, Stethoscope } from 'lucide-react';

export default function About() {
  const highlights = [
    "Patient-first approach with personalized treatment plans",
    "Expertise in cosmetic, restorative, and implant dentistry",
    "Modern painless dentistry techniques",
    "Trusted by hundreds of local families in Ahmedabad",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-clinic-blue/30 backdrop-blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Doctor Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated Glow Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-clinic-cyan to-blue-600 rounded-[2.5rem] blur opacity-30 animate-pulse"></div>
            
            <div className="relative glass-panel rounded-[2rem] p-8 border border-white/10 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full border-4 border-clinic-cyan/30 overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-clinic-cyan/20 to-clinic-light-blue z-10 mix-blend-overlay"></div>
                 {/* Silhouette Placeholder */}
                 <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400" 
                    alt="Dr. Jaivik Patel" 
                    className="w-full h-full object-cover filter contrast-125 saturate-50"
                 />
              </div>
              
              <h2 className="text-3xl font-display font-medium text-white mb-2">Dr. Jaivik Patel</h2>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1"><GraduationCap size={14}/> BDS, PGDHM</span>
                <span className="px-3 py-1 bg-clinic-cyan/10 text-clinic-cyan rounded-full text-xs font-semibold tracking-wider flex items-center gap-1"><Stethoscope size={14}/> Dental Surgeon</span>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
              
              <div className="flex justify-around w-full">
                <div>
                  <p className="text-2xl font-bold text-white">9+</p>
                  <p className="text-xs text-clinic-silver uppercase tracking-wider">Years Exp.</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">5k+</p>
                  <p className="text-xs text-clinic-silver uppercase tracking-wider">Smiles Fixed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-clinic-cyan"></span>
              <span className="text-clinic-cyan uppercase tracking-widest text-sm font-semibold">Meet The Doctor</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-medium leading-tight">
              Experienced Care, <br/>
              <span className="text-clinic-silver font-light">Gentle Touch.</span>
            </h2>
            
            <p className="text-clinic-silver text-lg font-light leading-relaxed">
              Dr. Jaivik Patel brings over 9 years of dedicated experience to Shree Vasudev Multispeciality Dental Clinic. Our philosophy blends advanced dental technology with a compassionate, patient-first approach to ensure every visit is comfortable and stress-free.
            </p>

            <ul className="space-y-4 mt-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-clinic-silver font-light">
                  <CheckCircle2 className="w-6 h-6 text-clinic-cyan shrink-0" />
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
               <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Signature_Placeholder.png" alt="Signature" className="h-12 brightness-0 invert opacity-50 block" style={{filter: 'invert(1) opacity(0.5) brightness(2)'}} />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
