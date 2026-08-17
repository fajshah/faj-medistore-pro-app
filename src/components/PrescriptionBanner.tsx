import { FileUp, ClipboardCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrescriptionBanner() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[40px] overflow-hidden p-10 lg:p-16 text-white relative border-[12px] border-white shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <ClipboardCheck className="w-[400px] h-[400px] -rotate-12" />
          </div>
          
          <div className="lg:flex items-center justify-between relative z-10 gap-12">
            <div className="lg:max-w-lg">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/30">FAST MAPPING</div>
              <h2 className="text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-none uppercase italic">Upload & Order</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-sm">
                Our pharmacists will map your medicines in under 5 minutes. Guaranteed authenticity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <button className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-slate-900 font-black text-xs rounded-2xl hover:bg-white transition-colors shadow-2xl shadow-primary/20 uppercase tracking-widest">
                  <FileUp className="w-5 h-5 stroke-[3px]" />
                  Upload Now
                </button>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-black uppercase tracking-widest italic">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span>Real-time expert review</span>
                </div>
              </div>
            </div>
            
            <div className="mt-16 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 group hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-all">
                  <span className="font-black italic">01</span>
                </div>
                <h3 className="font-black text-lg mb-2 uppercase tracking-tighter italic underline decoration-primary/30 decoration-2">SNAP PHOTO</h3>
                <p className="text-sm text-slate-500 font-medium">Clear photo of valid prescription</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 group hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-all">
                  <span className="font-black italic">02</span>
                </div>
                <h3 className="font-black text-lg mb-2 uppercase tracking-tighter italic underline decoration-primary/30 decoration-2">GET CALL</h3>
                <p className="text-sm text-slate-500 font-medium">Expert pharmacist verification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
