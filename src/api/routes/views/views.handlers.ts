import { envConfig } from "@/lib/env.config";
import { Request, Response, Router } from "express"
const { AUTH_GOOGLE_REDIRECT, AUTH_GOOGLE_ID } = envConfig;
export const viewsHandlers = () => {
    const login = async (req: Request, res: Response) => {
        res.render('login', { 
            title: 'Login', 
            AUTH_GOOGLE_REDIRECT, 
            AUTH_GOOGLE_ID,
        });
    }
    return {
        login
    };
}