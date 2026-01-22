
import { GoogleGenAI, Type } from "@google/genai";
import { DesignSuggestion } from "../types";

export const getDesignSuggestions = async (businessType: string, mood: string): Promise<DesignSuggestion[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Suggest 3 professional printing design concepts for a ${businessType} business with a ${mood} mood. Provide specific hex colors, font pairings, and layout ideas.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            concept: { type: Type.STRING },
            colors: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            fonts: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            layoutDescription: { type: Type.STRING },
          },
          required: ["concept", "colors", "fonts", "layoutDescription"],
        },
      },
    },
  });

  try {
    return JSON.parse(response.text || '[]');
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return [];
  }
};
