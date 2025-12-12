import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // In a real app, ensuring this is present is key.

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]) => {
  if (!ai) {
    // Fallback if no API key is set for demo purposes
    return "I am the Sensei. Please provide an API Key to awaken my true consciousness. (Set process.env.API_KEY)";
  }

  try {
    const model = ai.models;
    
    // Formatting history for the API if needed, though simple generateContent often suffices for single turn or managed state.
    // For this simple chat, we'll just send the current message with a system instruction concept.
    
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: "You are a futuristic Samurai AI Sensei. You speak with honor, discipline, and a touch of cyberpunk slang. You represent the brand 'SAMURAI', which sells high-tech tactical gear and streetwear. Keep answers concise.",
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Meditation interrupted. My connection to the cloud is severed. Please try again.";
  }
};
