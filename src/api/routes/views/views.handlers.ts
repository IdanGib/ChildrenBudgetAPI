import { Request, Response } from "express";

export const viewsHandlers = () => {
    const index = async (req: Request, res: Response) => {
        res.render('index', { 
            title: 'Children Budget',
        });
    }
    return {
        index,
    };
}