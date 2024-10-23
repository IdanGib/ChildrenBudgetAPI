import { ApiConfig } from "@/interface/api.interface";
import { Times } from "@/utils/utils.constants";
import { config } from "dotenv";
import { Options as RateLimitOptions } from "express-rate-limit";

config();

export const apiConfig: ApiConfig = {
    port: Number(process.env.API_PORT)
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