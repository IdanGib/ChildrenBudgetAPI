import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { commonRead } from './common.handlers';
import { ReadChildrenResult } from '@idangib/childrenbudget/dist/src/interface/database.interface';

export const childHandlers = (childrenBudget: ChildrenBudget) => {
    const readChildren = commonRead<ReadChildrenResult>(childrenBudget.readChildren, ['id', 'parentId']);
    return { readChildren };
}