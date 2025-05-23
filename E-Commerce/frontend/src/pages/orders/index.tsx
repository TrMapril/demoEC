import Link from 'next/link';
import axios from 'axios';
import type { Order } from '../../lib/types';

interface OrdersProps {
  orders: Order[];
}

export default function Orders({ orders }: OrdersProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Đơn Hàng</h1>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li key={order.id} className="border p-4 rounded-lg">
            <Link href={`/orders/${order.id}`}>
              <div>
                <h2 className="text-lg font-semibold">Đơn hàng #{order.id}</h2>
                <p className="text-gray-600">Tổng tiền: ${order.total}</p>
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
    const response = await axios.get('http://order:8082/api/orders');
    return {
      props: {
        orders: response.data,
      },
    };
  } catch (error) {
    console.error('Lỗi khi lấy đơn hàng:', error);
    return {
      props: {
        orders: [],
      },
    };
  }
}