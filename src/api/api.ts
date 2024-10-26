import express, { Express } from 'express';
import { middleware } from '@/api/api.middleware';
import { apiRoutes } from '@/api/routes/api.routes';
import { ApiDeps } from '@/interface/api.interface';
import { Logger } from '@/lib/logger';

export class Api {
    private readonly app: Express;
    constructor(private readonly deps: ApiDeps) {
        this.app = express();
    }

    async run() {
        const { app, deps: { config: { port }, childrenBudget, db } } = this;
        await middleware(app);
        await apiRoutes({ app, childrenBudget, db });
        app.listen(port, () => Logger.log(`[${new Date().toISOString()}] API running on port: ${port}`));
    }
}