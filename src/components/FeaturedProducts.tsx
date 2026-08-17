import ProductCard from './ProductCard';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Product } from '../types';

const PRODUCTS = [
  {
    id: 1,
    name: 'Advanced Multivitamin Complex',
    brand: 'NATURES BEST',
    price: 24.99,
    oldPrice: 32.00,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600',
    tag: 'Best Seller',
    tagColor: 'bg-primary',
    category: 'Vitamins'
  },
  {
    id: 2,
    name: 'Blood Pressure Monitor',
    brand: 'HEALTECH',
    price: 59.90,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=600',
    tag: 'New',
    tagColor: 'bg-blue-600',
    category: 'Equipment'
  },
  {
    id: 3,
    name: 'Organic Lavender Oil',
    brand: 'PUREBLISS',
    price: 18.50,
    oldPrice: 22.00,
    rating: 4.7,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600',
    tag: '-20%',
    tagColor: 'bg-orange-600',
    category: 'Essential Oils'
  },
  {
    id: 4,
    name: 'Infrared Thermometer',
    brand: 'OMEGA',
    price: 34.99,
    rating: 4.6,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=600',
    category: 'Equipment'
  },
  {
    id: 5,
    name: 'Hydrating Face Serum',
    brand: 'GLOWLAB',
    price: 29.00,
    oldPrice: 45.00,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600',
    tag: 'Popular',
    tagColor: 'bg-teal-600',
    category: 'Skincare'
  },
  {
    id: 6,
    name: 'Whey Protein Isolate',
    brand: 'MUSCLETECH',
    price: 49.99,
    rating: 4.7,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=600',
    category: 'Vitamins'
  },
  {
    id: 7,
    name: 'Pain Relief Ointment',
    brand: 'RELIEVE',
    price: 12.50,
    rating: 4.5,
    reviews: 231,
    image: 'https://images.unsplash.com/photo-1626716493137-b67fe9501e76?auto=format&fit=crop&q=80&w=600',
    category: 'Medicines'
  },
  {
    id: 8,
    name: 'Antibacterial Hand Wash',
    brand: 'HYGIENE+',
    price: 8.99,
    oldPrice: 12.00,
    rating: 4.8,
    reviews: 843,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
    category: 'Medicines'
  },
  {
    id: 9,
    name: 'Kalium Phosphoricum 6X',
    brand: 'DR. WILLMAR SCHWABE',
    price: 15.99,
    oldPrice: 19.50,
    rating: 4.9,
    reviews: 174,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    tag: 'Biochemic Remedy',
    tagColor: 'bg-emerald-600',
    category: 'Medicines'
  },
];

export default function FeaturedProducts({ onProductClick, onAddToCart }: { onProductClick: (product: any) => void; onAddToCart: (product: any) => void }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Medicines', 'Vitamins', 'Equipment', 'Skincare'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-5xl font-black text-slate-900 italic tracking-tighter leading-none mb-4 uppercase">Trending Care</h2>
            <p className="max-w-md text-slate-500 text-sm font-medium leading-relaxed">Handpicked healthcare essentials curated for modern living.</p>
          </div>
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <ProductCard 
                product={product} 
                onClick={() => onProductClick(product)}
                onAddToCart={onAddToCart}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
