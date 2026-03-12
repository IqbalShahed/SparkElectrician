import React from 'react';
import Counter from './Counter';

const statItems = [
  { num: "55+", label: "Projects Completed Successfully" },
  { num: "22+", label: "Professional Service Employee" },
  { num: "16+", label: "Our Happy Customers" },
  { num: "5+", label: "Average Rating By Customers" }
];

const Stats = React.memo(() => (
  <section className="py-12 md:py-20 bg-[#1a1a1a] text-white">
    <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-black mb-4">Achievements In Number</h2>
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-8 bg-yellow-500"></div>
        <p className="text-yellow-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">Fun Facts</p>
        <div className="h-px w-8 bg-yellow-500"></div>
      </div>
      <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base px-4">We are experts with many years of experience that can provide you with quality service at an affordable price.</p>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
      {statItems.map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-black text-yellow-500 block mb-2 md:mb-4">
            <Counter value={stat.num} />
          </span>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-300 px-2">{stat.label}</p>
        </div>
      ))}
    </div>
    <div className="text-center mt-12 md:mt-16">
      <button className="bg-yellow-500 text-black px-8 md:px-10 py-3 md:py-4 rounded font-black hover:bg-yellow-600 transition-colors uppercase text-xs md:text-sm">
        Call Now
      </button>
    </div>
  </section>
));

Stats.displayName = 'Stats';

export default Stats;
