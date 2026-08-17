import { ArrowRight, ShieldCheck, Truck, Clock, Pill, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-12 lg:py-0">
        <div className="lg:grid lg:grid-cols-12 min-h-[600px] items-stretch">
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center py-12 lg:pr-12 border-r border-slate-200">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">The Modern Apothecary</div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] text-slate-900 mb-8 tracking-tighter">
                YOUR CARE, <br />
                <span className="text-primary italic">REDEFINED.</span>
              </h1>
              <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
                Trusted pharmaceutical care delivered to your doorstep in 15 minutes. The digital age of wellness is here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.1em] hover:bg-primary transition-colors shadow-xl shadow-slate-900/10">
                  Shop Medicines
                </button>
                <div className="flex items-center gap-4 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 group cursor-pointer hover:border-primary transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-black text-slate-800 text-sm uppercase tracking-tight">ISO CERTIFIED 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-12 bg-slate-900 p-8 rounded-[32px] text-white max-w-md">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 mb-2 font-black">Active Users</div>
                  <div className="text-4xl font-black tracking-tighter italic">500k+</div>
                </div>
                <div className="h-10 w-px bg-white/20"></div>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-${i+3}00 overflow-hidden`}>
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-4 border-slate-900 bg-primary flex items-center justify-center text-[10px] font-black">+99</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:p-12 bg-slate-50">
             {/* Feature 1 */}
             <div className="bg-primary rounded-[40px] p-10 flex flex-col justify-between text-white overflow-hidden relative group">
                <div className="z-10">
                  <div className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-80 italic underline underline-offset-4">Top Rated</div>
                  <h2 className="text-5xl font-black leading-none mb-6">Daily<br/>Wellness Kit</h2>
                  <div className="bg-white/20 backdrop-blur-md self-start px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase border border-white/20">
                    From $19.99
                  </div>
                </div>
                <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10 flex justify-end">
                   <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:-translate-x-2 transition-transform">
                     <ArrowRight className="w-7 h-7 text-primary stroke-[3px]" />
                   </div>
                </div>
             </div>

             {/* Feature 2 */}
             <div className="bg-white rounded-[40px] p-10 flex flex-col justify-between border border-slate-200">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Quick Links</div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100 group cursor-pointer hover:border-primary transition-all">
                       <span className="font-black text-slate-700 italic tracking-tight">Browse Categories</span>
                       <Pill className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100 group cursor-pointer hover:border-primary transition-all">
                       <span className="font-black text-slate-700 italic tracking-tight">Order Tracking</span>
                       <Truck className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100 group cursor-pointer hover:border-primary transition-all">
                       <span className="font-black text-slate-700 italic tracking-tight">Find Store</span>
                       <Clock className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
             </div>

             {/* Feature 3 (Wide) */}
             <div className="md:col-span-2 bg-white rounded-[40px] border border-slate-200 overflow-hidden flex flex-col md:flex-row relative">
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
                    <span className="text-xs font-black text-red-500 uppercase tracking-[0.3em]">Emergency Service</span>
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-4 italic">INSTANT CONSULTATION</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">Speak with a licensed doctor within 60 seconds.</p>
                  <div className="flex gap-4">
                    <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-500 transition-colors">START CALL</button>
                    <button className="px-10 py-4 bg-slate-100 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all">DETAILS</button>
                  </div>
                </div>
                <div className="md:w-1/2 bg-slate-50 flex items-center justify-center p-12 relative overflow-hidden">
                   <div className="w-64 h-64 bg-white rounded-full shadow-inner flex items-center justify-center relative">
                      <div className="absolute inset-4 border-4 border-dashed border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                      <div className="w-40 h-40 bg-primary/10 rounded-full flex items-center justify-center">
                         <Star className="w-20 h-20 text-primary animate-pulse fill-current" />
                      </div>
                   </div>
                   <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">124 Doctors Online</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
