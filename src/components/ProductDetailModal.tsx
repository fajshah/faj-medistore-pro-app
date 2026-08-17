import { X, ShieldCheck, Truck, Clock, Info, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
  tagColor?: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Section */}
          <div className="md:w-1/2 bg-slate-50 p-8 flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-inner bg-white border border-slate-100">
               <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600';
                }}
              />
              {product.tag && (
                <span className={`absolute top-6 left-6 px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl ${product.tagColor || 'bg-primary'}`}>
                  {product.tag}
                </span>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-10 overflow-y-auto">
            <div className="mb-8">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2 block italic underline decoration-primary/20 underline-offset-4">{product.brand}</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-none uppercase mb-4 italic">{product.name}</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-amber-400">
                  <span className="font-black text-slate-900 text-lg">{product.rating}</span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-200'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest italic">[{product.reviews} VERIFIED REVIEWS]</span>
              </div>
            </div>

            <div className="flex items-end gap-3 mb-10">
              <span className="text-5xl font-black text-slate-900 tracking-tighter italic">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-xl text-slate-400 line-through font-bold mb-1">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>

            <div className="space-y-6 mb-10">
              <div className="p-5 bg-teal-50 rounded-3xl border border-teal-100 flex gap-4">
                <Info className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Dosage Info</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Please consult your physician before use. Standard dosage: 1 tablet daily after meals.</p>
                </div>
              </div>

              <div className="p-5 bg-orange-50 rounded-3xl border border-orange-100 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-1 italic">Safety Warning</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Keep out of reach of children. Store in a cool, dry place away from direct sunlight.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter italic">Authentic</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Truck className="w-6 h-6 text-primary mb-2" />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter italic">Express</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Clock className="w-6 h-6 text-primary mb-2" />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter italic">24/7 Support</span>
              </div>
            </div>

            <button className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black text-sm uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-2xl shadow-slate-900/10 active:scale-[0.98]">
              Add to Shopping Cart
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
