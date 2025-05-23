import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  try {
    if (method === 'GET') {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_PRODUCT_URL}/api/category`);
      res.status(200).json(response.data);
    } else if (method === 'POST') {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_PRODUCT_URL}/api/category`, req.body);
      res.status(201).json(response.data);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Phương thức ${method} không được phép`);
    }
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}