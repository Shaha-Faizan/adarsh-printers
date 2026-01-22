
import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-xl mb-4">Adarsh Printers</h3>
            <p className="mb-4 max-w-sm">
              Your trusted partner for high-quality printing solutions in Aurangabad. 
              Delivering excellence since 2017 in offset and digital printing.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-indigo-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-600 transition-colors">f</div>
               <div className="w-8 h-8 bg-indigo-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-600 transition-colors">in</div>
               <div className="w-8 h-8 bg-indigo-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-orange-600 transition-colors">t</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollTo('home')} className="hover:text-orange-400 transition-colors">Home</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-orange-400 transition-colors">Services</button></li>
              <li><button onClick={() => scrollTo('portfolio')} className="hover:text-orange-400 transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-orange-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>CIDCO N-1, Aurangabad</li>
              <li>Maharashtra 431003</li>
              <li className="text-orange-500 font-bold">+91 9999240240</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Adarsh Printers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
