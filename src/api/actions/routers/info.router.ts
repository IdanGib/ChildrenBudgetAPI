import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { infoHandlers } from '@/api/actions/handlers/info.handlers';

export const infoRouter = (childrenBudget: ChildrenBudget) => {
    const { } = infoHandlers(childrenBudget);
    const router = Router();
    return router;
}