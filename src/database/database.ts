import { envConfig } from "@/lib/env.config"
import { Sequelize } from "sequelize";
import { initModels } from "./database.models";

export const database = async () => {
    const {
        DB_POSTGRESQL_DATABASE: database,
        DB_POSTGRESQL_HOST: host,
        DB_POSTGRESQL_PORT: port,
        DB_POSTGRESQL_USERNAME: username,
        DB_POSTGRESQL_PASSWORD: password,
    } = envConfig;
    const sequelize = new Sequelize({
        username,
        host,
        port,
        database,
        password,
        dialect: 'postgres',
        logging: false,
    });
    const models = initModels(sequelize);
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    return models;
}