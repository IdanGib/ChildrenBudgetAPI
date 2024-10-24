import { Request, Response } from 'express';

export const authHandlers = () => {
    const getAuth = async (req: Request, res: Response) => {
        res.json({ message: '[get] auth with google' });
    }
    const postAuth = async (req: Request, res: Response) => {
        res.json({ message: '[post] auth with google' });
    }
    return {
        getAuth,
        postAuth,
    };
}