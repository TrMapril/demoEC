import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white text-xl font-bold">
          E-Commerce
        </Link>
        <div>
          <Link href="/products" className="text-white mr-4">
            Products
          </Link>
          <Link href="/cart" className="text-white mr-4">
            Cart
          </Link>
          <Link href="/orders" className="text-white mr-4">
            Orders
          </Link>
          <Link href="/login" className="text-white">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}