import { Router } from 'express';
import { authHandlers } from '@/api/routes/auth/auth.handlers';
import { authentication } from '@/api/auth/authentication';

export const authRouter = ({ 
    auth: { authenticate, authenticator } 
}: { auth: ReturnType<typeof authentication> }) => {
    const router = Router();
    const { callback, logout  } = authHandlers();
    
    router.get('/google/login', authenticator);
    router.get('/google/callback', authenticate, callback);
    router.get('/google/logout', logout);

    return router;
}