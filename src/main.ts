import { ChildrenBudget } from '@idangib/childrenbudget';
import { DbClientsOptions } from '@idangib/childrenbudget/dist/interface/database.interface';
const main = async () => {
    const bc = await ChildrenBudget({ dbClientOption: DbClientsOptions.MY_SQL });
    bc.budgets.create();
}

void main();


