import { json, urlencoded } from 'body-parser';
import compression from 'compression';
import { Express } from 'express';
import cookie from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import { defaults } from '@/config/api.config';
import session from 'express-session';
import passport from 'passport';
import { Sequelize } from 'sequelize';

const { reateLimitConfig, sessionConfig, origins } = defaults;

export const middleware = async (app: Express, db: Sequelize) => {
   app.use(json());
   app.use(urlencoded({ extended: true }));
   app.use(cookie());
   app.use(cors({ origin: origins }));
   app.use(morgan('tiny'));
   app.use(compression());
   app.use(rateLimit(reateLimitConfig));

   const _sessionConfig = sessionConfig(db);
   app.use(session(_sessionConfig));
   _sessionConfig.store.sync();
   
   app.use(passport.initialize());
   app.use(passport.session());
   app.set("trust proxy", 10);
   app.set('view engine', 'pug');
}