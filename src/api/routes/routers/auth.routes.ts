import { Router } from 'express';
import { authHandlers } from '@/api/routes/handlers/auth.handlers';
export const authRouter = () => {
    const router = Router();
    const { getAuth, postAuth  } = authHandlers();
    router.get('', getAuth);
    router.post('', postAuth);
    return router;
}