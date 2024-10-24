import { IEnvConfig } from "@/interface/env.interface";
import { config } from "dotenv";

config();
const env = process.env;
class EnvConfig implements IEnvConfig {
    public readonly NPMRC_GITHUB_PACKAGES_AUTH_LINE: string = env.NPMRC_GITHUB_PACKAGES_AUTH_LINE ?? '';
    public readonly DB_POSTGRESQL_HOST: string = env.DB_POSTGRESQL_HOST ?? '';
    public readonly DB_POSTGRESQL_PASSWORD: string = env.DB_POSTGRESQL_PASSWORD ?? '';
    public readonly DB_POSTGRESQL_PORT: number = Number(env.DB_POSTGRESQL_PORT);
    public readonly DB_POSTGRESQL_USERNAME: string = env.DB_POSTGRESQL_USERNAME ?? '';
    public readonly DB_POSTGRESQL_DATABASE: string = env.DB_POSTGRESQL_DATABASE ?? '';
    public readonly API_PORT: number = Number(env.API_PORT)
    public readonly AUTH_SECRET: string = env.AUTH_SECRET ?? '';
    public readonly AUTH_GOOGLE_REDIRECT: string = env.AUTH_GOOGLE_REDIRECT ?? '';
    public readonly AUTH_GOOGLE_ID: string = env.AUTH_GOOGLE_ID ?? '';
    public readonly AUTH_GOOGLE_SECRET: string = env.AUTH_GOOGLE_SECRET ?? '';
}

export const envConfig = new EnvConfig();