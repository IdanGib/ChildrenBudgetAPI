import { Api } from '@/api/api';
import { apiConfig } from './config/api.config';
import { childrenBudgetApplication } from '@idangib/childrenbudget';
import { dbConfig } from './config/db.config';

const main = async () => {
    const childrenBudget = await childrenBudgetApplication({ postgresql: dbConfig.postgresql });
    if (childrenBudget) {
        const api = new Api({ config: apiConfig, childrenBudget });
        await api.run();
    }
}

void main();


