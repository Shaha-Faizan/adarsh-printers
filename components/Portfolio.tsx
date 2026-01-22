
import React from 'react';

const portfolioItems = [
  { cat: 'Branding', img: './branding.png' },
  { cat: 'Packaging', img: 'packaging.jpg' },
  { cat: 'Brochure', img: './brochures.jpg' },
  { cat: 'Banners', img: './banner.jpg' },
  { cat: 'Stationery', img: './stationary.jpg' },
  { cat: 'Books', img: './books.jpg' },
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">Our Recent Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Portfolio Gallery</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img 
                src={item.img} 
                alt={item.cat} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/60 transition-colors duration-300 flex items-center justify-center">
                <div className="transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white font-bold text-xl border-b-2 border-orange-500 pb-1">{item.cat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
