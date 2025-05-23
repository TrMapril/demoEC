/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_PRODUCT_URL: process.env.NEXT_PUBLIC_API_PRODUCT_URL,
    NEXT_PUBLIC_API_CART_URL: process.env.NEXT_PUBLIC_API_CART_URL,
    NEXT_PUBLIC_API_ORDER_URL: process.env.NEXT_PUBLIC_API_ORDER_URL,
  },
  experimental: {
    forceSwcTransforms: true, // Sử dụng SWC thay vì Babel để tối ưu hóa
  },
    output: 'standalone',
};

module.exports = nextConfig;