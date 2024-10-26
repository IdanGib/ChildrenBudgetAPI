import { ActionsDeps } from '@/interface/api.interface';
import { Router } from 'express';
import { parentRouter } from '@/api/routes/parent/parent.router';
import { budgetRouter } from '@/api/routes/budget/budget.router';
import { childRouter } from '@/api/routes/child/child.router';
import { transactionRouter } from '@/api/routes/transaction/transaction.router';
import { infoRouter } from './info/info.router';
import { authRouter } from './auth/auth.routes';
import { viewsRouter } from './views/views.router';
import { authentication } from '../auth/authentication';

export const apiRoutes = async ({ app, childrenBudget, db }: ActionsDeps) => {

    const auth = authentication({ db });
    app.use('/auth', authRouter({ auth }));

    const router = Router({});
    router.use('/parents', parentRouter(childrenBudget));
    router.use('/children', childRouter(childrenBudget));
    router.use('/transacitons', transactionRouter(childrenBudget));
    router.use('/budgets', budgetRouter(childrenBudget));
    router.use('/info', infoRouter(childrenBudget));
    router.use('/views', viewsRouter());
    app.use('/v1', auth.authGuard, router);
}