import express, { Request, Response } from 'express';
import { envConfig } from './lib/env.config';
import { EnvFields } from './interface/env.interface';
const test = async () => {
    const app = express();
    app.get('/:key', (req: Request, res: Response) => {
        const { key } = req.params;
        res.json({ [key]: envConfig[key as EnvFields] ?? '' });
    });
    app.get('/',  (req: Request, res: Response) => {
        res.json({ message: 'hello' });
    });
    app.listen(3000, () => console.log('TEST server running on port 3000'));
}

void test();