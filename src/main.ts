import { Api } from '@/api/api';
import { apiConfig } from '@/config/api.config';
import { childrenBudgetApplication } from '@idangib/childrenbudget';
import { dbConfig } from '@/config/db.config';
import { Logger } from '@/lib/logger';
import { database } from '@/database/database';

const main = async () => {
    try {
        const db = await database();
        const childrenBudget = await childrenBudgetApplication({ postgresql: dbConfig.postgresql });
        if (childrenBudget) {
            const api = new Api({ config: apiConfig, childrenBudget, db });
            await api.run();
        }
    } catch (e) {
        Logger.error('Main error:', e);
    }
}

void main();