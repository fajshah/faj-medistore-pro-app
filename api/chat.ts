import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: "You are an expert pharmaceutical assistant for 'MediStore Pro'. You provide helpful information about medicines, health tips, and wellness. You are professional, empathetic, and always advise users to consult a certified doctor for serious medical conditions or prescription drugs. Keep responses concise and use clean formatting with markdown.",
      }
    });

    const reply = response.text || "I'm sorry, I couldn't generate a response. Please try again.";
    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process AI health query',
      details: error?.message || 'Unknown server error'
    });
  }
}
