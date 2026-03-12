import React from 'react';

const Certificates = React.memo(() => (
  <section className="py-12 md:py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-4">Certificate</h2>
      <div className="h-1 w-12 bg-yellow-500 mx-auto"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 gap-8 md:gap-12">
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg">
        <img 
          src="https://skelectrical.com.sg/wp-content/uploads/2022/08/licence.jpg" 
          alt="Electrician's Licence" 
          className="w-full h-auto rounded"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://picsum.photos/seed/licence/800/600";
          }}
        />
      </div>
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg">
        <img 
          src="https://skelectrical.com.sg/wp-content/uploads/2022/08/hdb-cert.jpg" 
          alt="HDB Certificate" 
          className="w-full h-auto rounded"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://picsum.photos/seed/certificate/800/1000";
          }}
        />
      </div>
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg">
        <img 
          src="https://skelectrical.com.sg/wp-content/uploads/2022/08/worker-details.jpg" 
          alt="Worker Details" 
          className="w-full h-auto rounded"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://picsum.photos/seed/worker/800/400";
          }}
        />
      </div>
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg">
        <img 
          src="https://skelectrical.com.sg/wp-content/uploads/2022/08/submission-details.jpg" 
          alt="Submission Details" 
          className="w-full h-auto rounded"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://picsum.photos/seed/submission/800/400";
          }}
        />
      </div>
    </div>
  </section>
));

Certificates.displayName = 'Certificates';

export default Certificates;
