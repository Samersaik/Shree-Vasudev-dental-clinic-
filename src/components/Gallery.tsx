import React from 'react';
import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=800&fit=crop", aspect: "aspect-[3/4]", title: "Reception" },
    { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop", aspect: "aspect-[3/2]", title: "Treatment Room" },
    { url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=600&fit=crop", aspect: "aspect-square", title: "Advanced Equipment" },
    { url: "https://images.pexels.com/photos/3845554/pexels-photo-3845554.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop", aspect: "aspect-square", title: "Dental Chair Setup" },
    { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=800&fit=crop", aspect: "aspect-[3/4]", title: "Interior" }
  ];

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <span className="h-px w-8 bg-clinic-cyan"></span>
             <span className="text-clinic-cyan uppercase tracking-widest text-sm font-semibold">Clinic Tour</span>
             <span className="h-px w-8 bg-clinic-cyan"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
            Inside <span className="text-clinic-silver font-light">Our Clinic</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer w-full inline-block ${img.aspect}`}
            >
              <div className="absolute inset-0 bg-clinic-bg/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out filter brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-clinic-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="text-white font-medium text-lg tracking-wide">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
