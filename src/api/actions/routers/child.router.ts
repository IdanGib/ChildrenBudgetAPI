import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { childHandlers } from '@/api/actions/handlers/child.handlers';

export const childRouter = (childrenBudget: ChildrenBudget) => {
    const { readChildren } = childHandlers(childrenBudget);
    const router = Router();
    router.get('/:id?', readChildren);
    return router;
}