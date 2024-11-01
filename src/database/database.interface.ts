import { Profile } from 'passport-google-oauth20';
import { Sequelize } from 'sequelize';
export interface DbUser {
    id: string;
    profile: Profile;
    accessToken: string;
}

export type GetOrCreateUser = (args: { profileId: string; user: Omit<DbUser, 'id'> }) => Promise<DbUser | undefined>;
export type GetUser = (args: { id: string; }) => Promise<DbUser | undefined>;

export interface IDatabase {
    getOrCreateUser: GetOrCreateUser;
    getUser: GetUser;
    sequelize: Sequelize;
} 

export type GetOrCreateUserArgs = Parameters<GetOrCreateUser>[0];
export type GetOrCreateUserResult = Awaited<ReturnType<GetOrCreateUser>>;

export type GetUserArgs = Parameters<GetUser>[0];
export type GetUserResult = Awaited<ReturnType<GetUser>>;