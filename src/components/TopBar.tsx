import React from 'react';
import { MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const TopBar = React.memo(() => (
  <div className="bg-[#1a1a1a] text-white py-2 px-4 text-xs hidden md:block">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex gap-6">
        <div className="hidden xl:flex items-center gap-2">
          <MapPin size={14} className="text-yellow-500" />
          <span>675C Yishun Ave 4, #03-808 FERN GROVE, Singapore 763675.</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-bold">NEED HELP?</span>
          <span>Call: +880 1846079096</span>
        </div>
      </div>
      <div className="flex gap-4">
        <Facebook size={14} className="hover:text-yellow-500 cursor-pointer" />
        <Twitter size={14} className="hover:text-yellow-500 cursor-pointer" />
        <Instagram size={14} className="hover:text-yellow-500 cursor-pointer" />
      </div>
    </div>
  </div>
));

TopBar.displayName = 'TopBar';

export default TopBar;
