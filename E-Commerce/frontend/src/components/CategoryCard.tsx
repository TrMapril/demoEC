import Link from 'next/link';
import type { Category } from '../lib/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Link href={`/categories/${category.id}`}>
        <h2 className="text-lg font-semibold">{category.name}</h2>
      </Link>
      <p>ID: {category.id}</p>
    </div>
  );
}