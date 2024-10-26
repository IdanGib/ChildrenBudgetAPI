import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { ReadBudgetsResult } from '@idangib/childrenbudget/dist/src/interface/database.interface';
import { Logger } from '@/lib/logger';
import { Request, Response } from 'express';
import { CreateBudgetSchema, DeleteBudgetSchema, UpdateBudgetSchema } from '@/interface/api.schemas';
import { isEmpty } from 'lodash';
import { commonRead } from '@/api/api.common';

export const budgetHandlers = (childrenBudget: ChildrenBudget) => {
    const readBudgets = commonRead<ReadBudgetsResult>(childrenBudget.readBudgets, ['id', 'childId']);
    const createBudget = async (req: Request, res: Response) => {
        try {
            const { success, data } = CreateBudgetSchema.safeParse(req.body);
            if (!success || isEmpty(data)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.createBudget(data);
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    const updateBudget = async (req: Request, res: Response) => {
        try {
            const { success, data: args } = UpdateBudgetSchema.safeParse(req.body);
            if (!success || isEmpty(args)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.updateBudget(args);
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    const deleteBudget = async (req: Request, res: Response) => {
        try {
            const { success, data } = DeleteBudgetSchema.safeParse(req.params);
            if (!success || isEmpty(data)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.deleteBudget({ where: data });
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    return {
        readBudgets,
        createBudget,
        updateBudget,
        deleteBudget,
    };
}