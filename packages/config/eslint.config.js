// Shared ESLint configuration (Flat Config)
export default {
  ignores: ['**/dist/**', '**/node_modules/**', '**/.turbo/**'],
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
};
