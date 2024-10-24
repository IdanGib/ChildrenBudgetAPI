import { ApiConfig } from "@/interface/api.interface";
import { envConfig } from "@/lib/env.config";
import { Times } from "@/utils/utils.constants";
import { Options as RateLimitOptions } from "express-rate-limit";

export const apiConfig: ApiConfig = {
    port: envConfig.API_PORT
};

export const defaults = {
    limit: 10,
    offset: 0,
    reateLimitConfig: {
        windowMs: Times.getMinuteInMilliseconds(1),
        limit: 60,
        standardHeaders: true,
        legacyHeaders: false,
        skipSuccessfulRequests: true,
    } as Partial<RateLimitOptions>
};