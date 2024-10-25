import { Request, Response } from 'express';

export const authHandlers = () => {
    const getAuth = async (req: Request, res: Response) => {
        res.json({ message: '[get] auth with google' });
    }
    return {
        getAuth,
    };
}