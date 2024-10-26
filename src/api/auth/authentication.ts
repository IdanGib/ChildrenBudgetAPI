import { IDatabase } from '@/database/database.interface';
import { envConfig } from '@/lib/env.config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
const { AUTH_GOOGLE_ID, AUTH_GOOGLE_REDIRECT, AUTH_GOOGLE_SECRET } = envConfig;

export const authentication = ({ db }: { db: IDatabase }) => {
    const googleStrategy = new GoogleStrategy({
        clientID: AUTH_GOOGLE_ID,
        clientSecret: AUTH_GOOGLE_SECRET,
        callbackURL: AUTH_GOOGLE_REDIRECT
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

    passport.serializeUser((user, done) => {
        done(null, user);
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
            failureRedirect: 'v1/views/login-fails' 
        }),
        authenticator: passport.authenticate('google', { 
            scope: ['profile', 'email'], 
            failureRedirect: 'v1/views/login' 
        })
    };
}