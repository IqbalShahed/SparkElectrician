import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'Electrical Services', 'Plumbing Services', 'Aircon Services', 'HDB Rewiring Packages', 'Contact Us'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#f9a825] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex">
          {menuItems.map((item, idx) => (
            <li key={idx} className="group">
              <a href="#" className={`block px-6 py-4 text-sm font-bold uppercase transition-colors ${idx === 0 ? 'bg-[#1a1a1a] text-white' : 'text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex justify-between items-center py-3">
          <span className="font-black uppercase text-sm tracking-widest text-[#1a1a1a]">Menu</span>
          <button 
            onClick={toggleMenu}
            className="p-2 text-[#1a1a1a] hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <Minus size={24} /> : <Plus size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#f9a825] border-t border-black/10 overflow-hidden"
          >
            <ul className="flex flex-col">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className={`block px-6 py-4 text-sm font-bold uppercase border-b border-black/5 ${idx === 0 ? 'bg-[#1a1a1a] text-white' : 'text-[#1a1a1a]'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
