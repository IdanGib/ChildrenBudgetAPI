import { ApiConfig } from "@/interface/api.interface";
import { config } from "dotenv";

config();

export const apiConfig: ApiConfig = {
    port: Number(process.env.API_PORT)
};

export const defaults = {
    limit: 10,
    offset: 0,
};