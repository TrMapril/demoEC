import Link from 'next/link';
import type { Order } from '../lib/types';

interface OrderSummaryProps {
  order: Order;
}

export default function OrderSummary({ order }: OrderSummaryProps) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <Link href={`/orders/${order.id}`}>
        <h2 className="text-lg font-semibold">Đơn hàng #{order.id}</h2>
      </Link>
      <p>Tổng tiền: ${order.total}</p>
      <p>Số lượng sản phẩm: {order.items.length}</p>
    </div>
  );
}