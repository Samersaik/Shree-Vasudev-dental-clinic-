import React from 'react';
import { motion } from 'motion/react';

export default function BeforeAfter() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <span className="h-px w-8 bg-clinic-cyan"></span>
             <span className="text-clinic-cyan uppercase tracking-widest text-sm font-semibold">Transformations</span>
             <span className="h-px w-8 bg-clinic-cyan"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium">
            Real Results. <br/>
            <span className="text-clinic-silver font-light">Beautiful Smiles.</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          {/* Image Container */}
          <div className="relative rounded-3xl overflow-hidden group shadow-2xl shadow-black/50 max-w-2xl w-full border border-white/10">
             <img 
               src="https://lh3.googleusercontent.com/p/AF1QipP4WdUNnzuPgjyMM72kxgzzLRgAllF65392tdnn=w203-h360-k-no" 
               alt="Smile Transformation" 
               className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700 ease-in-out bg-clinic-bg" 
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
