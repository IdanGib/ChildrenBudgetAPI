import { ReadParentsArgsSchema } from '@/interface/api.schemas';
import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Request, Response } from 'express';
import { isEmpty } from 'lodash';

export const childHandlers = (childrenBudget: ChildrenBudget) => {
    const readChildren = async (req: Request, res: Response) => {
        res.json({ err: null, result: null });
    }
    return { readChildren };
}