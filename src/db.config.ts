import { PostgreSqlConfig } from "@idangib/childrenbudget/dist/src/interface/database.interface";
import { config } from "dotenv";
config();

const {
    DB_POSTGRESQL_HOST = '',
    DB_POSTGRESQL_PASSWORD = '',
    DB_POSTGRESQL_PORT = 0,
    DB_POSTGRESQL_USERNAME = '', 
    DB_POSTGRESQL_DATABASE = '',
} = process.env;

export const postgresql: PostgreSqlConfig = {
    username: DB_POSTGRESQL_USERNAME,
    port: Number(DB_POSTGRESQL_PORT),
    password: DB_POSTGRESQL_PASSWORD,
    database: DB_POSTGRESQL_DATABASE,
    host: DB_POSTGRESQL_HOST,
};