import { envConfig } from "@/lib/env.config"
import { Sequelize } from "sequelize";
import { initModels } from "./database.models";
import { DbUser, GetOrCreateUserArgs, GetOrCreateUserResult, GetUserArgs, GetUserResult, IDatabase } from "./database.interface";

export const database = async (): Promise<IDatabase> => {
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
    const { user: userModel } = initModels(sequelize);
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    return {
        getOrCreateUser: async ({ profileId, user }: GetOrCreateUserArgs): Promise<GetOrCreateUserResult> => {
            const [result] = await userModel.findOrCreate({ 
                where: { 'profile.id': profileId }, 
                defaults: user 
            });
            return result?.get();
        },
        getUser: async ({ id }: GetUserArgs): Promise<GetUserResult> => {
            const user = await userModel.findOne({ where: { id } });
            return user?.get();
        }
    };
}