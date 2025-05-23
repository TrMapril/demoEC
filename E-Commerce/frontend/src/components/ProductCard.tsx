import Link from 'next/link';
import type { Product } from '../lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <h2 className="text-lg font-semibold">{product.name}</h2>
      </Link>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm text-gray-500">{product.description?.slice(0, 100)}...</p>
    </div>
  );
}