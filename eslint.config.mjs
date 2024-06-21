import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat(
    {
        baseDirectory: __dirname,
        recommendedConfig: js.configs.recommended,
        allConfig: js.configs.all,
    },
);

export default [
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
    {
        ignores: ["node_modules", "dist"],
        files: ["**/*.ts"],
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tsParser,
            ecmaVersion: 13,
            sourceType: "module",
        },
        rules: {
            indent: ["error", "tab"],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "single"],
            semi: ["error", "always"],
            "no-multiple-empty-lines": [
                "error",
                {
                    max: 1,
                    maxBOF: 0,
                },
            ],
            "object-curly-spacing": ["error", "always"],
            "space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    named: "never",
                    asyncArrow: "always",
                },
            ],
            "sort-imports": [
                "error",
                {
                    ignoreCase: true,
                    ignoreDeclarationSort: true,
                },
            ],
            "@typescript-eslint/ban-types": [
                "error",
                {
                    types: {
                        "{}": false,
                    },
                },
            ],
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
    {
        files: ["**/*.json"],
        rules: {
            quotes: ["error", "double"],
            semi: ["error", "never"],
        },
    },
];
