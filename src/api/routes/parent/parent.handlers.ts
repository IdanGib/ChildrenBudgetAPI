import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { ReadParentsResult } from '@idangib/childrenbudget/dist/src/interface/database.interface';
import { Request, Response } from 'express';
import { Logger } from '@/lib/logger';
import { CreateParentSchema, DeleteParentSchema, UpdateParentSchema } from '@/interface/api.schemas';
import { isEmpty } from 'lodash';
import { commonRead } from '@/api/api.common';

export const parentHandlers = (childrenBudget: ChildrenBudget) => {
    const readParnets = commonRead<ReadParentsResult>(childrenBudget.readParents, ['id']);
    const createParnet = async (req: Request, res: Response) => {
        try {
            const { success, data } = CreateParentSchema.safeParse(req.body);
            if (!success || isEmpty(data)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.createParent(data);
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    const updateParent = async (req: Request, res: Response) => {
        try {
            const { success, data: args } = UpdateParentSchema.safeParse(req.body);
            if (!success || isEmpty(args)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.updateParent(args);
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    const deleteParent = async (req: Request, res: Response) => {
        try {
            const { success, data } = DeleteParentSchema.safeParse(req.params);
            if (!success || isEmpty(data)) {
                res.status(200).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await childrenBudget.deleteParent({ where: data });
                res.status(200).json({ err: null, result })
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json({ err: 'some error', result: null });
        }
    }
    return {
        readParnets,
        createParnet,
        updateParent,
        deleteParent,
    };
}