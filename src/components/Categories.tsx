import { Pill, Activity, Baby, Sparkles, HeartPulse, Microscope } from 'lucide-react';
import { motion } from 'motion/react';

const CATEGORIES = [
  { id: 1, name: 'Medicines', icon: Pill, color: 'bg-primary/10 text-primary', count: '5000+', description: 'Prescription & Generic' },
  { id: 2, name: 'Wellness', icon: HeartPulse, color: 'bg-primary/10 text-primary', count: '1200+', description: 'Vitamins & Supplements' },
  { id: 3, name: 'Personal Care', icon: Sparkles, color: 'bg-primary/10 text-primary', count: '800+', description: 'Skin & Hygiene' },
  { id: 4, name: 'Baby Care', icon: Baby, color: 'bg-primary/10 text-primary', count: '450+', description: 'Nutrition & Diapers' },
  { id: 5, name: 'Diagnostics', icon: Microscope, color: 'bg-primary/10 text-primary', count: '300+', description: 'Lab Tests at Home' },
  { id: 6, name: 'Fitness', icon: Activity, color: 'bg-primary/10 text-primary', count: '600+', description: 'Devices & Gear' },
  { id: 7, name: 'Dental Care', icon: Sparkles, color: 'bg-primary/10 text-primary', count: '250+', description: 'Oral Hygiene' },
  { id: 8, name: 'Eye Care', icon: Microscope, color: 'bg-primary/10 text-primary', count: '180+', description: 'Drops & Lenses' },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 italic">Full Inventory</div>
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter italic uppercase leading-none">Shop Categories</h2>
            <p className="mt-4 text-slate-500 text-base font-medium">Explore our curated selection of health and wellness solutions.</p>
          </div>
          <button className="px-8 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-black hover:bg-slate-900 hover:text-white transition-all text-[10px] uppercase tracking-[0.2em] shadow-sm">
            Explore All Categories
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-full flex flex-col p-8 rounded-[48px] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(0,209,255,0.1)] transition-all overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform" />
                
                <div className={`w-16 h-16 rounded-3xl ${cat.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-all shadow-sm ring-4 ring-white`}>
                  <cat.icon className="w-8 h-8" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-black text-slate-900 uppercase text-lg italic tracking-tight">{cat.name}</h3>
                    <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-400 group-hover:text-slate-500 transition-colors">{cat.description}</p>
                </div>
                
                <div className="mt-8 flex items-center text-[10px] font-black text-slate-900 uppercase tracking-widest group-hover:text-primary transition-all">
                  Browse Items <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
