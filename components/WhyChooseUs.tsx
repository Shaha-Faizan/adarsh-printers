
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const stats = [
    { label: 'Happy Clients', value: '1200+' },
    { label: 'Projects Done', value: '5000+' },
    { label: 'Years Exp.', value: '7+' },
  ];

  return (
    <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-8 left-0 w-64 h-64 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
             <h2 className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-2">Why Choose Adarsh</h2>
             <h3 className="text-3xl md:text-5xl font-bold mb-6">Excellence in <br/>Every Print</h3>
             <p className="text-indigo-200 mb-8 leading-relaxed">
               We understand that print materials are often the first interaction a customer has with your brand. That's why we don't cut corners.
             </p>

             <div className="space-y-6">
               {[
                 { title: 'Quality Assurance', desc: 'Premium paper stocks and vibrant, accurate inks.' },
                 { title: 'Fast Delivery', desc: '24-hour rush delivery available for urgent orders.' },
                 { title: 'Affordable Pricing', desc: 'Competitive market rates without compromising quality.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="w-12 h-12 rounded-full bg-indigo-800 border border-indigo-700 flex items-center justify-center shrink-0">
                     <span className="text-orange-400 font-bold">{i + 1}</span>
                   </div>
                   <div>
                     <h4 className="font-bold text-lg">{item.title}</h4>
                     <p className="text-indigo-300 text-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 reveal delay-200">
             <div className="grid grid-cols-1 gap-8 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 border-b border-white/10 last:border-0">
                    <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-indigo-300 uppercase tracking-widest text-xs">{stat.label}</div>
                  </div>
                ))}
             </div>
             <div className="mt-8 pt-8 border-t border-white/10 text-center">
               <p className="text-lg font-medium italic">"Trusted by local businesses in CIDCO & Aurangabad"</p>
               <div className="flex justify-center gap-1 mt-4">
                 {[1,2,3,4,5].map(s => <span key={s} className="text-orange-400">★</span>)}
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
