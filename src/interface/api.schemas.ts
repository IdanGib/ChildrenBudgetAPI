import { z } from "zod";

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

export const ReadParentsArgsSchema = z.object({
    offset: z.number(),
    limit: z.number(),
    id: z.string(),
});