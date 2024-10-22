import { ReadParentsArgsSchema } from '@/interface/api.schemas';
import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Request, Response } from 'express';
import { isEmpty } from 'lodash';

export const budgetHandlers = (childrenBudget: ChildrenBudget) => {
    const readBudgets = async (req: Request, res: Response) => {
        res.json({ err: null, result: null });
    }
    return {
        readBudgets,
    };
}