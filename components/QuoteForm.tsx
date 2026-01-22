
import React, { useState, useMemo } from 'react';

const PRODUCT_PRICES: Record<string, number> = {
  'business-cards': 0.15,
  'flyers': 0.35,
  'posters': 5.00,
  'stickers': 0.05,
  'banners': 25.00,
};

const QuoteForm: React.FC = () => {
  const [product, setProduct] = useState('business-cards');
  const [quantity, setQuantity] = useState(100);
  const [paperType, setPaperType] = useState('standard');
  const [urgent, setUrgent] = useState(false);

  const total = useMemo(() => {
    let base = PRODUCT_PRICES[product] * quantity;
    if (paperType === 'premium') base *= 1.5;
    if (paperType === 'recycled') base *= 1.2;
    if (urgent) base *= 1.3;
    
    // Minimum charge
    return Math.max(base, 20).toFixed(2);
  }, [product, quantity, paperType, urgent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Request Sent! We'll contact you for files for your $${total} order.`);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner border border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get an Instant Quote</h2>
            <p className="text-gray-600">Select your options below to see our estimated pricing.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Product</label>
                <select 
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                >
                  <option value="business-cards">Business Cards (Pack)</option>
                  <option value="flyers">Flyers (A4/A5)</option>
                  <option value="posters">Large Posters</option>
                  <option value="stickers">Custom Stickers</option>
                  <option value="banners">Outdoor Banners</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity: {quantity}</label>
                <input 
                  type="range" 
                  min="50" 
                  max="5000" 
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Material / Finish</label>
                <div className="grid grid-cols-3 gap-2">
                  {['standard', 'premium', 'recycled'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPaperType(type)}
                      className={`py-2 px-1 text-xs rounded-md border capitalize ${
                        paperType === type 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white text-gray-700 border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="urgent"
                  checked={urgent}
                  onChange={(e) => setUrgent(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="urgent" className="text-sm text-gray-700 font-medium">Rush Order (24h Turnaround)</label>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-gray-500 font-medium uppercase text-xs tracking-widest mb-4">Estimated Total</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">${total}</span>
                  <span className="text-gray-500 text-sm">USD</span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Unit Price</span>
                    <span className="font-medium text-gray-900">${(Number(total) / quantity).toFixed(3)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Turnaround</span>
                    <span className="font-medium text-gray-900">{urgent ? '24 Hours' : '3-5 Working Days'}</span>
                  </div>
                </div>
              </div>
              
              <button 
                type="submit"
                className="mt-8 w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Place Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
