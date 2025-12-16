import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} else {
  console.warn("Missing API_KEY in process.env. Fallback mode will be active.");
}

/**
 * Generates a short roast based on character persona and user question.
 */
export const generateRoast = async (systemPrompt: string, userQuestion: string): Promise<string | null> => {
  if (!ai) return null;

  try {
    const prompt = `User's question: "${userQuestion}". Give a short, punchy, dark, funny answer (max 2 sentences).`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.9,
      },
    });

    return response.text || null;
  } catch (error) {
    console.error("Gemini API Error (Roast):", error);
    return null;
  }
};

/**
 * Generates a detailed "Deep Soul Analysis".
 */
export const generateDeepRoast = async (characterDesc: string, userQuestion: string): Promise<string | null> => {
  if (!ai) return null;

  try {
    const systemPrompt = `You are a dark, cynical psychological analyst but still in character as: ${characterDesc}. The user asked: "${userQuestion}". Provide a detailed, 3-4 sentence "Deep Soul Analysis" of why they are a failure based on this question. Be creative, specific, and brutally funny. Use Traditional Chinese (Taiwanese flavor).`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Analyze my flaws deeply.",
      config: {
        systemInstruction: systemPrompt,
        temperature: 1.0, 
      },
    });

    return response.text || null;
  } catch (error) {
    console.error("Gemini API Error (Deep Roast):", error);
    return null;
  }
};