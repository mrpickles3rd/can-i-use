import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:jest/style",
), {
    languageOptions: {
        globals: {
            ...globals.browser,
            isDefined: true,
            isfunction: true,
            updateDOM: true,
        },
    },
    ignores: [
        "src/Submodules",
    ],
    rules: {
        semi: ["warn", "always"],
        "jest/no-identical-title": "error",
        "max-len": "off",
        "semi": "error",
        "no-console": "off",
    },
}];