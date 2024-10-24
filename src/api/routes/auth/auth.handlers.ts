import { envConfig } from '@/lib/env.config';
import { Request, Response } from 'express';

export const authHandlers = () => {
    const getAuth = async (req: Request, res: Response) => {
        res.redirect(envConfig.AUTH_GOOGLE_REDIRECT);
    }
    const postAuth = async (req: Request, res: Response) => {}
    return {
        getAuth,
        postAuth,
    };
}