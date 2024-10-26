import { Router } from "express"
import { viewsHandlers } from "@/api/routes/views/views.handlers";

export const viewsRouter = () => {
    const router = Router();
    const { index, loginFails } = viewsHandlers();
    router.get('/', index);
    router.get('/login-fails', loginFails);
    return router;
}