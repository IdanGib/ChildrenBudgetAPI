import { ReadParentsArgsSchema } from '@/interface/api.schemas';
import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Request, Response } from 'express';
import { isEmpty } from 'lodash';

export const parentHandlers = (childrenBudget: ChildrenBudget) => {
    const readParnets = async (req: Request, res: Response) => {
        const { offset, limit } = req.query ?? {};
        const { id } = req.params ?? {};

        const { success, data } = ReadParentsArgsSchema.safeParse({ 
            offset, 
            limit, 
            id 
        });
  
        if (!success || isEmpty(data)) {
            res.json({ err: 'invalid arguments', result: null });
        } else {
            const result = await childrenBudget.readParents({ 
                where: { id: data?.id }, 
                offset: data?.offset, 
                limit: data?.limit 
            });
            
            res.json({ err: null, result });
        }
    };
    return {
        readParnets,
    };
}