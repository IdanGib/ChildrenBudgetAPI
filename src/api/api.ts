import express, { Express } from 'express';
import { middleware } from './api.middleware';
import { actions } from './api.actions';
import { ApiConfig } from '@/interface/api.interface';
import { common } from './api.common';

export class Api {
    private readonly app: Express;
    constructor(protected readonly config: ApiConfig) {
        this.app = express();
    }
    async run() {
        const { app, config: { port } } = this;   
        await middleware(app);
        await actions(app);
        await common(app);
        app.listen(port);
    }
}