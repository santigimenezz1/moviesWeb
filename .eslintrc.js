module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@next/next"
    ],
    "rules": {
        "@next/next/no-async-client-component": 1, // Cambié `true` a `1` para indicar advertencia
        '@next/next/no-img-element': 'off',
        'jsx-a11y/alt-text': 'off',
    }
}
