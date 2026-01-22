
import React from 'react';

const services = [
  {
    title: 'Visiting Cards',
    desc: 'Matte, Glossy, Texture & Spot UV cards that define your professional identity.',
    icon: '📇',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Banner & Flex',
    desc: 'High-quality outdoor hoardings, star flex, and vinyl printing for maximum visibility.',
    icon: '🚩',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    title: 'Offset Printing',
    desc: 'Bulk printing for pamphlets, leaflets, and forms at the most affordable rates.',
    icon: '🖨️',
    color: 'bg-green-50 text-green-600'
  },
  {
    title: 'Books & Diaries',
    desc: 'Customized corporate diaries, notebooks, and book publishing services.',
    icon: '📔',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Brochures & Flyers',
    desc: 'Tri-fold, Bi-fold brochures on premium art paper with high-resolution graphics.',
    icon: '📄',
    color: 'bg-pink-50 text-pink-600'
  },
  {
    title: 'Stickers & Labels',
    desc: 'Product labels, die-cut stickers, and packaging solutions.',
    icon: '🏷️',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    title: 'Calendars',
    desc: 'Table and wall calendars personalized for corporate gifting.',
    icon: '📅',
    color: 'bg-teal-50 text-teal-600'
  },
  {
    title: 'ID Cards & Lanyards',
    desc: 'School and corporate ID cards with custom printed lanyards.',
    icon: '💳',
    color: 'bg-indigo-50 text-indigo-600'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">What We Print</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We cover the entire spectrum of printing needs for businesses in Aurangabad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
