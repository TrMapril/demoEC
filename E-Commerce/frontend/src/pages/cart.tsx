import axios from 'axios';
import CartItem from '../components/CartItem';
import type { Cart } from '../lib/types';

interface CartProps {
  cart: Cart | null;
}

export default function Cart({ cart }: CartProps) {
  const handleRemove = async (productId: string) => {
    try {
      await axios.delete('/api/cart', { data: { productId } });
      window.location.reload(); // Reload để cập nhật giỏ hàng
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
    }
  };

  if (!cart) return <div className="container mx-auto p-4">Đang tải...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Giỏ Hàng</h1>
      {cart.items.length > 0 ? (
        <div className="space-y-4">
          {cart.items.map((item) => (
            <CartItem key={item.productId} item={item} onRemove={handleRemove} />
          ))}
        </div>
      ) : (
        <p>Giỏ hàng trống</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://cart:8081/cart/1'); // Giả sử userId = 1
    return {
      props: {
        cart: response.data,
      },
    };
  } catch (error) {
    console.error('Lỗi khi lấy giỏ hàng:', error);
    return {
      props: {
        cart: null,
      },
    };
  }
}