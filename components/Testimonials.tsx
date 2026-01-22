
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Rahul Patil', role: 'Business Owner', text: 'Adarsh Printers delivered my visiting cards in just 4 hours. The quality is exceptional!' },
            { name: 'Sriya Deshmukh', role: 'Event Planner', text: 'Best place in CIDCO for banner printing. The colors are vivid and the material is durable.' },
            { name: 'Amit Sharma', role: 'Cafe Manager', text: 'They designed and printed our menu cards perfectly. Very professional team.' }
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md reveal delay-100">
              <div className="flex gap-1 text-orange-400 mb-4">
                {'★★★★★'}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
