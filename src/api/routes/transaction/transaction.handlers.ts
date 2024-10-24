import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { ReadTransactionsResult } from '@idangib/childrenbudget/dist/src/interface/database.interface';
import { CreateTransactionSchema, UpdateTransactionSchema, DeleteTransactionSchema } from '@/interface/api.schemas';
import { isEmpty } from 'lodash';
import { Request, Response } from 'express';
import { Logger } from '@/lib/logger';
import { commonRead } from '@/api/api.common';

export const transactionHandlers = (childrenBudget: ChildrenBudget) => {
    const readTransactions = commonRead<ReadTransactionsResult>(childrenBudget.readTransactions, ['id', 'budgetId']);
    const createTransaction = async (req: Request, res: Response) => {
        try {
            const { success, data } = CreateTransactionSchema.safeParse(req.body);
            if (!success || isEmpty(data)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.createTransaction(data);
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    const updateTransaction = async (req: Request, res: Response) => {
        try {
            const { success, data: args } = UpdateTransactionSchema.safeParse(req.body);
            if (!success || isEmpty(args)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.updateTransaction(args);
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    const deleteTransaction = async (req: Request, res: Response) => {
        try {
            const { success, data } = DeleteTransactionSchema.safeParse(req.params);
            if (!success || isEmpty(data)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.deleteTransaction({ where: data });
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    return { 
        readTransactions, 
        createTransaction, 
        updateTransaction, 
        deleteTransaction 
    };
}