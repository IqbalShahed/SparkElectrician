import React from 'react';
import { HardHat, User, ThumbsUp, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const processSteps = [
  { 
    num: "01", 
    title: "Book For Service", 
    icon: <HardHat size={64} strokeWidth={1} />,
    desc: "Book a call on our website or +880 1846079096" 
  },
  { 
    num: "02", 
    title: "Meet Our Man", 
    icon: <User size={64} strokeWidth={1} />,
    desc: "Our professional & expert staff will meet you in 24 hrs" 
  },
  { 
    num: "03", 
    title: "Fix a Problem", 
    icon: <ThumbsUp size={64} strokeWidth={1} />,
    desc: "He fix your all the problems with good quality" 
  },
  { 
    num: "04", 
    title: "Make Payment", 
    icon: <DollarSign size={64} strokeWidth={1} />,
    desc: "Pay your payment after your satisfaction" 
  }
];

const Process = () => (
  <section className="py-12 md:py-24 bg-yellow-500">
    <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-20">
      <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-4 md:mb-6 leading-tight md:leading-none">
        Four Easiest Ways To Build
      </h2>
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
        <div className="h-[2px] w-8 md:w-12 bg-white"></div>
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
        <p className="text-white font-black uppercase text-sm md:text-lg tracking-tight">Working Process</p>
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
        <div className="h-[2px] w-8 md:w-12 bg-white"></div>
      </div>
      <p className="text-[#1a1a1a] max-w-2xl mx-auto font-medium text-base md:text-lg px-4">
        Our Company can carry out projects which require the highest standards of finish and finesse.
      </p>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {processSteps.map((step, idx) => (
        <motion.div 
          key={idx} 
          className="group cursor-default"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          whileHover="hover"
          variants={{
            hover: { y: -15 }
          }}
        >
          <div className="relative mb-6 md:mb-8">
            <motion.div 
              className="aspect-square bg-[#1a1a1a] flex items-center justify-center rounded-sm shadow-xl relative overflow-hidden"
              whileHover={{ backgroundColor: "#222" }}
            >
              <motion.div 
                className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {React.cloneElement(step.icon as React.ReactElement<any>, { size: 64 })}
              </motion.div>
              
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-yellow-500 to-transparent transition-opacity duration-500" />
            </motion.div>
            
            <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10">
              <motion.div 
                className="absolute inset-0 bg-white shadow-lg"
                initial={{ rotate: 45 }}
                variants={{
                  hover: { rotate: 225 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <span className="relative font-black text-[#1a1a1a] text-base md:text-lg group-hover:text-[#1a1a1a] transition-colors duration-300 pointer-events-none">
                {step.num}
              </span>
            </div>
          </div>
          
          <motion.h4 
            className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4 uppercase leading-tight tracking-tighter group-hover:text-[#1a1a1a] transition-colors duration-300"
          >
            {step.title}
          </motion.h4>
          <p className="text-[#1a1a1a] text-xs md:text-sm font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Process;
