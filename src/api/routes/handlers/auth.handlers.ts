import { Request, Response } from 'express';

export const authHandlers = () => {
    const getAuth = async (req: Request, res: Response) => {}
    const postAuth = async (req: Request, res: Response) => {}
    return {
        getAuth,
        postAuth,
    };
}