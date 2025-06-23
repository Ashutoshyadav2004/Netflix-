import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(path.dirname(""), "backend/.env") });

export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI,
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
};
