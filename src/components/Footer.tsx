import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 relative border-t border-white/10 bg-[#02050a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-clinic-cyan/10 border border-clinic-cyan flex items-center justify-center">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-clinic-cyan">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 6 5 6 9c0 3 2 5.5 2 8 0 1.5-1 3-1 4a1 1 0 001 1h4a1 1 0 001-1c0-1.5 1-3 1-5 0-2.5 2-5 2-8 0-4-2-7-6-7z"/>
                 </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm leading-tight tracking-wide">SHREE VASUDEV</span>
                <span className="text-[10px] text-clinic-cyan font-medium tracking-widest uppercase">Dental Clinic</span>
              </div>
            </a>
            <p className="text-clinic-silver/70 font-light text-sm mb-6 max-w-xs leading-relaxed">
              Premium Multispeciality Dental Clinic & Implant Center providing painless and advanced dental care in Ahmedabad.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Dr. Jaivik', 'Our Services', 'Patient Reviews', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-clinic-silver/80 hover:text-clinic-cyan font-light text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Top Treatments</h4>
            <ul className="space-y-3">
              {['Dental Implants', 'Smile Designing', 'Root Canal Treatment', 'Teeth Whitening', 'Braces & Aligners'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-clinic-silver/80 hover:text-clinic-cyan font-light text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="space-y-3 text-sm text-clinic-silver/80 font-light">
              <p>📍 Shahibaug, Ahmedabad 380004</p>
              <p>📞 +91 79906 12151</p>
              <p>⏰ Mon - Sat: 9 AM - 9 PM</p>
            </div>
            
            {/* Socials placeholder */}
            <div className="flex gap-4 mt-6">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-clinic-cyan hover:border-clinic-cyan hover:text-clinic-bg transition-colors text-white">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-[1px] opacity-70"></div>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-clinic-silver/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Shree Vasudev Multispeciality Dental Clinic. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs text-clinic-silver/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
