import { config } from "dotenv";

config();

export const apiConfig = {
    port: Number(process.env.API_PORT)
};