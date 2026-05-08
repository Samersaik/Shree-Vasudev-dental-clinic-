/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="font-sans antialiased text-white bg-clinic-bg selection:bg-clinic-cyan selection:text-clinic-bg min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Appointment />
      </main>
      <Footer />
      <WhatsAppWidget />
      
      {/* Animated Glowing Cursor placeholder for visual completeness, a real implementation would use Framer Motion and mouse events, but for performance and mobile issues, we'll keep it pure JS-free globally unless specifically requested for interactivity, the glowing CSS gives enough atmosphere. */}
    </div>
  );
}
