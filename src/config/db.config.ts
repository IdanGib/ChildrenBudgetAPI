import { envConfig } from "@/lib/env.config";
import { PostgreSqlConfig } from "@idangib/childrenbudget/dist/src/interface/database.interface";
const {
    DB_POSTGRESQL_USERNAME,
    DB_POSTGRESQL_DATABASE,
    DB_POSTGRESQL_HOST,
    DB_POSTGRESQL_PASSWORD,
    DB_POSTGRESQL_PORT
} = envConfig;
const postgresql: PostgreSqlConfig = {
    username: DB_POSTGRESQL_USERNAME,
    port: DB_POSTGRESQL_PORT,
    password: DB_POSTGRESQL_PASSWORD,
    database: DB_POSTGRESQL_DATABASE,
    host: DB_POSTGRESQL_HOST,
};

export const dbConfig = { postgresql };