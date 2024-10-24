import { Request, Response, Router } from "express"

export const viewsHandlers = () => {
    const login = async (req: Request, res: Response) => {
        res.render('login', { title: 'Login' });
    }
    return {
        login
    };
}