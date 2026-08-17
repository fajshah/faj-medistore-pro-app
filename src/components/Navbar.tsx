import { Search, ShoppingCart, User, Menu, Phone, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Navbar({ cartCount, onOpenCart }: { cartCount: number; onOpenCart: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center relative">
              <div className="w-5 h-1 bg-white"></div>
              <div className="w-1 h-5 bg-white absolute"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">MediStore<span className="text-primary italic">Pro</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-2xl bg-slate-50 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Search medicines, healthcare products..."
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Emergency</span>
              <div className="flex items-center gap-1 text-teal-600 font-bold">
                <Phone className="w-3 h-3" />
                <span>+91 1800-MED-PRO</span>
              </div>
            </div>
            <button className="p-2 text-slate-600 hover:text-teal-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={onOpenCart}
              className="p-2 text-slate-600 hover:text-teal-600 transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-teal-600 text-[10px] text-white flex items-center justify-center rounded-full font-black">
                {cartCount}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-teal-600 hover:bg-slate-100 transition-all"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6"
        >
          <div className="space-y-4">
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-sm placeholder-slate-400 focus:outline-none"
              placeholder="Search medicines..."
            />
            <div className="flex flex-col gap-4">
              <a href="#" className="text-slate-600 font-medium">Medicines</a>
              <a href="#" className="text-slate-600 font-medium">Wellness</a>
              <a href="#" className="text-slate-600 font-medium">Baby Care</a>
              <a href="#" className="text-slate-600 font-medium">Personal Care</a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
