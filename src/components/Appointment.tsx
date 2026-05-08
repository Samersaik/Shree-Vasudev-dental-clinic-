import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Phone, Send } from 'lucide-react';

export default function Appointment() {
  return (
    <section id="appointment" className="py-24 relative overflow-hidden bg-clinic-blue/50 border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-clinic-cyan/5 blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
               <span className="h-px w-8 bg-clinic-cyan"></span>
               <span className="text-clinic-cyan uppercase tracking-widest text-sm font-semibold">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">
              Book Your <br/>
              <span className="text-clinic-silver font-light">Consultation.</span>
            </h2>
            
            <p className="text-clinic-silver font-light text-lg mb-12 max-w-md">
              Take the first step towards a healthier, beautiful smile. Fill out the form or contact us directly via WhatsApp.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-clinic-cyan">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone & WhatsApp</h4>
                  <a href="tel:+917990612151" className="text-clinic-silver hover:text-clinic-cyan transition-colors font-light">+91 79906 12151</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-clinic-cyan">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Clinic Address</h4>
                  <p className="text-clinic-silver font-light max-w-xs leading-relaxed">
                    Shree Vasudev, Near Mira Park Society, Ghoda Camp Road, Near Ghevar Circle, Shahibaug, Ahmedabad, Gujarat 380004
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 text-clinic-cyan">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Clinic Timings</h4>
                  <p className="text-clinic-silver font-light">Mon - Sat: 9:00 AM – 1:00 PM <br/> Evening: 4:00 PM – 9:00 PM</p>
                  <p className="text-rose-400 text-sm font-medium mt-1">Emergency Consultation Available</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-[2.5rem] relative"
          >
            <h3 className="text-2xl font-display font-medium mb-8">Request Appointment</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-clinic-silver mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-clinic-cyan transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-clinic-silver mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-clinic-cyan transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-clinic-silver mb-2">Treatment Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-clinic-cyan transition-colors appearance-none">
                    <option className="bg-clinic-bg text-white">General Checkup</option>
                    <option className="bg-clinic-bg text-white">Dental Implants</option>
                    <option className="bg-clinic-bg text-white">Root Canal</option>
                    <option className="bg-clinic-bg text-white">Cosmetic Dentistry</option>
                    <option className="bg-clinic-bg text-white">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-clinic-silver mb-2">Preferred Time</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-clinic-cyan transition-colors appearance-none">
                    <option className="bg-clinic-bg text-white">Morning (9 AM - 1 PM)</option>
                    <option className="bg-clinic-bg text-white">Evening (4 PM - 9 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-clinic-silver mb-2">Message (Optional)</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-clinic-cyan transition-colors resize-none" placeholder="Briefly describe your dental issue..."></textarea>
              </div>

              <button className="w-full bg-clinic-cyan text-clinic-bg font-bold uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300">
                Submit Request <Send size={18} />
              </button>
              
              <p className="text-center text-xs text-clinic-silver/60">Our team will contact you shortly to confirm your appointment.</p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
