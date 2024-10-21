import { json } from 'body-parser';
import compression from 'compression';
import { Express } from 'express';
import cookie from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';

export const middleware = async (app: Express) => {
   app.use(json());
   app.use(cookie());
   app.use(cors());
   app.use(morgan('tiny'));
   app.use(compression());
}