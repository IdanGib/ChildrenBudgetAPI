import { ActionsDeps } from '@/interface/api.interface';
import { ReadParentsArgsSchema } from '@/interface/api.schemas';
import { Request, Response, Router } from 'express';

export const actions = async ({ app, childrenBudget }: ActionsDeps) => {
    const router = Router({  });
    router.get('/parents/:id', async (req: Request, res: Response) => {
        const { offset, limit } = req.query ?? {};
        const { id } = req.params ?? {};

        const { success, data } = ReadParentsArgsSchema.safeParse({ 
            offset: Number(offset), 
            limit: Number(limit), 
            id 
        });
  
        if (!success) {
            res.json({ err: 'invalid arguments', result: null });
        }

        const result = await childrenBudget.readParents({ 
            where: { id: data?.id }, 
            offset: data?.offset, 
            limit: data?.limit 
        });
        
        res.json({ err: null, result });
    });
    app.use('/v1', router);
}