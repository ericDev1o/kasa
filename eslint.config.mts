import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
    {
        languageOptions: {
            parser: tsParser,
        },
        extends: ["plugin:@typescript-eslint/recommended"],
        files: ["**/*.ts", "**/*.tsx"],
        rules: {},
    },
]);
