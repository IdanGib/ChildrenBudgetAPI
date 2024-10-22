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

const ReadWhereSchema = z.object({
    id: z.string(),
    childId: z.string(),
    budgetId: z.string(),
}).partial().refine(({ id, childId, budgetId }) => {
    return id || childId || budgetId;
});

export const ReadQuertArgsSchema = z.object({
    offset: z.coerce.number().default(offset),
    limit: z.coerce.number().default(limit),
    where: ReadWhereSchema 
});
