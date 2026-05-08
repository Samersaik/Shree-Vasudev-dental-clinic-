import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Dr.', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Transformations', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-clinic-cyan/10 border border-clinic-cyan/30 flex items-center justify-center relative overflow-hidden group-hover:cyan-glow transition-all duration-300">
               {/* Abstract Tooth Icon */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-clinic-cyan">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 6 5 6 9c0 3 2 5.5 2 8 0 1.5-1 3-1 4a1 1 0 001 1h4a1 1 0 001-1c0-1.5 1-3 1-5 0-2.5 2-5 2-8 0-4-2-7-6-7z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 13v-1a2 2 0 014 0v1"/>
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-wide">SHREE VASUDEV</span>
              <span className="text-xs text-clinic-cyan font-medium tracking-widest uppercase">Dental Clinic</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-clinic-silver hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clinic-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#appointment"
              className="px-6 py-2.5 bg-clinic-light-blue border border-clinic-cyan/30 rounded-full text-sm font-semibold hover:bg-clinic-cyan hover:text-clinic-bg transition-all duration-300 hover:cyan-glow"
            >
              Book Consult
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-clinic-silver hover:text-white hover:pl-2 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full text-center py-3 bg-clinic-cyan text-clinic-bg rounded-xl font-bold"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
