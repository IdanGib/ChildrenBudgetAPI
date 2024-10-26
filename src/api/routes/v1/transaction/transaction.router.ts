import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { transactionHandlers } from '@/api/routes/v1/transaction/transaction.handlers';

export const transactionRouter = (childrenBudget: ChildrenBudget) => {
    const { readTransactions, createTransaction, updateTransaction, deleteTransaction } = transactionHandlers(childrenBudget);
    const router = Router();
    router.get('', readTransactions);
    router.post('', createTransaction);
    router.put('', updateTransaction);
    router.delete('/:id', deleteTransaction);
    return router;
}