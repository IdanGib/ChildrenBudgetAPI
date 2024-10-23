import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { commonRead } from './common.handlers';
import { ReadParentsResult } from '@idangib/childrenbudget/dist/src/interface/database.interface';

export const parentHandlers = (childrenBudget: ChildrenBudget) => {
    const readParnets = commonRead<ReadParentsResult>(childrenBudget.readParents, ['id']);
    return {
        readParnets,
    };
}