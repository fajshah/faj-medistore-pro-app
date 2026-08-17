// Intelligent pharmaceutical assistant fallback logic
export function getSmartLocalResponse(message: string): string {
  const query = message.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|salam|assalam|hola|good morning|good evening|good afternoon)/i.test(query)) {
    return "Hello! 👋 Welcome to **MediStore Pro**. I'm here to assist you with medical product recommendations, dosage guidelines, biochemic remedies (like Kalium Phosphoricum 6X), prescription uploads, and doctor consultations. How can I help you today?";
  }

  // Kalium Phosphoricum or Biochemic
  if (query.includes('kalium') || query.includes('phosphoricum') || query.includes('biochemic') || query.includes('schwabe')) {
    return "### 🌿 Kalium Phosphoricum 6X (Dr. Willmar Schwabe)\n- **Indication**: Used as a nerve nutrient and tonic for stress, mental fatigue, lack of stamina, nervous headaches, and sleeplessness.\n- **Recommended Dosage**: Adults take 2–4 tablets 3 times daily; children take 1–2 tablets or as directed by a homeopathic practitioner.\n- **Status**: In Stock ($15.99). You can add it directly from our **Medicines** section!";
  }

  // Headache / Pain / Fever
  if (query.includes('headache') || query.includes('pain') || query.includes('fever') || query.includes('migraine')) {
    return "### 💊 Relief for Pain, Fever & Headache\n- **General OTC**: Paracetamol (Acetaminophen) or Ibuprofen for temporary pain/fever relief.\n- **Homeopathic Remedy**: *Kalium Phosphoricum 6X* for stress or tension-related headaches.\n- **Tips**: Stay well-hydrated, rest in a dim quiet room, and avoid screen strain.\n\n*⚠️ If your headache is sudden, severe, or accompanied by stiff neck or high fever, please seek immediate medical care.*";
  }

  // Cold / Cough / Flu
  if (query.includes('cold') || query.includes('cough') || query.includes('flu') || query.includes('sore throat') || query.includes('sneezing')) {
    return "### 🍵 Cold & Flu Care\n- **Supportive Care**: Warm saline gargles, honey with warm water, and steam inhalation.\n- **Immunity Boost**: Vitamin C + Zinc supplements.\n- **Medicines**: Antihistamines for running nose, cough suppressants/expectorants depending on dry or productive cough.\n\n*Consult a healthcare professional if symptoms persist beyond 5–7 days.*";
  }

  // Vitamins / Supplements / Energy
  if (query.includes('vitamin') || query.includes('multivitamin') || query.includes('supplement') || query.includes('energy') || query.includes('fatigue')) {
    return "### ⚡ Daily Wellness & Vitamins\n- Check out our **Advanced Multivitamin Complex** containing essential vitamins (A, C, D3, B-Complex) & Zinc.\n- **Whey Protein Isolate** is available under Fitness for muscle recovery and stamina.\n- For nervous fatigue and focus, consider **Kalium Phosphoricum 6X**.";
  }

  // Prescription upload / Doctor consultation
  if (query.includes('prescription') || query.includes('doctor') || query.includes('consult') || query.includes('appointment')) {
    return "### 🩺 Online Doctor Consultation & Prescriptions\n- You can click the **'Upload Prescription'** banner on our homepage to quickly submit your prescription for verification.\n- Click **'Book Consultation'** at the top right to schedule an instant video call with certified doctors ($25/session).";
  }

  // Delivery / Shipping / Order
  if (query.includes('delivery') || query.includes('shipping') || query.includes('order') || query.includes('track')) {
    return "### 📦 Shipping & Delivery\n- **Standard Delivery**: 24–48 hours nationwide.\n- **Free Shipping**: On orders over $49.\n- **Secure Packaging**: Temperature-controlled packaging for sensitive medications.";
  }

  // General Fallback
  return `Thank you for your question about **"${message}"**!\n\nAs your MediStore Pro assistant, here are quick options you can explore:\n1. Browse our **Medicines & Biochemic Remedies** catalogue.\n2. Upload your prescription via the homepage banner.\n3. Book an online doctor consultation for personalized clinical advice.\n\n*Always consult a certified medical practitioner before starting any new medication.*`;
}
