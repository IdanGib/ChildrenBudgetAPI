import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { commonRead } from './common.handlers';
import { ReadChildrenResult } from '@idangib/childrenbudget/dist/src/interface/database.interface';
import { CreateChildSchema, DeleteChildSchema, UpdateChildSchema } from '@/interface/api.schemas';
import { isEmpty } from 'lodash';
import { Request, Response } from 'express';
import { Logger } from '@/lib/logger';

export const childHandlers = (childrenBudget: ChildrenBudget) => {
    const readChildren = commonRead<ReadChildrenResult>(childrenBudget.readChildren, ['id', 'parentId']);
    const createChild = async (req: Request, res: Response) => {
        try {
            const { success, data } = CreateChildSchema.safeParse(req.body);
            if (!success || isEmpty(data)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.createChild(data);
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    const updateChild = async (req: Request, res: Response) => {
        try {
            const { success, data: args } = UpdateChildSchema.safeParse(req.body);
            if (!success || isEmpty(args)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.updateChild(args);
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    const deleteChild = async (req: Request, res: Response) => {
        try {
            const { success, data } = DeleteChildSchema.safeParse(req.params);
            if (!success || isEmpty(data)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.deleteChild({ where: data });
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    return { 
        readChildren,
        createChild,
        updateChild,
        deleteChild,
    };
}