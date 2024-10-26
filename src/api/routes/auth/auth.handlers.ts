import { Request, Response, NextFunction } from 'express';

export const authHandlers = () => {
    const callback = async (req: Request, res: Response) => {
        res.json({ message: '[get] auth with google' });
    }
    const logout = async (req: Request, res: Response, next: NextFunction) => {
        req.logout((err) => {
            if (err) { 
                return next(err); 
            }
            res.json({ message: 'logged out' });
        });
    }
    return {
        callback,
        logout
    };
}