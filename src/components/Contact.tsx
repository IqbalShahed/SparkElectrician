import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = React.memo(() => (
  <section className="py-12 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 md:gap-16">
      <div>
        <div className="text-3xl md:text-4xl font-black italic text-[#003399] flex items-center mb-6 md:mb-8">
          Spark<span className="text-yellow-500 ml-1">Electrician</span>
        </div>
        <p className="text-gray-600 mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
          We are experts with many years of experience that can provide you with quality service at an affordable price.
        </p>
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="bg-yellow-50 p-3 rounded-full shrink-0">
              <Phone className="text-yellow-600" size={20} />
            </div>
            <div>
              <p className="text-lg md:text-xl font-black text-[#1a1a1a]">+880 1846079096</p>
              <p className="text-xs md:text-sm text-gray-500">24/7 Working</p>
            </div>
          </div>
          <div className="flex items-start gap-4 md:gap-6">
            <div className="bg-yellow-50 p-3 rounded-full shrink-0">
              <Mail className="text-yellow-600" size={20} />
            </div>
            <div>
              <p className="text-lg md:text-xl font-black text-[#1a1a1a] break-all">hello@sparkelectrician.com.sg</p>
              <p className="text-xs md:text-sm text-gray-500">We reply within 24 hours</p>
            </div>
          </div>
          <div className="flex items-start gap-4 md:gap-6">
            <div className="bg-yellow-50 p-3 rounded-full shrink-0">
              <MapPin className="text-yellow-600" size={20} />
            </div>
            <div>
              <p className="text-lg md:text-xl font-black text-[#1a1a1a]">675C Yishun Ave 4,</p>
              <p className="text-xs md:text-sm text-gray-500">#03-808 FERN GROVE, Singapore 763675</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 lg:mt-0">
        <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-8 md:mb-10">Contact Us</h2>
        <form className="space-y-4 md:space-y-6">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <input type="text" placeholder="Enter Name" className="w-full p-3 md:p-4 rounded border border-gray-200 outline-none focus:border-yellow-500 transition-colors text-xs md:text-sm" />
            <input type="email" placeholder="Enter Email" className="w-full p-3 md:p-4 rounded border border-gray-200 outline-none focus:border-yellow-500 transition-colors text-xs md:text-sm" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <input type="text" placeholder="Enter Subject" className="w-full p-3 md:p-4 rounded border border-gray-200 outline-none focus:border-yellow-500 transition-colors text-xs md:text-sm" />
            <input type="text" placeholder="Enter Phone" className="w-full p-3 md:p-4 rounded border border-gray-200 outline-none focus:border-yellow-500 transition-colors text-xs md:text-sm" />
          </div>
          <textarea placeholder="Message" rows={4} className="w-full p-3 md:p-4 rounded border border-gray-200 outline-none focus:border-yellow-500 transition-colors text-xs md:text-sm"></textarea>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-gray-100 p-3 md:p-4 rounded font-mono text-lg md:text-xl tracking-widest select-none w-full sm:w-auto text-center">uxqxW5</div>
            <input type="text" placeholder="Enter Security Code" className="flex-1 w-full p-3 md:p-4 rounded border border-gray-200 outline-none focus:border-yellow-500 transition-colors text-xs md:text-sm" />
          </div>
          <button className="w-full bg-yellow-500 text-black px-10 md:px-12 py-3 md:py-4 rounded font-black hover:bg-yellow-600 transition-colors uppercase text-xs md:text-sm">
            Send Now
          </button>
        </form>
      </div>
    </div>
  </section>
));

Contact.displayName = 'Contact';

export default Contact;
