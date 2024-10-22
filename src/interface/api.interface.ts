import { BudgetSchema, ChildSchema, ParentSchema, ReadParentsArgsSchema, TransactionSchema } from "@/interface/api.schemas";
import { ChildrenBudget } from "@idangib/childrenbudget/dist/src/interface/app.interface";
import { Express } from 'express';
import { z } from "zod";

export interface ApiConfig {
    port: number;
}

export interface ApiDeps {
    config: ApiConfig;
    childrenBudget: ChildrenBudget;
}

export type Parent = z.infer<typeof ParentSchema>;
export type Child = z.infer<typeof ChildSchema>;
export type Transaction = z.infer<typeof TransactionSchema>;
export type Budget = z.infer<typeof BudgetSchema>;
export type ReadParentsArgs = z.infer<typeof ReadParentsArgsSchema>;


export interface ActionsDeps {
    app: Express;
    childrenBudget: ChildrenBudget;
}