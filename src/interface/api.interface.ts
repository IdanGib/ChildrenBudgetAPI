import { BudgetSchema, ChildSchema, ParentSchema, ReadQuertArgsSchema, ReadWhereSchema, TransactionSchema, UpdateParentSchema, CreateParentSchema, DeleteParentSchema } from "@/interface/api.schemas";
import { ChildrenBudget } from "@idangib/childrenbudget/dist/src/interface/app.interface";
import { Express } from 'express';
import { TypeOf, z } from "zod";

export interface ApiConfig {
    port: number;
}

export interface ApiDeps {
    config: ApiConfig;
    childrenBudget: ChildrenBudget;
}

export type ApiParent = z.infer<typeof ParentSchema>;
export type ApiChild = z.infer<typeof ChildSchema>;
export type ApiTransaction = z.infer<typeof TransactionSchema>;
export type ApiBudget = z.infer<typeof BudgetSchema>;


export type ApiUpdateParent = z.infer<typeof UpdateParentSchema>;
export type ApiCreateParent = z.infer<typeof CreateParentSchema>;
export type ApiDeleteParent = z.infer<typeof DeleteParentSchema>;

export type ReadWhere = z.infer<typeof ReadWhereSchema>;
export type ReadQuertArgs = z.infer<typeof ReadQuertArgsSchema>;


export interface ActionsDeps {
    app: Express;
    childrenBudget: ChildrenBudget;
}