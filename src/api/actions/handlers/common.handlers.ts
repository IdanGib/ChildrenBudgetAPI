import { ReadQuertArgs, ReadWhere } from "@/interface/api.interface";
import { ReadQuertArgsSchema } from "@/interface/api.schemas";
import { Logger } from "@/lib/logger";
import { Request, Response } from "express";
import { isEmpty, isUndefined, omit, omitBy, pick } from "lodash";

export const commonRead = <T>(handler: (data: ReadQuertArgs) => Promise<T>, whereKeys: (keyof ReadWhere)[]) => {
    return async (req: Request, res: Response) => {
        try {
            const { offset: qOffset, limit: qLimit, id, childId, parentId } = req.query ?? {};
            const where = omitBy({ id, childId, parentId }, isUndefined);
            const { success, data } = ReadQuertArgsSchema.safeParse({ 
                offset: qOffset, 
                limit: qLimit, 
                where: pick(where, whereKeys),
            });
    
            if (!success || isEmpty(data)) {
                res.status(400).json({ err: 'invalid arguments', result: null });
            } else {
                const result = await handler(data);
                res.status(200).json({ err: null, result });
            }
        } catch(e) {
            Logger.error(e);
            res.status(500).json();
        }
    }
}