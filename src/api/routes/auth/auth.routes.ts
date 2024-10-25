import { Router } from 'express';
import { authHandlers } from '@/api/routes/auth/auth.handlers';
import { auth } from '@/api/auth/auth';

export const authRouter = ({ auth: { authenticate, authenticator } }: { auth: ReturnType<typeof auth> }) => {
    const router = Router();
    const { getAuth  } = authHandlers();
    router.get('/google/redirect', authenticate, getAuth);
    router.get('/google', authenticator);
    return router;
}