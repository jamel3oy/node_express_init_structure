import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import facRoutes from './routes/faculty';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/faculty', facRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.get('/test', (req: Request, res: Response) => {
    res.send('Hello test, Express with TypeScript!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});