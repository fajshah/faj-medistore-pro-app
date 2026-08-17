import { Star, ShoppingCart, Plus } from 'lucide-react';

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

export default function ProductCard({ product, onClick, onAddToCart }: { product: Product; onClick: () => void; onAddToCart: (product: Product) => void }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-[32px] p-5 border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-50 mb-6 border border-slate-50">
        {product.tag && (
          <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-lg ${product.tagColor || 'bg-primary'}`}>
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600';
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="absolute bottom-4 right-4 w-12 h-12 bg-slate-900 shadow-xl rounded-2xl flex items-center justify-center text-white hover:bg-primary transition-all active:scale-95 group/btn"
        >
          <Plus className="w-6 h-6 group-hover/btn:rotate-90 transition-transform" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
            ))}
          </div>
          <span className="text-[10px] text-slate-400 font-black uppercase tracking-tighter italic">[{product.reviews} REVIEWS]</span>
        </div>
        
        <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-1 italic underline decoration-primary/20 underline-offset-4">{product.brand}</p>
        <h3 className="text-lg font-black text-slate-900 leading-tight mb-4 tracking-tighter line-clamp-2">{product.name}</h3>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-slate-900 tracking-tighter italic">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-slate-400 line-through font-bold">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 overflow-hidden">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
