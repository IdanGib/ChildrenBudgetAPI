import { ApiConfig } from "@/interface/api.interface";
import { config } from "dotenv";

config();

export const apiConfig: ApiConfig = {
    port: Number(process.env.API_PORT)
};