module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        // 'prettier',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'linebreak-style': ['error', 'unix'],
        'import/extensions': ['error', 'never', { jsx: 'always' }], // permitir jsx
        'operator-linebreak': ['none', 'after'],  // Prettier colisiona con airbnb en este aspecto
    },
};
