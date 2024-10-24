import { json } from 'body-parser';
import compression from 'compression';
import { Express } from 'express';
import cookie from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import { defaults } from '@/config/api.config';
import { ExpressAuth } from "@auth/express"
import Google from "@auth/express/providers/google";

const { reateLimitConfig } = defaults;

export const middleware = async (app: Express) => {
   app.use(json());
   app.use(cookie());
   app.use(cors());
   app.use(morgan('tiny'));
   app.use(compression());
   app.use(rateLimit(reateLimitConfig));
   app.set("trust proxy", true)
   app.use("/auth/*", ExpressAuth({ providers: [Google] }));
}