import React, { useState, useEffect, useMemo } from 'react';
import { Settings, FileText, HardHat, Lightbulb, Clock, Wrench, Home, Users, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  { 
    img: "https://skelectrical.com.sg/images/resource/electrical-fault.jpg", 
    title: "Fault Finding (Trouble Shoot)", 
    icon: <Settings size={32} strokeWidth={1.5} />,
    desc: "SK Electrical our experienced electricians will help you with fault finding. Our team will initiate open communication and will respond immediately to your needs." 
  },
  { 
    img: "https://skelectrical.com.sg/images/resource/licenced-electrician.jpg", 
    title: "LEW Licensing & Endorsement", 
    icon: <FileText size={32} strokeWidth={1.5} />,
    desc: "A licensed Electrical Worker (LEW) refers to a competent person who is able to carry out electrical works to a competent person who is able to carry out electrical works.." 
  },
  { 
    img: "https://skelectrical.com.sg/wp-content/uploads/2022/08/electrical-troubleshooting.jpg", 
    title: "Electrical Trouble Shooting", 
    icon: <HardHat size={32} strokeWidth={1.5} />,
    desc: "Electrical troubleshooting is the process of analyzing the behavior or operation of a faulty electrical circuit to determine. Our team will respond immediately." 
  },
  { 
    img: "https://skelectrical.com.sg/wp-content/uploads/2022/08/ceiling-light-installation.jpg", 
    title: "Ceiling Light Installation", 
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
    desc: "Lighting is an essential part of all residential homes and business. If you are looking for the best expert electrician in Singapore." 
  },
  { 
    img: "https://skelectrical.com.sg/images/resource/emergency-electrician.jpg", 
    title: "Emergency Electrician", 
    icon: <Clock size={32} strokeWidth={1.5} />,
    desc: "SK Electrical Singapore operates an emergency electrician service and you can count on us for all electrical services." 
  },
  { 
    img: "https://skelectrical.com.sg/images/resource/electric-company.jpg", 
    title: "Repair And Replacement", 
    icon: <Wrench size={32} strokeWidth={1.5} />,
    desc: "At Electrical Services Singapore, we have experience in meeting all the needs of the industry and providing professional repair and alternative solutions." 
  },
  { 
    img: "https://skelectrical.com.sg/images/resource/whole-rewire.jpg", 
    title: "Whole House Re-Wiring", 
    icon: <Home size={32} strokeWidth={1.5} />,
    desc: "SparkElectrician, we offer a safe and high-quality whole home rewiring service that exceeds industry standards and customer expectations." 
  },
  { 
    img: "https://skelectrical.com.sg/images/resource/fan-install.jpg", 
    title: "Fan Installation", 
    icon: <Users size={32} strokeWidth={1.5} />,
    desc: "Let SparkElectrician do the light and fan installation for you. While many people do it on their own, they put themselves at risk." 
  },
  { 
    img: "https://skelectrical.com.sg/images/resource/electrical-switches.jpg", 
    title: "Switches & Power Point Installation", 
    icon: <LayoutDashboard size={32} strokeWidth={1.5} />,
    desc: "Our experienced electricians can swiftly handle your switches and power point installation requirements." 
  }
];

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = useMemo(() => {
    const s = [];
    for (let i = 0; i < services.length; i += itemsPerSlide) {
      s.push(services.slice(i, i + itemsPerSlide));
    }
    return s;
  }, [itemsPerSlide]);

  return (
    <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-20">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[2px] w-8 md:w-12 bg-[#1a1a1a]"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500"></div>
          <p className="text-[#1a1a1a] font-black uppercase text-sm md:text-lg tracking-tight">About Our Works</p>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500"></div>
          <div className="h-[2px] w-8 md:w-12 bg-[#1a1a1a]"></div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight leading-tight md:leading-none">
          We Are Residential & Commercial Electricians
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {slides.map((slide, slideIdx) => (
              <div key={slideIdx} className={`w-full flex-shrink-0 grid gap-8 md:gap-12 px-4 ${
                itemsPerSlide === 1 ? 'grid-cols-1' : itemsPerSlide === 2 ? 'grid-cols-2' : 'grid-cols-3'
              }`}>
                {slide.map((service, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group h-full flex flex-col pb-8"
                  >
                    <div className="h-64 md:h-72 overflow-hidden rounded-sm shadow-md z-0">
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx + slideIdx * itemsPerSlide}/800/600`;
                        }}
                      />
                    </div>
                    
                    <div className="relative z-10 -mt-16 md:-mt-20 mx-4 md:mx-6 bg-white p-6 md:p-8 shadow-xl flex flex-col flex-grow border-b-2 border-transparent group-hover:border-yellow-500 transition-colors">
                      <div className="absolute -top-6 left-6 bg-yellow-500 p-3 shadow-lg text-[#1a1a1a]">
                        {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                      </div>
                      <h4 className="text-xl md:text-2xl font-black mb-4 md:mb-6 mt-4 text-[#1a1a1a] leading-tight uppercase tracking-tighter">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium flex-grow">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentSlide === idx ? "w-8 bg-yellow-500" : "w-3 bg-[#1a1a1a]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
