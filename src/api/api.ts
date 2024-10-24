import express, { Express } from 'express';
import { middleware } from '@/api/api.middleware';
import { apiRoutes } from '@/api/routes/api.routes';
import { ApiDeps } from '@/interface/api.interface';
import { common } from '@/api/api.common';
import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';
import { Logger } from '@/lib/logger';

export class Api {
    private readonly app: Express;
    private readonly childrenBudget: ChildrenBudget;

    constructor(protected readonly deps: ApiDeps) {
        this.app = express();
        this.childrenBudget = deps.childrenBudget;
    }

    async run() {
        const { childrenBudget, app, deps: { config: { port } } } = this;
        await middleware(app);
        await apiRoutes({ app, childrenBudget });
        await common(app);
        app.listen(port, () => Logger.log(`[${new Date().toISOString()}] API running on port: ${port}`));
    }
}