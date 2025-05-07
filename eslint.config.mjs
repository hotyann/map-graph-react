import fs from 'fs';
import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jestPlugin from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

const gitignorePatterns = fs
  .readFileSync('.gitignore', 'utf8')
  .split('\n')
  .filter((line) => line && !line.startsWith('#'));

export default [
  {
    ignores: [...gitignorePatterns],
  },
  js.configs.recommended, // ESLint's built-in recommended rules
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jest': jestPlugin,
      'prettier': prettierPlugin,
      'import': importPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules, // TypeScript recommended rules
      ...reactPlugin.configs.recommended.rules, // React recommended rules
      ...prettierConfig.rules, // Prettier rules for code formatting
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'es5' },
      ],
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in scope
      'react/jsx-uses-react': 'off', // Same as above
      'react/prop-types': 'off', // Disable prop-types, as we're using TypeScript
      'no-undef': 'off',
      'no-unused-vars': 'warn', // Warn about unused variables
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'import/order': [
        'error',
        { groups: ['builtin', 'external', 'internal'] },
      ],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
  {
    files: ['webpack.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
