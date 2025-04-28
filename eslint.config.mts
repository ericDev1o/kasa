import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
    {
        languageOptions: {
            parser: tsParser,
        },
        extends: ["react-app", "plugin:@typescript-eslint/recommended"],
        files: ["**/*.ts", "**/*.tsx"],
        rules: { "no-console": "error" },
    },
]);
