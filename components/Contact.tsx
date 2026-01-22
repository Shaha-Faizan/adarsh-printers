
import React, { useState, useMemo } from 'react';

const PRODUCT_PRICES: Record<string, number> = {
  'visiting-cards': 0.80,
  'flyers': 1.50,
  'posters': 20.00,
  'banners': 15.00, // per sq ft approx
};

const Contact: React.FC = () => {
  const [product, setProduct] = useState('visiting-cards');
  const [quantity, setQuantity] = useState(100);
  const [isUrgent, setIsUrgent] = useState(false);

  const total = useMemo(() => {
    let base = PRODUCT_PRICES[product] * quantity;
    if (isUrgent) base *= 1.25;
    return Math.max(base, 200).toFixed(0); // Prices in INR approx context
  }, [product, quantity, isUrgent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Adarsh Printers, I need a quote for ${quantity} ${product}. Urgent: ${isUrgent}. Est: ₹${total}`;
    window.open(`https://wa.me/919999240240?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div className="reveal">
            <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visit Adarsh Printers</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 text-xl shrink-0">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900">Address</h4>
                  <p className="text-gray-600">Backside Of Hotel Grand Kailash, Opposite Laxmi Papers,<br/>CIDCO N-1, Aurangabad, Maharashtra 431003</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 text-xl shrink-0">📞</div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 9999240240</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 text-xl shrink-0">⏰</div>
                <div>
                  <h4 className="font-bold text-gray-900">Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:30 PM</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.123456789!2d75.36!3d19.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzQ4LjAiTiA3NcKwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy"
                 title="Adarsh Printers Location"
               ></iframe>
            </div>
          </div>

          {/* Quote Calculator */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 reveal delay-200">
             <div className="mb-6">
               <h3 className="text-2xl font-bold text-gray-900">Quick Cost Estimator</h3>
               <p className="text-gray-500 text-sm">Get an approximate price before you order.</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                 <select 
                   value={product}
                   onChange={(e) => setProduct(e.target.value)}
                   className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none bg-slate-50"
                 >
                   <option value="visiting-cards">Visiting Cards (Pack)</option>
                   <option value="flyers">Flyers / Pamphlets</option>
                   <option value="posters">Posters (A3/A2)</option>
                   <option value="banners">Flex Banner (Outdoor)</option>
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity: {quantity}</label>
                 <input 
                   type="range" 
                   min="50" 
                   max="2000" 
                   step="50"
                   value={quantity}
                   onChange={(e) => setQuantity(Number(e.target.value))}
                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                 />
                 <div className="flex justify-between text-xs text-gray-400 mt-1">
                   <span>50</span>
                   <span>2000+</span>
                 </div>
               </div>

               <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                 <input 
                   type="checkbox" 
                   id="urgent"
                   checked={isUrgent}
                   onChange={(e) => setIsUrgent(e.target.checked)}
                   className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                 />
                 <label htmlFor="urgent" className="text-sm text-gray-800 font-medium cursor-pointer">Urgent Delivery (Within 24 Hours)</label>
               </div>

               <div className="pt-6 border-t border-gray-100 flex items-end justify-between">
                 <div>
                   <p className="text-gray-500 text-xs uppercase tracking-widest">Estimated Total</p>
                   <p className="text-4xl font-extrabold text-gray-900">₹{total}</p>
                 </div>
                 <button 
                   type="submit"
                   className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/30 flex items-center gap-2"
                 >
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
                   Request on WhatsApp
                 </button>
               </div>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
