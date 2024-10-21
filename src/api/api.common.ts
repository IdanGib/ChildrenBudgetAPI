import { Express } from 'express';
export const common = async (app: Express) => {
    app.all('*', (req, res) => {
        res.json({ message: 'not valid route' });
    });
}