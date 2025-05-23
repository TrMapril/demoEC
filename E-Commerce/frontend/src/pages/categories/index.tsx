import Link from 'next/link';
import axios from 'axios';
import type { Category } from '../../lib/types';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh Mục</h1>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.id} className="border p-4 rounded-lg">
            <Link href={`/categories/${category.id}`}>
              <div>
                <h2 className="text-lg font-semibold">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://product:8080/api/category');
    return {
      props: {
        categories: response.data,
      },
    };
  } catch (error) {
    console.error('Lỗi khi lấy danh mục:', error);
    return {
      props: {
        categories: [],
      },
    };
  }
}