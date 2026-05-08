import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, Award, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-clinic-cyan/5 blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-clinic-light-blue blur-[100px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel w-fit border-clinic-cyan/30 text-clinic-cyan text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clinic-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-clinic-cyan"></span>
              </span>
              Shahibaug's Premier Dental Destination
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] tracking-tight">
              Advanced <span className="text-gradient-cyan italic">Dental Care</span> With Precision & Comfort
            </h1>
            
            <p className="text-lg text-clinic-silver/80 max-w-xl font-light leading-relaxed">
              Premium Multispeciality Dental Clinic & Implant Center in Ahmedabad. Experience painless dentistry by Dr. Jaivik Patel.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#appointment" className="group relative px-8 py-4 bg-white text-clinic-bg rounded-full font-bold text-sm uppercase tracking-wide overflow-hidden transition-transform active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar size={18} /> Book Appointment
                </span>
                <div className="absolute inset-0 h-full w-0 bg-clinic-cyan transition-all duration-300 ease-out group-hover:w-full"></div>
              </a>
              
              <a href="https://wa.me/917990612151" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 glass-panel border-white/10 rounded-full font-semibold text-sm hover:bg-clinic-light-blue hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Now
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-clinic-bg bg-clinic-light-blue flex items-center justify-center text-xs overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-clinic-bg bg-clinic-cyan flex items-center justify-center text-clinic-bg text-xs font-bold z-10">
                  4.9+
                </div>
              </div>
              <div className="text-sm font-medium text-clinic-silver">
                <span className="text-white font-bold block">Top Rated</span>
                on Google Reviews
              </div>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end"
          >
            {/* Main 3D placeholder element */}
            <div className="relative w-full max-w-md aspect-square rounded-full flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-tr from-clinic-cyan/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
               <img 
                 src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600&h=600" 
                 alt="Modern Dental Clinic" 
                 className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl shadow-clinic-cyan/20 border border-white/10"
                 style={{ maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)' }}
               />
               
               {/* Floating Badges */}
               <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-20 glass-panel p-4 rounded-2xl flex items-center gap-3 z-20"
               >
                 <div className="p-2 bg-clinic-cyan/20 rounded-lg text-clinic-cyan">
                   <Award size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-clinic-silver">Experience</p>
                   <p className="font-bold">9+ Years</p>
                 </div>
               </motion.div>

               <motion.div 
                  animate={{ y: [15, -15, 15] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-4 bottom-32 glass-panel p-4 rounded-2xl flex items-center gap-3 z-20"
               >
                 <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                   <ShieldCheck size={24} />
                 </div>
                 <div>
                   <p className="font-bold">Implant Specialist</p>
                   <p className="text-xs text-clinic-silver">Advanced Tech</p>
                 </div>
               </motion.div>

               <motion.div 
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute left-10 bottom-10 glass-panel p-3 rounded-2xl flex items-center gap-3 z-20"
               >
                 <div className="p-2 bg-rose-500/20 rounded-lg text-rose-400">
                   <HeartPulse size={20} />
                 </div>
                 <p className="font-bold text-sm">Painless Treatments</p>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
