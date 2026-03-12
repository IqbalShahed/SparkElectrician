import React from 'react';
import { ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = React.memo(() => (
  <footer className="bg-[#1a1a1a] text-white pt-12 md:pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
      <div>
        <div className="text-3xl md:text-4xl font-black italic text-white flex items-center mb-6 md:mb-8">
          Spark<span className="text-yellow-500 ml-1">Electrician</span>
        </div>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 md:mb-12 font-medium">
          SparkElectrician is one of the companies that operates smart electricity. Our company comprises of team leaders who are qualified electricians and they each possess a minimum of 10 years of experience.
        </p>
        <h5 className="font-black mb-2 uppercase text-base md:text-lg tracking-tight">Explore Us</h5>
        <div className="h-1 w-12 bg-yellow-500 mb-6 md:mb-8"></div>
        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-400">
          <li className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition-colors font-medium">
            <ChevronRight size={16} className="text-gray-500" /> About Us
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition-colors font-medium">
            <ChevronRight size={16} className="text-gray-500" /> Certificate
          </li>
        </ul>
      </div>
      
      <div>
        <h5 className="font-black mb-2 uppercase text-base md:text-lg tracking-tight">Important Links</h5>
        <div className="h-1 w-12 bg-yellow-500 mb-6 md:mb-8"></div>
        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-400">
          {[
            'Services', 
            'Whole House Re-Wiring', 
            'Light & Fan Installation', 
            'Switches & Power Point Installation', 
            'Fault Finding (Trouble Shoot)', 
            'LEW Licensing & Endorsement', 
            'Electrical Trouble Shooting', 
            'ceiling light installation', 
            'Emergency Electrician Services', 
            'Electrical Repair and Replacement'
          ].map((link, idx) => (
            <li key={idx} className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition-colors font-medium">
              <ChevronRight size={16} className="text-gray-500" /> {link}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h5 className="font-black mb-2 uppercase text-base md:text-lg tracking-tight">Subscribe To Newsletter</h5>
        <div className="h-1 w-12 bg-yellow-500 mb-6 md:mb-8"></div>
        <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed font-medium">Subscribe to our newsletter to receive exclusive information</p>
        <form className="space-y-4 md:space-y-6">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-4 md:p-5 rounded bg-[#222] border border-white/5 outline-none focus:border-yellow-500 transition-colors text-white text-xs md:text-sm" 
          />
          <button className="bg-yellow-500 text-black px-8 py-4 md:py-5 rounded font-black hover:bg-yellow-600 transition-colors uppercase text-base md:text-lg w-full tracking-tighter">
            Submit Now
          </button>
        </form>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-gray-500 text-[10px] md:text-xs text-center md:text-left">© 2026 SparkElectrician Design Developed by Afran Shahed</p>
      <div className="flex gap-6">
        <Facebook size={16} className="text-gray-500 hover:text-yellow-500 cursor-pointer" />
        <Twitter size={16} className="text-gray-500 hover:text-yellow-500 cursor-pointer" />
        <Instagram size={16} className="text-gray-500 hover:text-yellow-500 cursor-pointer" />
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
