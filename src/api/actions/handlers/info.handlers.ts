import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Logger } from '@/lib/logger';
import { Request, Response } from 'express';
import { GetParentInfoArgsSchema, GetBudgetInfoArgsSchema, GetChildInfoArgsSchema, SumBudgetTransactionsSchema } from '@/interface/api.schemas';

export const infoHandlers = (childrenBudget: ChildrenBudget) => {
    const getParentInfo = async (req: Request, res: Response) => {
        try {
            const { success, data } = GetParentInfoArgsSchema.safeParse(req.params);
            const id = data?.id;
            if (!success || !id) {
                res.status(400).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.getParentInfo({ id });
                res.status(200).json({ err: null, result });
            }
        } catch(e: any) {
            Logger.error(e);
            res.status(500).json({ err: e?.message, result: null });
        }
    }

    const getChildInfo = async (req: Request, res: Response) => {
        try {
            const { success, data } = GetChildInfoArgsSchema.safeParse(req.params);
            const id = data?.id;
            if (!success || !id) {
                res.status(400).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.getChildInfo({ id });
                res.status(200).json({ err: null, result });
            }
        } catch(e: any) {
            Logger.error(e);
            res.status(500).json({ err: e?.message, result: null });
        }
    }

    const getBudgetInfo = async (req: Request, res: Response) => {
        try {
            const { success, data } = GetBudgetInfoArgsSchema.safeParse(req.params);
            const id = data?.id;
            if (!success || !id) {
                res.status(400).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.getBudgetInfo({ id });
                res.status(200).json({ err: null, result });
            }
        } catch(e: any) {
            Logger.error(e);
            res.status(500).json({ err: e?.message, result: null });
        }
    }

    const sumBudgetTransactions = async (req: Request, res: Response) => {
        try {
            const { success, data } = SumBudgetTransactionsSchema.safeParse(req.params);
            const budgetId = data?.budgetId;
            if (!success || !budgetId) {
                res.status(400).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.getTransactionsPriceSum({ budgetId });
                res.status(200).json({ err: null, result });
            }
        } catch(e: any) {
            Logger.error(e);
            res.status(500).json({ err: e?.message, result: null });
        }
    }

    return {
        getBudgetInfo,
        getChildInfo,
        getParentInfo,
        sumBudgetTransactions,
    };
}