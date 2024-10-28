import { Router } from "express"
import { viewsHandlers } from "@/api/routes/views/views.handlers";

export const viewsRouter = () => {
    const router = Router();
    const { index } = viewsHandlers();
    router.get('/', index);
    return router;
}