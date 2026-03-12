import React from 'react';
import { ShieldCheck, Zap, PlugZap, Clock } from 'lucide-react';

const featureItems = [
  { icon: <ShieldCheck className="text-yellow-600" />, title: "Fully Insured", desc: "EMA Licensed" },
  { icon: <Zap className="text-yellow-600" />, title: "Power Solutions", desc: "100% Guaranteed" },
  { icon: <PlugZap className="text-yellow-600" />, title: "Equipped with", desc: "All Latest Tools" },
  { icon: <Clock className="text-yellow-600" />, title: "24/7 Hours", desc: "Emergency Service" }
];

const Features = React.memo(() => (
  <section className="py-12 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
        {featureItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 md:gap-6 p-4 md:p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-yellow-50 p-3 md:p-4 rounded-lg shrink-0">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] md:text-sm text-gray-500 font-bold uppercase">{item.title}</p>
              <h4 className="text-lg md:text-2xl font-black text-[#1a1a1a]">{item.desc}</h4>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 lg:mt-0">
        <div className="relative mb-8">
          <img 
            src="https://i.pinimg.com/736x/34/39/a3/3439a399197cacd3625ad51bdc90091f.jpg" 
            alt="Experience" 
            className="rounded-2xl shadow-2xl w-full"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-yellow-500 text-white p-4 md:p-8 rounded-2xl shadow-xl text-center">
            <span className="text-4xl md:text-6xl font-black block">10</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Years of Experience</span>
          </div>
        </div>
        <p className="text-yellow-600 font-bold uppercase text-xs md:text-sm mb-2">About SparkElectrician</p>
        <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-6">Emergency Electrician Singapore</h2>
        <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
          We provide emergency electrician services and 24 hours Electrical Services in Singapore, we will Resolve Your Electrical problems in a short time with affordable pricing we offers all types of electrical services including emergency electrician singapore. SparkElectrician is one of the companies that operates smart electricity. Our company comprises of team leaders who are qualified electricians and they each possess a minimum of 10 years of experience.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
          <button className="bg-yellow-500 text-black px-8 py-4 rounded font-black hover:bg-yellow-600 transition-colors uppercase text-xs md:text-sm w-full sm:w-auto">
            More About Us
          </button>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase">For Emergency Fixing or Appointment</span>
            <span className="text-xl md:text-2xl font-black text-[#1a1a1a]">+880 1846079096</span>
          </div>
        </div>
      </div>
    </div>
  </section>
));

Features.displayName = 'Features';

export default Features;
