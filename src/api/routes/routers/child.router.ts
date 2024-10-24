import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Router } from 'express';
import { childHandlers } from '@/api/routes/handlers/child.handlers';

export const childRouter = (childrenBudget: ChildrenBudget) => {
    const { readChildren, createChild, updateChild, deleteChild } = childHandlers(childrenBudget);
    const router = Router();
    router.get('', readChildren);
    router.post('', createChild);
    router.put('', updateChild);
    router.delete('/:id', deleteChild);
    return router;
}