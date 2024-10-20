import express, { Request, Response } from 'express';
const app = express();

export class Api {
    run() {
        app.get('/', (req: Request, res: Response) => {
            res.json(req.query);
        });
        app.listen(3000, () => console.log('Api running'));
    }
}