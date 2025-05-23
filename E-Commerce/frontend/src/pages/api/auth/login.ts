import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_PRODUCT_URL}/auth/login`,
        req.body
      );
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(error.response?.status || 500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Phương thức ${req.method} không được phép`);
  }
}