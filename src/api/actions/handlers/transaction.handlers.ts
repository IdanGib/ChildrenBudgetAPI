import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { commonRead } from './common.handlers';
import { ReadTransactionsResult } from '@idangib/childrenbudget/dist/src/interface/database.interface';

export const transactionHandlers = (childrenBudget: ChildrenBudget) => {
    const readTransactions = commonRead<ReadTransactionsResult>(childrenBudget.readTransactions, ['id', 'budgetId']);
    return { readTransactions };
}