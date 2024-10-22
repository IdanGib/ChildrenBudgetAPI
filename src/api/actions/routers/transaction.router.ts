import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { transactionHandlers } from '@/api/actions/handlers/transaction.handlers';

export const transactionRouter = (childrenBudget: ChildrenBudget) => {
    const { readTransactions } = transactionHandlers(childrenBudget);
    const router = Router();
    router.get('/:id?', readTransactions);
    return router;
}