import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { parentHandlers } from '@/api/actions/handlers/parent.handlers';

export const parentRouter = (childrenBudget: ChildrenBudget) => {
    const { readParnets } = parentHandlers(childrenBudget);
    const router = Router();
    router.get('/:id?', readParnets);
    return router;
}