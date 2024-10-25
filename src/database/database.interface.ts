import sequelize, { Model, ModelCtor, ModelDefined, ModelStatic } from "sequelize";

export interface DbUser {
    id: string;
    profile: any;
    accessToken: string;
}

export interface DbModels {
    user: ModelStatic<Model<DbUser, Omit<DbUser, 'id'>>>;
}