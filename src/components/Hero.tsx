import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    image: "https://i.pinimg.com/1200x/25/45/24/25452485ec2409e704223ade94588e56.jpg",
    title: "Emergency Electrical Services",
    subtitle: "Outstanding service Fair rate Quality Work"
  },
  {
    image: "https://i.pinimg.com/1200x/3a/a7/91/3aa79103b6fa4eb567e9e45640852fd9.jpg",
    title: "Expert Residential Solutions",
    subtitle: "Safe, reliable, and certified electricians at your door"
  },
  {
    image: "https://i.pinimg.com/1200x/a5/3f/4e/a53f4e6efbd4c658a1a56d71cdd95ffa.jpg",
    title: "Commercial Power Experts",
    subtitle: "Powering your business with professional efficiency"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[800px] xl:h-[650px] flex items-center overflow-hidden py-12 xl:py-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt={`Hero Slide ${currentSlide + 1}`} 
            className="w-full h-full object-cover brightness-[0.3] md:brightness-50"
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full px-4 relative z-10 grid xl:grid-cols-2 gap-12 items-center">
        <div className="text-white text-center xl:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-black mb-4 text-yellow-500 uppercase tracking-tighter leading-none">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 font-medium italic opacity-90">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-4">
            <button className="bg-yellow-500 text-black px-10 py-4 rounded font-black hover:bg-yellow-600 transition-colors uppercase tracking-widest text-sm">
              Call Now
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded font-bold hover:bg-white/20 transition-colors uppercase tracking-widest border border-white/30 text-sm">
              Our Services
            </button>
          </div>
          
          <div className="flex justify-center xl:justify-start gap-2 mt-12">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 transition-all duration-300 ${currentSlide === idx ? 'w-12 bg-yellow-500' : 'w-6 bg-white/30'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md p-4 md:p-8 rounded-2xl border border-white/20 max-w-md mx-auto xl:ml-auto shadow-2xl w-full"
        >
          <h3 className="text-white text-lg md:text-2xl font-black mb-4 md:mb-6 text-center italic uppercase tracking-wider">Get A Free Quote</h3>
          <form className="space-y-3 md:space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 md:p-4 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-xs md:text-sm" />
            <input type="text" placeholder="Your Number" className="w-full p-3 md:p-4 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-xs md:text-sm" />
            <select className="w-full p-3 md:p-4 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-yellow-500 transition-all appearance-none text-xs md:text-sm">
              <option>Select Your Issue</option>
              <option>Electrical Repair</option>
              <option>HDB Rewiring</option>
              <option>Fan Installation</option>
            </select>
            <button className="w-full bg-yellow-500 text-black font-black py-3 md:py-4 rounded-lg hover:bg-yellow-600 transition-colors uppercase tracking-widest shadow-lg text-xs md:text-sm">
              Submit Request
            </button>
            <div className="text-center text-white mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10">
              <p className="text-[10px] opacity-80 uppercase font-bold tracking-widest mb-1">Emergency 24/7 Hotline</p>
              <p className="text-xl md:text-3xl font-black text-yellow-500">+880 1846079096</p>
            </div>
          </form>
        </motion.div>
      </div>
      
      {/* Slider Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors hidden xl:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors hidden xl:block"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
};

export default Hero;
