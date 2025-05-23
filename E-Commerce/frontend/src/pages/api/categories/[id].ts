import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (req.method === 'GET') {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_PRODUCT_URL}/api/category/${id}`);
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(error.response?.status || 500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Phương thức ${req.method} không được phép`);
  }
}