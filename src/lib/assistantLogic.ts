/**
 * Comprehensive Medical Knowledge Base for MediStore Pro
 * Handles complex sentence queries (e.g., "mujhe fezlon tablet kahan se milegi or ye kis use k liye ha",
 * "progynova tablet uses", "flagyl 400mg", etc.)
 */

interface MedicineInfo {
  names: string[];
  brandAndGeneric: string;
  uses: string;
  dosage: string;
  sideEffects: string;
  homeopathicAlt: string;
  availability?: string;
}

interface DiseaseInfo {
  names: string[];
  condition: string;
  allopathic: string;
  homeopathic: string;
}

export const MEDICINES: MedicineInfo[] = [
  {
    names: ['fezlon', 'fezlon tablet', 'fezelon', 'phoslon', 'fazlon', 'febrol', 'fefol', 'fefol vit'],
    brandAndGeneric: 'Fezlon (Iron Polymaltose + Folic Acid / Antianemic Supplement)',
    uses: 'Khoon ki kami (Iron Deficiency Anemia), Hamal (Pregnancy) me iron aur folic acid ki kami door karna, Kamzori aur thakan (Fatigue & Pale skin).',
    dosage: '1 tablet rozana dopahar k khane k sath ya foran baad pani k sath (Khali pet lene se parhez karein).',
    sideEffects: 'Stool ka rang kala (dark stool) aana jo k normal hai, halki qabz (constipation) ya matli.',
    homeopathicAlt: 'Ferrum Metallicum 30C / Ferrum Phosphoricum 6X (Khoon ki kami aur iron absorption k liye 4 tablets 3 dafa).',
    availability: 'Yeh MediStore Pro par available hai! Aap prescription upload karke ya search bar me order place kar sakte hain.'
  },
  {
    names: ['progynova', 'progynava', 'proginova', 'estradiol', 'estradiol valerate', 'estrogen', 'hrt'],
    brandAndGeneric: 'Progynova 1mg / 2mg (Estradiol Valerate - Hormone Replacement Therapy)',
    uses: 'Menopause (Mahwari band hone k baad ki garmi/hot flashes, paseene, mood swings), Harmonal imbalance, IVF / Embryo transfer support, Estrogen hormone ki kami.',
    dosage: '1 tablet rozana ek hi waqt par (Strictly gynaecologist / doctor ki hidayat k mutabiq lein).',
    sideEffects: 'Chati me dard (Breast tenderness), Matli, Halka sar dard, Wazan me tabdeeli, Irregular spotting.',
    homeopathicAlt: 'Sepia 30C / Lachesis 30C / Pulsatilla 30C (Menopause aur harmonal complaints k liye 4 drops).' ,
    availability: 'Yeh prescription-required medicine hai. MediStore Pro par prescription upload karke easily mil jayegi.'
  },
  {
    names: [
      'methicobalmine', 'methycobal', 'methylcobalamin', 'mecobalamin', 'methicobal',
      'b12', 'vitamin b12', 'cobalamin', 'neurobion', 'neuromet', 'mecobal'
    ],
    brandAndGeneric: 'Methycobal / Mecobalamin 500mcg (Vitamin B12 / Methylcobalamin)',
    uses: 'Aasabi kamzori (Nerve weakness / Neuropathy), Haath paon ka sunn hona (Numbness & Tingling), Diabetic nerve pain, Khoon ki kami (Megaloblastic Anemia), Dimaghi thakan.',
    dosage: '1 tablet (500mcg) din me 3 dafa khane k baad (ya doctor ki hidayat k mutabiq rozana 1 tablet).',
    sideEffects: 'Aam taur par bilkul safe hai. Kabhi kabhar halki matli (nausea), bhook me kami, ya dast (rare).',
    homeopathicAlt: 'Kalium Phosphoricum 6X (Nerve tonic - 4 tablets 3 dafa) / Causticum 30C / Hypericum 30C (nerve pain k liye).'
  },
  {
    names: ['surbex', 'surbex z', 'surbex-z', 'zinc', 'zinc sulfate', 'becozinc'],
    brandAndGeneric: 'Surbex-Z (High Potency Vitamin B-Complex + Vitamin C, E, Folic Acid & Zinc)',
    uses: 'Jismaani kamzori (General physical weakness), Immunity boost, Baal girna (Hair fall), Jild ki sehat, Recovery after illness.',
    dosage: '1 tablet rozana dopahar k khane k baad pani k sath.',
    sideEffects: 'Khali pet lene se meda kharab ya halki matli ho sakti hai. Urine ka rang peela hona normal hai.',
    homeopathicAlt: 'Five Phos 6X (Biochemic general tonic - 4 tablets 3 dafa) / Alfalfa Tonic Q.'
  },
  {
    names: ['cac 1000', 'cac-1000', 'cac1000', 'calcium', 'calcium d3', 'calcium d', 'osteo', 'caltrate'],
    brandAndGeneric: 'CaC 1000 Plus (Calcium Lactate + Carbonate + Vitamin C, D3, B6)',
    uses: 'Hadiyon ki kamzori (Weak bones / Osteoporosis), Dant ki mazbooti, Calcium ki kami, Thakan aur immunity.',
    dosage: '1 effervescent tablet 1 glass pani me ghol kar rozana piyein.',
    sideEffects: 'Zyada istemal se gas ya kidney stone ka khatra (agar pani kam piya jaye).',
    homeopathicAlt: 'Calcarea Phosphorica 6X (Calc Phos 6X - 4 tablets 3 dafa hadiyon k liye).'
  },
  {
    names: ['febrol', 'febrolfast', 'febrol fast', 'panadol', 'paracetamol', 'calpol', 'tylenol', 'disprol', 'acetaminophen'],
    brandAndGeneric: 'Febrol / Panadol (Paracetamol / Acetaminophen 500mg)',
    uses: 'Bukhar (Fever), Sar dard (Headache), Jism dard (Body ache), Daant dard (Toothache).',
    dosage: '1–2 tablets har 4–6 ghante baad khane k baad/pani k sath (24 ghante me maximum 4000mg).',
    sideEffects: 'Mild nausea ya stomach heaviness. Overdose me liver ko nuqsan.',
    homeopathicAlt: 'Ferrum Phosphoricum 6X (4 tablets 3 times daily) / Belladonna 30C (bukhar aur sar dard k liye).'
  },
  {
    names: ['brufen', 'ibuprofen', 'advil', 'motrin', 'proflex', 'nurofen'],
    brandAndGeneric: 'Brufen (Ibuprofen 400mg)',
    uses: 'Soojish (Swelling), Joron aur kamar ka dard (Joint & Back pain), Daant dard, Muscular cramps.',
    dosage: '1 tablet din me 2–3 dafa (Hamesha khana khane k baad lein).',
    sideEffects: 'Meda kharab (Acidity), Seene me jalan (Heartburn). Khali pet mat lein.',
    homeopathicAlt: 'Arnica Montana 30C (4 drops din me 3 dafa) / Rhus Tox 30C.'
  },
  {
    names: ['flagyl', 'metronidazole', 'entamizole', 'nidazole'],
    brandAndGeneric: 'Flagyl 400mg (Metronidazole)',
    uses: 'Pet kharab (Loose motion, Diarrhea), Intestinal infection, Amoebiasis, Daant k masoorhe ka infection.',
    dosage: '1 tablet din me 2–3 dafa khane k baad (5 din ka course).',
    sideEffects: 'Karuwa zaiqa (Metallic taste in mouth), Matli (Nausea), Bhook kam lagna.',
    homeopathicAlt: 'Mercurius Solubilis 30C / Podophyllum 30C (4 drops din me 2 dafa).'
  },
  {
    names: ['buscopan', 'hyoscine', 'spasfon', 'spasrid', 'colofac'],
    brandAndGeneric: 'Buscopan (Hyoscine Butylbromide 10mg)',
    uses: 'Pet k maror (Abdominal cramps), Periods ka dard (Menstrual pain), Gas k shadeed cramps.',
    dosage: '1–2 tablets jab shadeed dard ya maror ho (Din me max 3-4 dafa).',
    sideEffects: 'Munh khushk hona (Dry mouth), Halka sir chakraana, Qabz.',
    homeopathicAlt: 'Magnesia Phosphorica 6X (Mag Phos 6X - 4 tablets neem garam pani me ghol k lein) / Colocynthis 30C.'
  },
  {
    names: ['disprin', 'aspirin', 'loprin', 'acetylsalicylic acid'],
    brandAndGeneric: 'Disprin / Aspirin 300mg',
    uses: 'Fouri sar dard (Instant headache relief), Halka bukhar, Khoon patla karna (Low dose).',
    dosage: '1–2 tablets pani k aadhe glass me ghol kar khane k baad lein.',
    sideEffects: 'Mede me jalan ya ulcer ka khatra. Khali pet harghiz na lein.',
    homeopathicAlt: 'Gelsemium 30C / Kalium Phosphoricum 6X (4 tablets 3 times a day).'
  },
  {
    names: ['risek', 'omeprazole', 'nexum', 'esomeprazole', 'gaviscon', 'zantac', 'famotidine', 'pantoprazole'],
    brandAndGeneric: 'Risek 20mg / Nexum 40mg (Omeprazole / Esomeprazole)',
    uses: 'Seene ki jalan (Heartburn), Mede ki tezaabiat (Acidity / GERD), Badhazmi, Khate dakar.',
    dosage: '1 capsule subah nashte se 30 minute pehle (Khali pet).',
    sideEffects: 'Halka sar dard ya pet me gas.',
    homeopathicAlt: 'Robinia 30C / Nux Vomica 30C (4 drops khane se pehle) / Nat Phos 6X.'
  },
  {
    names: ['kalium phosphoricum', 'kali phos', 'kalium phos 6x', 'kali phos 6x', 'schwabe kalium', 'kalium'],
    brandAndGeneric: 'Kalium Phosphoricum 6X (Schwabe Biochemic Salt)',
    uses: 'Dimaghi thakan (Mental stress / exhaustion), Tension sar dard, Be-khawabi (Insomnia), Weakness.',
    dosage: 'Adults: 4 tablets zaban par rakh kar choosain din me 3 dafa. Children: 2 tablets.',
    sideEffects: 'Koi documented side effects nahi hain (Gentle biochemic formulation).',
    homeopathicAlt: 'Five Phos 6X / Avena Sativa Q.'
  },
  {
    names: ['augmentin', 'amoxicillin', 'amoxil', 'clavulanic'],
    brandAndGeneric: 'Augmentin 625mg / 1g (Amoxicillin + Clavulanic Acid)',
    uses: 'Gale ka shadeed infection (Sore throat / Tonsils), Chest infection, Kaan ya daant ka infection.',
    dosage: '1 tablet har 12 ghante baad khane k sath (5–7 din ka course).',
    sideEffects: 'Loose motion, Matli, Mede me kharabi.',
    homeopathicAlt: 'Hepar Sulph 30C / Belladonna 30C (4 drops din me 3 dafa).'
  },
  {
    names: ['arinate', 'rigix', 'zyrtec', 'fexet', 'softin', 'cetirizine', 'fexofenadine', 'avril', 'phenergan'],
    brandAndGeneric: 'Rigix / Zyrtec / Fexet (Cetirizine 10mg / Fexofenadine 120mg)',
    uses: 'Nazla, Cheenkein (Sneezing), Naak behna (Runny nose), Jism par kharish/allergy.',
    dosage: '1 tablet raat ko sote waqt (Cetirizine) ya subah (Fexet 120mg).',
    sideEffects: 'Neend aana (Drowsiness), Munh ka khushk hona.',
    homeopathicAlt: 'Allium Cepa 30C / Sabadilla 30C (4 drops din me 3 dafa).'
  },
  {
    names: ['ponstan', 'ponstan forte', 'mefenamic acid', 'ponston'],
    brandAndGeneric: 'Ponstan Forte (Mefenamic Acid 500mg)',
    uses: 'Periods ka shadeed dard (Dysmenorrhea), Daant dard, Muscular & post-operative pain.',
    dosage: '1 tablet din me 2–3 dafa khana khane k baad.',
    sideEffects: 'Stomach upset, Acidity, Nausea.',
    homeopathicAlt: 'Magnesia Phosphorica 6X (Mag Phos) / Caulophyllum 30C.'
  },
  {
    names: ['gravinate', 'motilium', 'domperidone', 'dimenhydrinate', 'vonirest', 'ondansetron'],
    brandAndGeneric: 'Gravinate 50mg / Motilium 10mg',
    uses: 'Ulti (Vomiting), Matli (Nausea), Safar me tabiat kharab hona (Motion sickness).',
    dosage: '1 tablet safar ya khane se aadha ghanta pehle.',
    sideEffects: 'Neend aana (Drowsiness), Khushk gala.',
    homeopathicAlt: 'Ipecacuanha 30C (Ipecac 30C - 4 drops on tongue) / Nux Vomica 30C.'
  },
  {
    names: ['lipiget', 'atorvastatin', 'atorva', 'ezetimibe', 'cholesterol', 'statin'],
    brandAndGeneric: 'Lipiget 10mg / 20mg (Atorvastatin)',
    uses: 'High Cholesterol, Triglycerides kam karna, Heart attack aur stroke se hifazat.',
    dosage: '1 tablet raat ko sote waqt (Doctor ki hidayat k mutabiq).',
    sideEffects: 'Patthon me dard (Muscle cramps), Liver enzymes me tabdeeli.',
    homeopathicAlt: 'Allium Sativum Q / Guatteria Gaumeri Q (10 drops aadhe cup pani me).'
  },
  {
    names: ['concor', 'bisoprolol', 'inderal', 'propranolol', 'lopresor', 'atenolol'],
    brandAndGeneric: 'Concor 2.5mg / 5mg (Bisoprolol)',
    uses: 'High Blood Pressure (Hypertension), Dil ki dharqan tez hona (Tachycardia / Palpitations), Angina.',
    dosage: '1 tablet subah rozana (Doctor ki prescribed dose k mutabiq).',
    sideEffects: 'Thakan, Nabz ka sust hona (Bradycardia), Haath paon thanday hona.',
    homeopathicAlt: 'Rauwolfia Serpentina Q (10 drops pani me BP control k liye) / Crataegus Oxyacantha Q.'
  },
  {
    names: ['glucophage', 'metformin', 'getryl', 'glimepiride', 'diamicron', 'sugar'],
    brandAndGeneric: 'Glucophage 500mg / 850mg (Metformin HCl)',
    uses: 'Type 2 Diabetes (Sugar control), PCOS (aurton me harmonal balance aur wazan control).',
    dosage: '1 tablet khane k darmiyan ya foran baad (Mede ki hifazat k liye).',
    sideEffects: 'Pet me gas, loose motion, matli (shuruati dinon me).',
    homeopathicAlt: 'Syzygium Jambolanum Q (Jamun Q - 10-15 drops subah sham sugar control k liye) / Gymnema Sylvestre Q.'
  }
];

export const DISEASES: DiseaseInfo[] = [
  {
    names: ['belly ache', 'bellyache', 'stomach ache', 'stomach pain', 'pet dard', 'pet mein dard', 'cramps', 'maror', 'tummy ache', 'abdominal pain', 'belly'],
    condition: 'Pet Dard / Belly Ache (Abdominal Cramps)',
    allopathic: '**Buscopan 10mg** (1–2 tablets jab dard ho) ya acidity ho to **Risek 20mg**.\n⚠️ *Side effects*: Halka munh khushk hona, qabz.',
    homeopathic: '**Magnesia Phosphorica 6X (Mag Phos 6X)** (4 tablets neem garam pani me) ya **Colocynthis 30C** (4 drops 3 dafa).'
  },
  {
    names: ['headache', 'sar dard', 'sir dard', 'head ache', 'migraine', 'adha sisi', 'head'],
    condition: 'Sar Dard / Headache & Migraine',
    allopathic: '**Febrol / Panadol 500mg** (1–2 tablets) ya shadeed dard me **Brufen 400mg** khane k baad.\n⚠️ *Side effects*: Brufen khali pet acidity karti hai.',
    homeopathic: '**Kalium Phosphoricum 6X** (Tension/stress headache k liye 4 tablets 3 dafa) ya **Belladonna 30C** (shadeed chubhan/feverish headache).'
  },
  {
    names: ['fever', 'bukhar', 'temperature', 'pyrexia'],
    condition: 'Bukhar / Fever',
    allopathic: '**Febrol Fast / Panadol 500mg ya 1000mg** (1 tablet har 6 ghante baad pani k sath).\n⚠️ *Side effects*: Recommended dose me bilkul safe hai.',
    homeopathic: '**Ferrum Phosphoricum 6X** (4 tablets har 2–3 ghante baad neem garam pani me) ya **Aconite 30C**.'
  },
  {
    names: ['flu', 'flue', 'cold', 'cough', 'nazla', 'zukam', 'khansi', 'sore throat', 'gala kharab', 'runny nose'],
    condition: 'Nazla, Zukam, Gala Kharab & Khansi (Cold & Flu)',
    allopathic: 'Nazla/Cheenkon k liye **Rigix / Fexet 120mg** (1 tablet raat ko). Gale k liye **Strepsils Lozenges** aur khansi k liye **Hydryllin Syrup** (2 chamach 3 dafa).\n⚠️ *Side effects*: Halka neend ka ghalba.',
    homeopathic: 'Pani jese nazle k liye **Allium Cepa 30C** (4 drops 3 dafa) aur khansi k liye **Justicia Adhatoda Q** (10 drops garam pani me).'
  },
  {
    names: ['loose motion', 'loose motions', 'diarrhea', 'diarrhoea', 'dast', 'food poisoning', 'watery stool', 'loose'],
    condition: 'Loose Motion / Diarrhea (Dast)',
    allopathic: 'Sab se pehle **ORS** (Pani ki kami poori karne k liye). Infection k liye **Flagyl 400mg** (1 tablet subah sham 5 din).\n⚠️ *Side effects*: Munh me kadwa zaiqa.',
    homeopathic: '**Podophyllum 30C** (Pani jese dast k liye 4 drops) ya food poisoning k liye **Arsenicum Album 30C** (4 drops din me 3 dafa).'
  },
  {
    names: ['vomiting', 'nausea', 'ulti', 'matli'],
    condition: 'Ulti aur Matli / Vomiting & Nausea',
    allopathic: '**Gravinate 50mg** ya **Motilium 10mg** (1 tablet khane se 30 mins pehle).\n⚠️ *Side effects*: Neend aana, munh khushk hona.',
    homeopathic: '**Ipecac 30C** (Lagatar ulti/matli k liye 4 drops zaban par) ya **Nux Vomica 30C**.'
  },
  {
    names: ['acidity', 'heartburn', 'seene ki jalan', 'gerd', 'gas', 'badhazmi'],
    condition: 'Seene Ki Jalan & Tezaabiat / Acidity & GERD',
    allopathic: '**Risek 20mg** (1 capsule subah nashte se 30 min pehle khali pet) aur fouri aaram k liye **Gaviscon Syrup** (2 chamach khane k baad).\n⚠️ *Side effects*: Halka pet kharab.',
    homeopathic: '**Robinia 30C** (Khate dakar/jalan k liye 4 drops) ya **Natrum Phos 6X** (4 tablets khane k baad).'
  },
  {
    names: ['toothache', 'dant dard', 'daant mein dard', 'tooth pain', 'gum pain', 'dant'],
    condition: 'Daant Dard / Toothache',
    allopathic: '**Synflex 550mg** ya **Brufen 400mg** (1 tablet khane k baad). Khali pet mat lein.\n⚠️ *Side effects*: Acidity.',
    homeopathic: '**Plantago Major Q** (Cotton par laga kar daant par dabayein) aur dard k liye **Chamomilla 30C** (4 drops).'
  },
  {
    names: ['allergy', 'itching', 'khujli', 'kharish', 'skin rash'],
    condition: 'Kharish & Jild Ki Allergy / Itching & Rash',
    allopathic: '**Rigix 10mg** ya **Fexet 180mg** (1 tablet daily) aur ooper lagane k liye **Calamine Lotion**.\n⚠️ *Side effects*: Halka suthapan.',
    homeopathic: '**Apis Mellifica 30C** (Soojish/jalan k liye 4 drops) ya **Rhus Tox 30C**.'
  },
  {
    names: ['back pain', 'joint pain', 'kamar dard', 'joron ka dard', 'body pain', 'kamar'],
    condition: 'Kamar & Joron Ka Dard / Back & Joint Pain',
    allopathic: '**Brufen 400mg** ya **Nuberol Forte** (1 tablet khane k baad) + **Voltral Emulgel** massage.\n⚠️ *Side effects*: Acidity, halki neend.',
    homeopathic: '**Rhus Tox 30C** (Joron k dard k liye 4 drops 3 dafa) ya **Arnica Montana 30C**.'
  },
  {
    names: ['nerve weakness', 'numbness', 'haath paon sunn', 'sunn hona', 'neuropathy', 'aasabi kamzori', 'kamzori', 'weakness'],
    condition: 'Aasabi Kamzori & Haath Paon Sunn Hona (Nerve Weakness / Neuropathy)',
    allopathic: '**Methycobal 500mcg (Mecobalamin)** (1 tablet rozana 2–3 dafa khane k baad) ya **Surbex-Z** rozana 1 tablet.\n⚠️ *Side effects*: Aam taur par safe hai.',
    homeopathic: '**Kalium Phosphoricum 6X** (4 tablets 3 dafa) ya **Causticum 30C** (4 drops 3 dafa).'
  },
  {
    names: ['constipation', 'qabz', 'qabaz', 'stomach hardness'],
    condition: 'Qabz / Constipation',
    allopathic: '**Duphalac Syrup (Lactulose)** (2–3 chamach raat ko) ya **Softlax sachet**.\n⚠️ *Side effects*: Halka pet phoolna (gas).',
    homeopathic: '**Bryonia Alba 30C** ya **Nux Vomica 30C** (4 drops raat ko sote waqt).'
  },
  {
    names: ['piles', 'bawasir', 'hemorrhoids', 'bawaseer'],
    condition: 'Bawasir / Piles (Hemorrhoids)',
    allopathic: '**Daflon 500mg** (2 tablets 2 dafa khane k sath) + **Anusol / Proctosedyl Ointment** lagane k liye.\n⚠️ *Side effects*: Halka pet kharab.',
    homeopathic: '**Aesculus Hippocastanum 30C** / **Hamamelis Q** / **Nux Vomica 30C** (4 drops din me 3 dafa).'
  }
];

// Fuzzy token matcher
function clean(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function wordSimilarity(w1: string, w2: string): number {
  if (w1 === w2) return 1.0;
  if (w1.length >= 4 && w2.length >= 4 && (w1.includes(w2) || w2.includes(w1))) return 0.85;

  const getBigrams = (str: string) => {
    const s = new Set<string>();
    for (let i = 0; i < str.length - 1; i++) {
      s.add(str.slice(i, i + 2));
    }
    return s;
  };
  const b1 = getBigrams(w1);
  const b2 = getBigrams(w2);
  let intersection = 0;
  b1.forEach(b => {
    if (b2.has(b)) intersection++;
  });
  return (2.0 * intersection) / (b1.size + b2.size || 1);
}

export function getSmartLocalResponse(message: string): string {
  const q = clean(message);
  const words = q.split(' ').filter(w => w.length > 2);

  if (!q) {
    return "Assalam-o-Alaikum! 👋 Dawa ka naam ya masla likhein (Jaise: *Progynova, Fezlon, Methycobal, Febrol, Buscopan, belly ache*).";
  }

  // Greeting
  if (/^(hi|hello|hey|salam|assalam|aOA|start|help)$/i.test(q)) {
    return "Assalam-o-Alaikum! 👋 Main **MediStore Pro** Assistant hoon. Aap kis bimari ya medicine (Jaise *Progynova, Fezlon, Methycobal, Surbex Z, Febrol, Flagyl*) ki details poochna chahte hain?";
  }

  // 1. Check medicine match (Direct, Substring, or Word-level similarity)
  let bestMed: MedicineInfo | null = null;
  let highestMedScore = 0;

  for (const med of MEDICINES) {
    for (const name of med.names) {
      const cName = clean(name);
      
      // Exact full match or query contains medicine name
      if (q === cName || q.includes(cName) || new RegExp(`\\b${cName}\\b`).test(q)) {
        bestMed = med;
        highestMedScore = 1.0;
        break;
      }

      // Check each word in the user sentence
      for (const word of words) {
        // Skip common stop words
        if (['mujhe', 'kahan', 'milegi', 'tablet', 'tablets', 'liye', 'kiske', 'kis', 'use', 'hogi', 'batao', 'chahye', 'den'].includes(word)) continue;
        
        const score = wordSimilarity(word, cName);
        if (score > highestMedScore && score >= 0.52) {
          highestMedScore = score;
          bestMed = med;
        }
      }
    }
    if (highestMedScore === 1.0) break;
  }

  if (bestMed && highestMedScore >= 0.52) {
    let resp = `💊 **${bestMed.brandAndGeneric}**\n\n`;
    resp += `🎯 **Uses**: ${bestMed.uses}\n`;
    resp += `📋 **Dosage**: ${bestMed.dosage}\n`;
    resp += `⚠️ **Side Effects**: ${bestMed.sideEffects}\n`;
    resp += `🌿 **Homeopathic Alternative**: ${bestMed.homeopathicAlt}\n`;
    if (bestMed.availability) {
      resp += `\n🛒 **Kahan Se Milegi**: ${bestMed.availability}`;
    } else {
      resp += `\n🛒 **Kahan Se Milegi**: Yeh **MediStore Pro** online pharmacy par directly available hai! Aap prescription upload karke ya search bar se foran order kar sakte hain.`;
    }
    return resp;
  }

  // 2. Check disease match
  let bestDis: DiseaseInfo | null = null;
  let highestDisScore = 0;

  for (const dis of DISEASES) {
    for (const name of dis.names) {
      const cName = clean(name);
      if (q === cName || q.includes(cName) || new RegExp(`\\b${cName}\\b`).test(q)) {
        bestDis = dis;
        highestDisScore = 1.0;
        break;
      }
      for (const word of words) {
        if (['mujhe', 'kahan', 'milegi', 'dard', 'batao', 'chahye', 'ho', 'gaya'].includes(word)) continue;
        const score = wordSimilarity(word, cName);
        if (score > highestDisScore && score >= 0.52) {
          highestDisScore = score;
          bestDis = dis;
        }
      }
    }
    if (highestDisScore === 1.0) break;
  }

  if (bestDis && highestDisScore >= 0.52) {
    return `🩺 **Treatment for ${bestDis.condition}**:

💊 **Allopathic Medicine**:
${bestDis.allopathic}

🌿 **Homeopathic Medicine**:
${bestDis.homeopathic}`;
  }

  // Direct keyword fallback if natural sentence passed
  const extractedWord = words.find(w => !['mujhe', 'kahan', 'milegi', 'tablet', 'tablets', 'liye', 'kiske', 'kis', 'use', 'hogi', 'batao', 'chahye'].includes(w)) || message.trim();

  return `💊 **${extractedWord.toUpperCase()} Tablet**:

🎯 **Uses**: Yeh medicine specific medical conditions ke liye doctor prescribe karte hain.
🛒 **Kahan Se Milegi**: Yeh aapko **MediStore Pro** online pharmacy par directly mil jayegi. Aap hamare homepage par **'Upload Prescription'** button par click karke prescription send karein ya certified pharmacist se direct consult karein!
🌿 **Homeopathic Alternative**: Symptom ke mutabiq relevant homeopathic remedy provide ki ja sakti hai.`;
}
