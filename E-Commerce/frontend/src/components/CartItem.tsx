import type { Cart } from '../lib/types';

interface CartItemProps {
  item: Cart['items'][0];
  onRemove: (productId: string) => void;
}

export default function CartItem({ item, onRemove }: CartItemProps) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-semibold">Sản phẩm ID: {item.productId}</p>
        <p>Số lượng: {item.quantity}</p>
      </div>
      <button
        onClick={() => onRemove(item.productId)}
        className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
      >
        Xóa
      </button>
    </div>
  );
}