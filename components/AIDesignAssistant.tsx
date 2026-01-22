
import React, { useState } from 'react';
import { getDesignSuggestions } from '../services/gemini';
import { DesignSuggestion } from '../types';

const AIDesignAssistant: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [mood, setMood] = useState('modern');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DesignSuggestion[]>([]);

  const handleConsult = async () => {
    if (!businessType) return;
    setLoading(true);
    try {
      const suggestions = await getDesignSuggestions(businessType, mood);
      setResults(suggestions);
    } catch (e) {
      console.error(e);
      alert("AI failed to generate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl">
              🤖
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">AI Design Strategist</h2>
              <p className="text-gray-600">Tell us about your business, and we'll suggest professional design themes.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">My Business Is A...</label>
              <input 
                type="text"
                placeholder="e.g. Coffee Shop, Tech Startup, Law Firm"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Visual Mood</label>
              <select 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="modern">Modern & Clean</option>
                <option value="vintage">Vintage & Retro</option>
                <option value="luxury">Luxury & High-End</option>
                <option value="playful">Playful & Bright</option>
                <option value="corporate">Corporate & Professional</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleConsult}
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Consulting Gemini AI...' : 'Generate Design Concepts'}
          </button>

          {results.length > 0 && (
            <div className="mt-16 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h3 className="text-xl font-bold text-gray-900 text-center border-b pb-4">AI Recommendations</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {results.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-bold text-indigo-600 mb-3">Concept: {item.concept}</h4>
                    
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Palette</p>
                      <div className="flex gap-2">
                        {item.colors.map((color, i) => (
                          <div 
                            key={i} 
                            className="w-8 h-8 rounded-full shadow-sm border border-white"
                            style={{ backgroundColor: color }}
                            title={color}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Typography</p>
                      <div className="flex flex-wrap gap-2">
                        {item.fonts.map((font, i) => (
                          <span key={i} className="bg-white px-2 py-1 rounded text-sm text-gray-700 border">{font}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Layout Idea</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.layoutDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIDesignAssistant;
