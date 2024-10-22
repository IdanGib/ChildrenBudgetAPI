import { ActionsDeps } from '@/interface/api.interface';
import { Request, Response, Router } from 'express';
import { parentsHandlers } from './handlers/parent.handlers';

export const actions = async ({ app, childrenBudget }: ActionsDeps) => {
    const router = Router({});
    const { readParnets } = parentsHandlers(childrenBudget);
    router.get('/parents/:id?', readParnets);
    app.use('/v1', router);
}