import { IDatabase } from '@/database/database.interface';
import { envConfig } from '@/lib/env-config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
const { AUTH_GOOGLE_ID, AUTH_GOOGLE_REDIRECT, AUTH_GOOGLE_SECRET } = envConfig;
import { Request, Response, NextFunction } from 'express';
import { isEmpty } from 'lodash';

export const authentication = ({ db }: { db: IDatabase }) => {
    const googleStrategy = new GoogleStrategy({
        clientID: AUTH_GOOGLE_ID,
        clientSecret: AUTH_GOOGLE_SECRET,
        callbackURL: AUTH_GOOGLE_REDIRECT,
    }, async (accessToken, refreshToken, profile, callback) => {
        try {
            const user = await db.getOrCreateUser({ 
                profileId: profile.id, 
                user: { accessToken, profile } 
            });
            callback(null, user);
        } catch(err) {
            callback(err);
        }        
    });

    passport.use(googleStrategy);

    passport.serializeUser<string>((user, done) => {
        done(null, (user as any)?.id);
    });
      
    passport.deserializeUser<string>(async (id, done) => {
        try {
            const user = await db.getUser({ id });
            done(null, user);
        } catch (err) {
            done(err, null);
        }
       
    });
    
    return {
        authenticate: passport.authenticate('google', { 
            scope: ['profile', 'email']
        }),
        authGuard: (req: Request, res: Response, next: NextFunction) => {
            if (isEmpty(req.user)) {
                res.status(401).json({ message: 'Unauthorized' });
            } else {
                next();
            }
        }
    };
}