import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = React.memo(() => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-2">
    <div className="bg-white px-3 py-1 rounded shadow-lg text-[10px] font-bold uppercase text-gray-500 animate-bounce">
      Talk to us?
    </div>
    <div className="bg-green-500 text-white p-4 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-transform">
      <MessageCircle size={32} />
    </div>
  </div>
));

WhatsAppButton.displayName = 'WhatsAppButton';

export default WhatsAppButton;
