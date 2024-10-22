import { defaults } from "@/config/api.config";
import { z } from "zod";
const { limit, offset } = defaults; 
export const ParentSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    imageUrl: z.string().optional()
});

export const BudgetSchema = z.object({
    childId: z.string(),
    value: z.number(),
    expirationDate: z.date().optional(),
    currency: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    margin: z.boolean().optional().default(false)
});

export const ChildSchema = z.object({
    name: z.string().optional(),
    imageUrl: z.string().optional(),
    parentId: z.string(),
    birthDate: z.date().optional(),
});

export const TransactionSchema = z.object({
    price: z.number(),
    title: z.string().optional(),
    description: z.string().optional(),
    timestamp: z.date().optional(),
    budgetId: z.string(),
});

const ReadCommonArgsSchema = z.object({
    offset: z.coerce.number().default(offset),
    limit: z.coerce.number().default(limit),
    id: z.string().optional(),
});

export const ReadParentsArgsSchema = ReadCommonArgsSchema.extend({});

export const ReadChildArgsSchema = ReadCommonArgsSchema.extend({
    parentId: z.string().optional()
});

export const ReadBudgetArgsSchema = ReadCommonArgsSchema.extend({
    childId: z.string().optional()
});

export const ReadTransactionArgsSchema = ReadCommonArgsSchema.extend({
    budgetId: z.string().optional()
});