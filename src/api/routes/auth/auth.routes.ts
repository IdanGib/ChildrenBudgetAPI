import { Router } from 'express';
import { authHandlers } from '@/api/routes/auth/auth.handlers';
export const authRouter = () => {
    const router = Router();
    const { getAuth, postAuth  } = authHandlers();
    router.get('/google/redirect', getAuth);
    router.post('/google/redirect', postAuth);
    return router;
}