
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 reveal">
             <div className="relative">
               <div className="absolute top-0 -left-4 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
               <div className="absolute bottom-0 -right-4 w-32 h-32 bg-indigo-50 rounded-full z-0"></div>
               <img 
                 src="./man1.jpg" 
                 alt="Adarsh Printers Team" 
                 className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[400px]"
               />
               <div className="absolute -bottom-6 -right-6 bg-indigo-900 text-white p-6 rounded-xl shadow-lg z-20">
                 <p className="text-4xl font-bold">Since</p>
                 <p className="text-4xl font-bold text-orange-400">2017</p>
               </div>
             </div>
          </div>
          
          <div className="w-full lg:w-1/2 reveal delay-200">
            <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">About Adarsh Printers</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Local Partner for <br/>Professional Printing</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located in the heart of CIDCO N-1, Aurangabad, Adarsh Printers has been serving local businesses and individuals with top-tier printing services since 2017. 
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We combine traditional craftsmanship with modern digital technology to deliver prints that make a lasting impression. Whether you need a single urgent poster or 10,000 brochures, we treat every job with the same dedication to quality.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">Modern Machinery</h4>
                  <p className="text-sm text-gray-500">Latest offset & digital presses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Team</h4>
                  <p className="text-sm text-gray-500">Skilled graphic designers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
