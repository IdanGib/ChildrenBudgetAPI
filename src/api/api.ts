import express, { Express } from 'express';
import { middleware } from '@/api/api.middleware';
import { actions } from '@/api/actions/api.actions';
import { ApiDeps } from '@/interface/api.interface';
import { common } from '@/api/api.common';
import { ChildrenBudget } from '@idangib/childrenbudget/dist/src/interface/app.interface';

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
        await actions({ app, childrenBudget });
        await common(app);
        app.listen(port);
    }
}