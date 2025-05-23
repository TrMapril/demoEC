import Link from 'next/link';
import axios from 'axios';
import type { Product } from '../../lib/types';

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sản Phẩm</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="border p-4 rounded-lg hover:shadow-lg">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://product:8080/api/product');
    return {
      props: {
        products: response.data,
      },
    };
  } catch (error) {
    console.error('Lỗi khi lấy sản phẩm:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}