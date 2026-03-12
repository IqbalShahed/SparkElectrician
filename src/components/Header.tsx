import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Header = React.memo(() => (
  <div className="bg-white py-4 px-4 border-b border-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between items-center gap-6">
      <div className="flex items-center">
        <div className="text-3xl md:text-4xl font-black italic text-[#003399] flex items-center">
          Spark<span className="text-yellow-500 ml-1">Electrician</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-50 p-2 rounded-full hidden sm:block">
            <Mail size={20} className="text-yellow-600" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-[10px] uppercase font-bold">Mail Us On</p>
            <p className="font-bold text-xs md:text-sm">hello@sparkelectrician.com.sg</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-yellow-50 p-2 rounded-full hidden sm:block">
            <Phone size={20} className="text-yellow-600" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-gray-500 text-[10px] uppercase font-bold">24/7 Hours Working</p>
            <p className="font-bold text-xs md:text-sm">CALL: +880 1846079096</p>
          </div>
        </div>
        <button className="bg-[#003399] text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-blue-800 transition-colors uppercase text-[10px] md:text-xs tracking-wider w-full sm:w-auto">
          Call Now
        </button>
      </div>
    </div>
  </div>
));

Header.displayName = 'Header';

export default Header;
