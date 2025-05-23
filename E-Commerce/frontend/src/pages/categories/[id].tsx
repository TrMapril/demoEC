import axios from 'axios';
import type { Category } from '../../lib/types';

interface CategoryDetailProps {
  category: Category | null;
}

export default function CategoryDetail({ category }: CategoryDetailProps) {
  if (!category) return <div className="container mx-auto p-4">Danh mục không tồn tại</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
      <p className="text-gray-600">{category.description}</p>
    </div>
  );
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  try {
    const response = await axios.get(`http://product:8080/api/category/${params.id}`);
    return {
      props: {
        category: response.data,
      },
    };
  } catch (error) {
    console.error('Lỗi khi lấy danh mục:', error);
    return {
      props: {
        category: null,
      },
    };
  }
}