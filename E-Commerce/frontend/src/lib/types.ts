export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  categoryId: string;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  total: number;
  items: OrderItem[];
}

export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string; // Thêm thuộc tính description
}