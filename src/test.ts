import express, { Request, Response } from 'express';
const test = async () => {
    const app = express();
    app.get('/:key', (req: Request, res: Response) => {
        const { key } = req.params;
        console.log(req.params);
        res.json({ [key]: process.env[key] ?? '' });
    });
    app.get('/',  (req: Request, res: Response) => {
        res.json({ message: 'hello' });
    });
    app.listen(3000, () => console.log('TEST server running on port 3000'));
}

void test();