import { Request, Response, Router } from 'express';
const router = Router({  });
router.get('/', (req, res) => {
    res.json(req.query);
});
export { router };