import { Request, Response } from 'express';
import { getFacultys } from '../services/faculty';

export const getFaculty = async (req: Request, res: Response) => {
  try {
    const users = await getFacultys();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};