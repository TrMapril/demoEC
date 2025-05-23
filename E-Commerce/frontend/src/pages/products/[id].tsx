import { useRouter } from 'next/router';
import axios from 'axios';
import type { Product } from '../../lib/types';

interface ProductDetailProps {
  product: Product | null;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter();

  if (!product) return <div className="container mx-auto p-4">Sản phẩm không tồn tại</div>;

  const handleAddToCart = async () => {
    try {
      await axios.post('/api/cart', { productId: product.id, quantity: 1 });
      router.push('/cart');
    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-lg mb-2">${product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  try {
    const response = await axios.get(`http://product:8080/api/product/${params.id}`);
    return {
      props: {
        product: response.data,
      },
    };
  } catch (error) {
    console.error('Lỗi khi lấy sản phẩm:', error);
    return {
      props: {
        product: null,
      },
    };
  }
}