import { readFileSync, existsSync } from 'fs';
import { IEnvConfig } from "@/interface/env.interface";
const env = process.env;

const loadSecret = (path: string = ''): string => {
    if (existsSync(path)) {
        const data = readFileSync(path);
        return data.toString();
    } else {
        console.error(`file not exists: ${path}`);
    }
    return '';
}

class EnvConfig implements IEnvConfig {
    // secrets
    public readonly DB_POSTGRESQL_PASSWORD: string = loadSecret(env.DB_POSTGRESQL_PASSWORD_FILE);
    public readonly DB_POSTGRESQL_USERNAME: string = loadSecret(env.DB_POSTGRESQL_USERNAME_FILE);
    public readonly DB_POSTGRESQL_DATABASE: string = loadSecret(env.DB_POSTGRESQL_DATABASE_FILE);
    public readonly AUTH_SECRET: string = loadSecret(env.AUTH_SECRET_FILE);
    public readonly AUTH_GOOGLE_ID: string = loadSecret(env.AUTH_GOOGLE_ID_FILE);
    public readonly AUTH_GOOGLE_SECRET: string = loadSecret(env.AUTH_GOOGLE_SECRET_FILE);
    
    // envs
    public readonly DB_POSTGRESQL_HOST: string = env.DB_POSTGRESQL_HOST ?? '';
    public readonly DB_POSTGRESQL_PORT: number = Number(env.DB_POSTGRESQL_PORT);
    public readonly API_PORT: number = Number(env.API_PORT)
    public readonly AUTH_GOOGLE_REDIRECT: string = env.AUTH_GOOGLE_REDIRECT ?? '';

}

export const envConfig = new EnvConfig();