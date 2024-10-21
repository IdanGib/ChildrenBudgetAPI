import { Express } from 'express';
export const middleware = async (app: Express) => {
   app.use((req, res, next) => {
      next();
   });
}