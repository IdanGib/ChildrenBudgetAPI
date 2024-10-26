import { DataTypes, Model, Sequelize } from "sequelize";
import { DbUser } from "@/database/database.interface";

export const initModels = (sequelize: Sequelize) => {
    const user = sequelize.define<Model<DbUser, Omit<DbUser, 'id'>>>('user', {
        id: { 
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        profile: {
            type: DataTypes.JSON,
        },
        accessToken: {
            type: DataTypes.TEXT,
        }
    });
    return {
        user,
    };
}