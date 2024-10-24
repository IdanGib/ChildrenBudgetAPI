import { Router } from "express"
import { viewsHandlers } from "./views.handlers";

export const viewsRouter = () => {
    const router = Router();
    const { login } = viewsHandlers();
    router.get('/login', login);
    return router;
}