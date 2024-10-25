import { envConfig } from '@/lib/env.config';
import passport from 'passport';
import { Express } from 'express';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
const { AUTH_GOOGLE_ID, AUTH_GOOGLE_REDIRECT, AUTH_GOOGLE_SECRET } = envConfig;

export const auth = ({ app }: { app: Express }) => {
    const googleStrategy = new GoogleStrategy({
        clientID: AUTH_GOOGLE_ID,
        clientSecret: AUTH_GOOGLE_SECRET,
        callbackURL: AUTH_GOOGLE_REDIRECT
    }, function(accessToken, refreshToken, profile, callback) {
        console.log({ accessToken, refreshToken, profile });
        const user = {};
        const err = '';
        callback(err, user, {});
    })
    passport.use(googleStrategy);
    return {
        authenticator: passport.authenticate('google', { 
            scope: ['profile', 'email'], 
            failureRedirect: 'v1/views/login' 
        })
    };
}