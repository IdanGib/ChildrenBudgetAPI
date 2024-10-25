import { Router } from 'express';
import { authHandlers } from '@/api/routes/auth/auth.handlers';
import { Express } from 'express';
import { auth } from '@/api/auth/auth';

export const authRouter = ({ app }: { app: Express }) => {
    const router = Router();
    const { authenticator } = auth({ app });
    const { getAuth, postAuth  } = authHandlers();
    router.get('/google/redirect', getAuth);
    router.post('/google/redirect', postAuth);
    router.get('/google', authenticator);
    return router;
}