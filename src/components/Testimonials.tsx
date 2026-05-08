import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Bhai Patel",
      text: "Dr. Jaivik is extremely polite and professional. My root canal treatment was completely painless. The clinic is very clean and hygienic. Highly recommended!",
      highlight: "Root Canal Comfort"
    },
    {
      name: "Meena Ben Shah",
      text: "I was very scared of getting implants, but the entire process was so smooth and comfortable. The success of my implant has given me my confidence back.",
      highlight: "Implant Success"
    },
    {
      name: "Sanjay Desai",
      text: "Premium clinic with affordable treatment options. They explain the problem properly before starting any procedure. Best dentist in Shahibaug area.",
      highlight: "Affordable & Honest"
    },
    {
      name: "Daxesh Trivedi",
      text: "Very modern equipment and a truly painless experience. I brought my mother here for her dentures and she is very happy with the gentle care.",
      highlight: "Painless Treatment"
    },
    {
      name: "Bhavna Rajput",
      text: "The clinic environment is so calm it doesn't feel like a hospital. The staff is well trained and friendly. My smile designing was a huge success.",
      highlight: "Clean & Modern"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-clinic-light-blue/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <span className="h-px w-8 bg-clinic-cyan"></span>
               <span className="text-clinic-cyan uppercase tracking-widest text-sm font-semibold">Patient Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium">
              Trusted by <span className="text-clinic-silver font-light">Thousands.</span>
            </h2>
          </div>
          
          <div className="hidden md:flex flex-col items-end">
            <div className="flex gap-1 text-[#FFB800] mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <p className="text-sm font-semibold tracking-wider uppercase">4.9/5 on Google</p>
          </div>
        </div>

        <div className="flex overflow-x-auto pb-12 -mx-4 px-4 snap-x snap-mandatory hide-scroll gap-6">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[320px] max-w-[400px] snap-center glass-panel p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16" />
              
              <div className="inline-block px-3 py-1 bg-clinic-cyan/10 text-clinic-cyan rounded-full text-xs font-bold tracking-wider uppercase mb-6 relative z-10">
                {test.highlight}
              </div>
              
              <p className="text-clinic-silver font-light leading-relaxed mb-8 relative z-10 italic">
                "{test.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-clinic-cyan to-blue-600 flex items-center justify-center font-bold text-clinic-bg">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{test.name}</h4>
                  <div className="flex gap-0.5 text-[#FFB800] mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={12} />)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
