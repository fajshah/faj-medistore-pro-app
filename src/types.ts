
export interface Product {
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

export interface CartItem extends Product {
  quantity: number;
}
