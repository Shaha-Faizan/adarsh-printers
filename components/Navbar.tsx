
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollTo('home')}
          >
            <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center shadow-md transform rotate-3 hover:rotate-0 transition-transform">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-indigo-900' : 'text-white shadow-black drop-shadow-md'}`}>
              Adarsh Printers
            </span>
          </div>
          
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-semibold transition-colors hover:text-orange-500 ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition-transform hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${scrolled ? 'text-indigo-900' : 'text-white'}`}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-slate-700 font-medium py-2 border-b border-slate-100 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
