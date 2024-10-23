import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { budgetHandlers } from '@/api/actions/handlers/budget.handlers';


export const budgetRouter = (childrenBudget: ChildrenBudget) => {
    const { readBudgets } = budgetHandlers(childrenBudget);
    const router = Router();
    router.get('', readBudgets);
    return router;
}