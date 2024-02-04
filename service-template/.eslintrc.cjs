module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  ignorePatterns: ['*.*', '!src/**/*'],
  rules: {
    ...require('@repo/tools/eslint/default.rules.cjs'),
    ...require('@repo/tools/eslint/typescript.cjs')
  }
};
