import { ActionsDeps } from '@/interface/api.interface';
import { Router } from 'express';
import { parentRouter } from '@/api/routes/v1/parent/parent.router';
import { budgetRouter } from '@/api/routes/v1/budget/budget.router';
import { childRouter } from '@/api/routes/v1/child/child.router';
import { transactionRouter } from '@/api/routes/v1/transaction/transaction.router';
import { infoRouter } from '@/api/routes/v1/info/info.router';
import { authRouter } from '@/api/routes/auth/auth.routes';
import { viewsRouter } from '@/api/routes/views/views.router';
import { authentication } from '@/api/auth/authentication';

export const apiRoutes = async ({ app, childrenBudget, db }: ActionsDeps) => {

    const auth = authentication({ db });
    app.use('/auth', authRouter({ auth }));

    const router = Router({});
    router.use('/parents', parentRouter(childrenBudget));
    router.use('/children', childRouter(childrenBudget));
    router.use('/transacitons', transactionRouter(childrenBudget));
    router.use('/budgets', budgetRouter(childrenBudget));
    router.use('/info', infoRouter(childrenBudget));
    app.use('/v1', auth.authGuard, router);
    
    app.use('/views', viewsRouter());

}