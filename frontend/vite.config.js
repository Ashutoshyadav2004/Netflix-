import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		plugins: [react()],
		server: {
			proxy: {
				"/api": {
					target: env.VITE_BACKEND_URL || "http://localhost:5000",
				},
			},
		},
	};
});
