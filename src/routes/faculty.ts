import express, { Request, Response } from 'express'; 
import { getFaculty } from '../controllers/faculty';

const router = express.Router();

router.get('/', getFaculty);

export default router;