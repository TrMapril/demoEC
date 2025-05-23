import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold">Cửa Hàng</a>
          </Link>
          <div className="space-x-4">
            <Link href="/products">
              <a className="hover:underline">Sản phẩm</a>
            </Link>
            <Link href="/categories">
              <a className="hover:underline">Danh mục</a>
            </Link>
            <Link href="/cart">
              <a className="hover:underline">Giỏ hàng</a>
            </Link>
            <Link href="/orders">
              <a className="hover:underline">Đơn hàng</a>
            </Link>
            <Link href="/login">
              <a className="hover:underline">Đăng nhập</a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Cửa Hàng. All rights reserved.</p>
      </footer>
    </div>
  );
}