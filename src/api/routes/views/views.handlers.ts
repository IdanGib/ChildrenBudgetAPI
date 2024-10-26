import { Request, Response } from "express";

export const viewsHandlers = () => {
    const index = async (req: Request, res: Response) => {
        res.render('index', { 
            title: 'Children Budget',
        });
    }
    const loginFails = async (req: Request, res: Response) => {
        res.render('login-fails', { 
            title: 'Error',
            message: 'Fail to login'
        });
    }
    return {
        index,
        loginFails
    };
}