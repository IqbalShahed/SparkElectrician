import React from 'react';
import { Lightbulb, Zap, PlugZap } from 'lucide-react';
import { motion } from 'motion/react';

const pricingPackages = [
  { rooms: "3 ROOMS", save: "20%", price: "$1820", icon: <Lightbulb size={48} className="text-yellow-600" /> },
  { rooms: "4 ROOMS", save: "30%", price: "$2250", icon: <Zap size={48} className="text-yellow-600" /> },
  { rooms: "5 ROOMS", save: "25%", price: "$2850", icon: <PlugZap size={48} className="text-yellow-600" /> }
];

const Pricing = () => (
  <section className="py-12 md:py-20 bg-gray-900 relative">
    <div className="absolute inset-0 opacity-10">
      <img 
        src="https://images.unsplash.com/photo-1558389186-438424b00a32?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover" 
        alt="Pricing Background" 
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-yellow-500 mb-4 px-4">Best Price For HDB Rewiring Packages</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-white"></div>
          <p className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">3, 4 & 5 Rooms</p>
          <div className="h-px w-8 bg-white"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {pricingPackages.map((pkg, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 md:p-10 rounded-2xl text-center shadow-2xl transform hover:-translate-y-2 transition-all"
          >
            <div className="mb-4 md:mb-6 flex justify-center">
              <div className="bg-yellow-50 p-3 md:p-4 rounded-full">
                {React.cloneElement(pkg.icon as React.ReactElement<any>, { size: 48 })}
              </div>
            </div>
            <p className="text-yellow-600 font-black uppercase text-xs md:text-sm mb-2">HDB FLAT - {pkg.rooms}</p>
            <h3 className="text-3xl md:text-5xl font-black text-[#1a1a1a] mb-4">SAVE {pkg.save}</h3>
            <div className="space-y-1 mb-6 md:mb-8">
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase">Now Offering</p>
              <p className="text-xl md:text-2xl font-black text-[#1a1a1a]">{pkg.price}</p>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase">Only</p>
            </div>
            <button className="w-full bg-yellow-500 text-black font-black py-3 md:py-4 rounded hover:bg-yellow-600 transition-colors uppercase text-xs md:text-sm">
              Click To More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
