import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { method } = req;
  try {
    if (method === 'GET') {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ORDER_URL}/api/orders/${id}`);
      res.status(200).json(response.data);
    } else if (method === 'DELETE') {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_ORDER_URL}/api/orders/${id}`);
      res.status(200).json(response.data);
    } else {
      res.setHeader('Allow', ['GET', 'DELETE']);
      res.status(405).end(`Phương thức ${method} không được phép`);
    }
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}