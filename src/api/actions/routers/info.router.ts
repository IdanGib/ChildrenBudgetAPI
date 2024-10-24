import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { infoHandlers } from '@/api/actions/handlers/info.handlers';

export const infoRouter = (childrenBudget: ChildrenBudget) => {
    const { getBudgetInfo, getParentInfo, getChildInfo, sumBudgetTransactions } = infoHandlers(childrenBudget);
    const router = Router();
    router.get('/parent/:id', getParentInfo);
    router.get('/child/:id', getChildInfo);
    router.get('/budget/:id', getBudgetInfo);
    router.get('/budget/sum/:id', sumBudgetTransactions);
    return router;
}