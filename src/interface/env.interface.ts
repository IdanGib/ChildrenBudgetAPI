export interface IEnvConfig {
    NPMRC_GITHUB_PACKAGES_AUTH_LINE: string;
    DB_POSTGRESQL_HOST: string;
    DB_POSTGRESQL_PASSWORD: string;
    DB_POSTGRESQL_PORT: number;
    DB_POSTGRESQL_USERNAME: string;
    DB_POSTGRESQL_DATABASE: string;
    API_PORT: number;
    AUTH_SECRET: string;
    AUTH_GOOGLE_REDIRECT: string;
    AUTH_GOOGLE_ID: string;
    AUTH_GOOGLE_SECRET: string;
}

export type EnvFields = keyof IEnvConfig;