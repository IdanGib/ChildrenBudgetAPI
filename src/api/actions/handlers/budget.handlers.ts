import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { commonRead } from './common.handlers';
import { ReadBudgetsResult } from '@idangib/childrenbudget/dist/src/interface/database.interface';

export const budgetHandlers = (childrenBudget: ChildrenBudget) => {
    const readBudgets = commonRead<ReadBudgetsResult>(childrenBudget.readBudgets, ['id', 'childId']);
    return {
        readBudgets,
    };
}