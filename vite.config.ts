/*import { defineConfig } from 'vite'*/
import react from "@vitejs/plugin-react";
import { UserConfig } from "vite";

/** @type { import ('vite').UserConfig} */
export default /*defineConfig*/ {
    plugins: [react()],
} satisfies UserConfig;
