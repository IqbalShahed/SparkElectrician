import React, { useState } from 'react';
import { Power, ShieldAlert, Plus, Minus, ChevronRight } from 'lucide-react';

const ElectricianInfo = () => {
  const [openIdx, setOpenIdx] = useState(1);
  
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <p className="text-yellow-600 font-bold uppercase text-xs md:text-sm mb-2">THE BEST & QUALIFIED</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-6">Electrician In Singapore</h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            Whether you need light repair or want to remodel your entire home with electrical work, we can help you. Contact our team with a quick phone call to get the best electrician service in Singapore is recognized by our customers as the best company in providing <span className="text-yellow-600 font-bold">Whole House Wiring & ReWiring Services Singapore</span> electrical services in Singapore. We provide reliable and fast electrical service solution in Singapore. We have a dedicated team and certified electricians.
          </p>
          <button className="text-yellow-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs md:text-sm border-b-2 border-yellow-500 pb-1">
            Get More Help <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="space-y-4">
          {[
            { title: "POWER SOLUTIONS", icon: <Power size={18} className="text-yellow-600" />, content: "We provide comprehensive power solutions for residential and commercial properties, ensuring safety and efficiency in every installation." },
            { title: "EMERGENCY REPAIR", icon: <ShieldAlert size={18} className="text-yellow-600" />, content: "We will come to your home and diagnose the problem quickly. If a repair is the best option, we'll provide a transparent quote and fix it on the spot." }
          ].map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex justify-between items-center p-4 md:p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-black text-[#1a1a1a] uppercase text-xs md:text-sm">{item.title}</span>
                </div>
                {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              {openIdx === idx && (
                <div className="p-4 md:p-6 bg-white text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-200">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ElectricianInfo;
