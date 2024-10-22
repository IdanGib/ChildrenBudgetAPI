import { ReadQuertArgsSchema } from '@/interface/api.schemas';
import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Request, Response } from 'express';
import { isEmpty } from 'lodash';

export const parentHandlers = (childrenBudget: ChildrenBudget) => {
    const readParnets = async (req: Request, res: Response) => {
        const { offset: qOffset, limit: qLimit, id } = req.query ?? {};
        
        const { success, data } = ReadQuertArgsSchema.safeParse({ 
            offset: qOffset, 
            limit: qLimit, 
            where: { id }
        });

        if (!success || isEmpty(data)) {
            res.json({ err: 'invalid arguments', result: null });
        } else {
            const { offset, limit, where } = data;
            const result = await childrenBudget.readParents({ 
                where, 
                offset, 
                limit 
            });
            
            res.json({ err: null, result });
        }
    };
    return {
        readParnets,
    };
}