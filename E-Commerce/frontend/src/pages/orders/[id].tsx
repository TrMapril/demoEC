import axios from 'axios';
import type { Order } from '../../lib/types';

interface OrderDetailProps {
  order: Order | null;
}

export default function OrderDetail({ order }: OrderDetailProps) {
  if (!order) return <div className="container mx-auto p-4">Đơn hàng không tồn tại</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chi Tiết Đơn Hàng #{order.id}</h1>
      <p className="text-lg mb-2">Tổng tiền: ${order.total}</p>
      <h2 className="text-xl font-semibold mb-2">Sản Phẩm</h2>
      <ul className="space-y-2">
        {order.items.map((item) => (
          <li key={item.productId}>
            Sản phẩm ID: {item.productId}, Số lượng: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  try {
    const response = await axios.get(`http://order:8082/api/orders/${params.id}`);
    return {
      props: {
        order: response.data,
      },
    };
  } catch (error) {
    console.error('Lỗi khi lấy đơn hàng:', error);
    return {
      props: {
        order: null,
      },
    };
  }
}