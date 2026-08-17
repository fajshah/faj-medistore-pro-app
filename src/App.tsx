/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import PrescriptionBanner from './components/PrescriptionBanner';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ProductDetailModal from './components/ProductDetailModal';
import ConsultationModal from './components/ConsultationModal';
import CartDrawer from './components/CartDrawer';
import { useState } from 'react';
import { Product, CartItem } from './types';
import { Linkedin, MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts 
          onProductClick={(product) => setSelectedProduct(product)} 
          onAddToCart={(product) => addToCart(product)}
        />
        <PrescriptionBanner />
        
        {/* Expert Consultant Section */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-primary/10 rounded-[60px] blur-[80px] -z-10 -translate-x-10 translate-y-10" />
                <div className="bg-slate-50 p-4 rounded-[60px] shadow-2xl border border-slate-100 rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                    alt="Dr. Syeda Farzana Shah"
                    className="rounded-[45px] w-full h-[600px] object-cover shadow-lg"
                  />
                  <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl -rotate-6 border-4 border-white">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-1">Chief MD</div>
                    <div className="text-xl font-black italic">Expertise</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-[#0077B5] transition-all border border-slate-100 hover:scale-110 active:scale-95 group">
                    <Linkedin className="w-6 h-6 stroke-[2.5px] text-[#0077B5] group-hover:text-white transition-colors" />
                  </a>
                  <a href="https://wa.me/+911800633776" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-[#25D366] transition-all border border-slate-100 hover:scale-110 active:scale-95 group">
                    <MessageSquare className="w-6 h-6 stroke-[2.5px] text-[#25D366] group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-slate-200 italic">Leading Healthcare Expert</div>
                <h2 className="text-6xl font-black text-slate-900 leading-[0.9] mb-8 uppercase italic tracking-tighter">
                  DR. SYEDA <br /><span className="text-primary italic">FARZANA SHAH</span>
                </h2>
                <div className="text-2xl font-black text-slate-900 mb-8 italic underline decoration-primary decoration-4 underline-offset-8">BEST CONSULTANT</div>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    "Clinical Pharmacy",
                    "Internal Medicine",
                    "Pediatric Care",
                    "Gastroenterology",
                    "Dermatology",
                    "Wellness Coaching"
                  ].map((specialization, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-slate-900 transition-colors">{specialization}</span>
                    </div>
                  ))}
                </div>

                <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg">
                  With over 15 years of clinical excellence, Dr. Shah leads our medical review board, 
                  ensuring every product and consultation meets the highest global standards of care.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="text-3xl font-black text-slate-900 mb-1 italic">15+</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years Experience</div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <div className="text-3xl font-black text-slate-900 mb-1 italic">10k+</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Happy Patients</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-12 py-5 bg-slate-900 text-white rounded-[22px] font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-slate-900 transition-all shadow-xl shadow-slate-900/10"
                >
                  Book A Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6">Unrivaled Quality</div>
                <h2 className="text-6xl font-black text-slate-900 leading-[0.9] mb-12 uppercase italic tracking-tighter">
                  WHY PEOPLE CHOOSE <br /><span className="text-primary italic underline underline-offset-8 decoration-primary/20">MEDISTORE PRO</span>
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-slate-900 rounded-[22px] flex-shrink-0 flex items-center justify-center text-primary rotate-3 group-hover:rotate-0 transition-transform shadow-lg">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 text-xl mb-2 uppercase tracking-tight italic">Verified Authentic</h3>
                      <p className="text-slate-500 font-medium leading-relaxed max-w-sm text-sm">Every medicine we sell is sourced directly from licensed pharma companies.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-primary rounded-[22px] flex-shrink-0 flex items-center justify-center text-slate-900 -rotate-3 group-hover:rotate-0 transition-transform shadow-lg border-2 border-white shadow-primary/20">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 text-xl mb-2 uppercase tracking-tight italic">Express Delivery</h3>
                      <p className="text-slate-500 font-medium leading-relaxed max-w-sm text-sm">Our logistics network ensures your medicines reaches you within 60 minutes.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-[80px] blur-[100px] -z-10 translate-x-10 translate-y-10" />
                <div className="bg-white p-6 rounded-[60px] shadow-2xl border border-slate-100 relative">
                   <img 
                    src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800" 
                    alt="Pharmacist Work"
                    className="rounded-[40px] w-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 rounded-[32px] shadow-2xl z-20 max-w-[240px] hidden xl:block border-[10px] border-white">
                    <div className="text-5xl font-black mb-2 italic tracking-tighter text-primary">15k+</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Delivered This Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,209,255,0.05)_0%,transparent_70%)]"></div>
          <div className="max-w-xl mx-auto px-4 text-center relative z-10">
             <div className="w-16 h-1 w-primary bg-primary mx-auto mb-8 rounded-full"></div>
            <h2 className="text-5xl font-black mb-4 uppercase italic tracking-tighter leading-none">JOIN THE<br/><span className="text-primary italic">WELLNESS CIRCLE</span></h2>
            <p className="text-slate-400 mb-12 font-medium">Get health tips and exclusive offers in your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-1 bg-white/5 border border-white/10 px-8 py-5 rounded-[22px] focus:outline-none text-xs font-black uppercase tracking-widest focus:border-primary transition-all backdrop-blur-md"
              />
              <button className="px-10 py-5 bg-primary text-slate-900 rounded-[22px] text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-primary/20">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        doctorName="Dr. Syeda Farzana Shah"
      />
    </div>
  );
}

