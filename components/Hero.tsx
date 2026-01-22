
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-indigo-900 min-h-screen flex items-center overflow-hidden py-20">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-orange-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="reveal active">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-sm font-semibold mb-6">
                Premium Printing in Aurangabad
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                High-Quality <br />
                <span className="text-orange-400">
                  Printing Solutions
                </span>
              </h1>
              <p className="text-lg text-indigo-100 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                From visiting cards to large format banners. Adarsh Printers brings your brand to life with precision, speed, and reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/30 hover:scale-105 active:scale-95"
                >
                  Get a Quote
                </button>
                <a 
                  href="https://wa.me/919999240240" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-green-600/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative reveal delay-200">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-105 transition-transform duration-700 group">
              <img 
                src="./printingmachine.jpg" 
                alt="Adarsh Printers Offset Machine" 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end p-6 md:p-8">
                <div className="text-white pr-24 md:pr-0">
                  <p className="font-bold text-xl">Precision Offset Technology</p>
                  <p className="text-sm opacity-80">Producing thousands of prints per hour</p>
                </div>
              </div>
            </div>
            {/* Floating elements: Inside image on mobile, floating outside on desktop */}
            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-white p-4 rounded-xl shadow-xl animate-bounce z-20" style={{ animationDuration: '3s' }}>
              <span className="text-3xl font-bold text-indigo-900 block">5M+</span>
              <span className="text-xs text-gray-500 uppercase font-bold">Prints Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
