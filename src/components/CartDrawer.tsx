
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Minus, Plus, Trash2, Send } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}: CartDrawerProps) {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const message = items.map(item => 
      `*${item.name}* (${item.brand}) - Qty: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const finalMsg = encodeURIComponent(`Hi MediStore Pro! I want to book an order:\n\n${message}\n\n*Total: $${total.toFixed(2)}*`);
    window.open(`https://wa.me/+911800633776?text=${finalMsg}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[110] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-900 text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-slate-900 rotate-3">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase italic tracking-tighter">Your Cart</h2>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary italic">Order Booker</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-slate-50 rounded-[40px] flex items-center justify-center mb-6 border border-slate-100 italic">
                    <ShoppingCart className="w-12 h-12 text-slate-200" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter leading-none">Your cart is empty</h3>
                  <p className="text-slate-400 font-medium text-sm">Add some medical essentials to get started.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-24 rounded-3xl bg-slate-50 overflow-hidden border border-slate-100 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] italic mb-0.5">{item.brand}</p>
                          <h4 className="font-black text-slate-900 text-sm italic tracking-tight line-clamp-1">{item.name}</h4>
                        </div>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-slate-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-black italic">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-black text-slate-900 italic tracking-tighter">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-8 bg-slate-50 border-t border-slate-100 rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-widest italic">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-widest italic">
                    <span>Shipping</span>
                    <span className="text-teal-600">FREE</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                    <span className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">Total</span>
                    <span className="text-3xl font-black text-slate-900 tracking-tighter italic">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-5 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:bg-primary hover:text-slate-900 transition-all shadow-2xl shadow-slate-900/20 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  Book via WhatsApp
                </button>
                <div className="mt-4 text-center">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Order Booker Online
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
