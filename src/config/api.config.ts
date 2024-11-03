import { ApiConfig } from "@/interface/api.interface";
import { envConfig } from "@/lib/env-config";
import { Times } from "@/utils/utils.constants";
import { Options as RateLimitOptions } from "express-rate-limit";
import session from "express-session";
import { Sequelize } from "sequelize";
import sessionStore from 'connect-session-sequelize';
import { compact } from "lodash";

const { AUTH_SECRET, CORS_ORIGIN_WEB_APP } = envConfig;

export const apiConfig: ApiConfig = {
    port: envConfig.API_PORT
};

export const defaults = {
    limit: 10,
    offset: 0,
    origins: compact([CORS_ORIGIN_WEB_APP]),
    sessionConfig: (db: Sequelize) => {
        const SequelizeStore = sessionStore(session.Store);
        const store = new SequelizeStore({ db });
        return { 
            secret: AUTH_SECRET, 
            resave: false, 
            saveUninitialized: true,
            store,
        }
    },
    reateLimitConfig: {
        windowMs: Times.getMinuteInMilliseconds(1),
        limit: 30,
        standardHeaders: true,
        legacyHeaders: false,
        skipSuccessfulRequests: false,
    } as Partial<RateLimitOptions>
};