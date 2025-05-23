import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  try {
    if (method === 'POST') {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_CART_URL}/cart`, req.body);
      res.status(201).json(response.data);
    } else if (method === 'DELETE') {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_CART_URL}/cart`, {
        data: req.body,
      });
      res.status(200).json(response.data);
    } else {
      res.setHeader('Allow', ['POST', 'DELETE']);
      res.status(405).end(`Phương thức ${method} không được phép`);
    }
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}