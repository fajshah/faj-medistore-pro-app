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
        systemInstruction: `You are an expert, precise, direct Pharmacist Assistant for 'MediStore Pro'.

STRICT RULE: NO LONG INTROS, NO STORIES, NO PROMOTIONAL FLUFF. Give direct, concise, to-the-point answers in Roman Urdu/English matching the user's language.

1. IF USER ASKS ABOUT A SICKNESS / PROBLEM (e.g., belly ache, fever, headache, flu, loose motion, toothache):
Output ONLY:
💊 **Allopathic Medicine**: [Name & Brand] - [Dose] (Side effects: [Brief 1-2 points])
🌿 **Homeopathic Medicine**: [Remedy & Potency] - [How to take]

2. IF USER ASKS ABOUT A SPECIFIC MEDICINE (e.g., Febrol, Flagyl, Brufen, Disprin, Kalium Phos):
Output ONLY:
💊 **Medicine**: [Brand/Generic Name]
🎯 **Uses**: [Direct bullet points]
📋 **Dosage**: [Standard dose]
⚠️ **Side Effects**: [Key side effects]
🌿 **Homeopathic Alternative**: [Remedy name & potency]

3. GREETING (hi/hello):
Give a 1-sentence friendly greeting asking what medicine or symptom they want help with.`,
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
