module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    // 'prettier'
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
    'jest'
  ],
  rules: {
    // "semi": ["single", "always"],
    quotes: ['error', 'single'],
    semi: ['error', 'never'], // Regla especial para no usar semicolons.
    'import/extensions': ['error', 'never', { jsx: 'always' }], // permitir jsx

  },
}
