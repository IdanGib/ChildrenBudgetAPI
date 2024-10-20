import { childrenBudgetApplication } from '@idangib/childrenbudget';
import { ChildrenBudgetConfig } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { postgresql } from './db.config';

const main = async () => {
    const config: ChildrenBudgetConfig = {
        postgresql,
    };
    
    const app = await childrenBudgetApplication(config);
    await app?.shutdown();
}

void main();


