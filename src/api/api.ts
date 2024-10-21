import express, { Request, Response } from 'express';
import { apiConfig } from '@/config/api.config';
import { router } from '@/api/api.actions';

const app = express();

export class Api {
    run() {
        const { port } = apiConfig;
        app.use('/v1', router);
        app.listen(port, () => console.log('Api running'));
    }
}