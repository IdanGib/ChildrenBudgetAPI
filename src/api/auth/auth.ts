import { envConfig } from '@/lib/env.config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { DbModels } from '@/database/database.interface';
const { AUTH_GOOGLE_ID, AUTH_GOOGLE_REDIRECT, AUTH_GOOGLE_SECRET } = envConfig;

export const auth = ({ db }: { db: DbModels }) => {
    const googleStrategy = new GoogleStrategy({
        clientID: AUTH_GOOGLE_ID,
        clientSecret: AUTH_GOOGLE_SECRET,
        callbackURL: AUTH_GOOGLE_REDIRECT
    }, (accessToken, refreshToken, profile, callback) => {
        db.user.findOrCreate({ 
            where: { 'profile.id': profile.id },
            defaults: {
                accessToken, profile, 
            } 
        })
        .then(([user,]) => {
            callback(null, user.get());
        })
        .catch(err => {
            callback(err);
        });
        
    })
    passport.use(googleStrategy);
    passport.serializeUser((user, done) => {
        done(null, user);
    });
      
    passport.deserializeUser<string>((id, done) => {
        db.user.findOne({ where: { id } })
        .then(user => {
            done(null, user?.get());
        }).catch(err => {
            done(err, null);
        });
    });
    return {
        authenticate: passport.authenticate('google', { failureRedirect: 'v1/views/login' }),
        authenticator: passport.authenticate('google', { 
            scope: ['profile', 'email'], 
            failureRedirect: 'v1/views/login' 
        })
    };
}