import { Request, Response, Router, Express } from 'express';

export const actions = async (app: Express) => {
    const router = Router({  });
    router.get('/', (req, res) => {
        res.json(req.query);
    });
    app.use('/v1', router);
}