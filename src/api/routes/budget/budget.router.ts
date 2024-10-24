import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { budgetHandlers } from '@/api/routes/budget/budget.handlers';


export const budgetRouter = (childrenBudget: ChildrenBudget) => {
    const { readBudgets, createBudget, updateBudget, deleteBudget } = budgetHandlers(childrenBudget);
    const router = Router();
    router.get('', readBudgets);
    router.post('', createBudget);
    router.put('', updateBudget);
    router.delete('/:id', deleteBudget);
    return router;
}