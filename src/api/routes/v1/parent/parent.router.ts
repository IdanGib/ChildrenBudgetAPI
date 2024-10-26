import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { parentHandlers } from '@/api/routes/v1/parent/parent.handlers';

export const parentRouter = (childrenBudget: ChildrenBudget) => {
    const { readParnets, createParnet, updateParent, deleteParent } = parentHandlers(childrenBudget);
    const router = Router();
    router.get('', readParnets);
    router.post('', createParnet);
    router.put('', updateParent);
    router.delete('/:id', deleteParent);
    return router;
}