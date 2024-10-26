import { Router } from "express"
import { viewsHandlers } from "./views.handlers";

export const viewsRouter = () => {
    const router = Router();
    const { index, loginFails } = viewsHandlers();
    router.get('/', index);
    router.get('/login-fails', loginFails);
    return router;
}