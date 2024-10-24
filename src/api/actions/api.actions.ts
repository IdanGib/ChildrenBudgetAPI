import { ActionsDeps } from '@/interface/api.interface';
import { Router } from 'express';
import { parentRouter } from '@/api/actions/routers/parent.router';
import { budgetRouter } from '@/api/actions/routers/budget.router';
import { childRouter } from '@/api/actions/routers/child.router';
import { transactionRouter } from '@/api/actions/routers/transaction.router';
import { infoRouter } from './routers/info.router';

export const actions = async ({ app, childrenBudget }: ActionsDeps) => {
    const router = Router({});

    router.use('/parents', parentRouter(childrenBudget));
    router.use('/children', childRouter(childrenBudget));
    router.use('/transacitons', transactionRouter(childrenBudget));
    router.use('/budgets', budgetRouter(childrenBudget));
    router.use('/info', infoRouter(childrenBudget));
    
    app.use('/v1', router);
}