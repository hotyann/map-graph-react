// Import necessary modules and plugins
import fs from 'fs';
import js from '@eslint/js'; // ESLint's built-in JavaScript rules
import typescriptPlugin from '@typescript-eslint/eslint-plugin'; // TypeScript-specific linting rules
import typescriptParser from '@typescript-eslint/parser'; // TypeScript parser for ESLint
import reactPlugin from 'eslint-plugin-react'; // React-specific linting rules
import reactHooksPlugin from 'eslint-plugin-react-hooks'; // React hooks linting rules
import jestPlugin from 'eslint-plugin-jest'; // Jest-specific linting rules for testing
import prettierPlugin from 'eslint-plugin-prettier'; // Prettier integration with ESLint
import prettierConfig from 'eslint-config-prettier'; // Disables ESLint rules that conflict with Prettier
import importPlugin from 'eslint-plugin-import'; // Linting rules for import/export syntax

// Read .gitignore file to ignore files and directories in ESLint
const gitignorePatterns = fs
  .readFileSync('.gitignore', 'utf8')
  .split('\n')
  .filter((line) => line && !line.startsWith('#')); // Exclude comments and empty lines

export default [
  {
    // Ignore files and directories listed in .gitignore
    ignores: [...gitignorePatterns],
  },
  js.configs.recommended, // Use ESLint's built-in recommended rules for JavaScript
  {
    // Apply these rules to TypeScript and JavaScript files
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 2021, // Enable ECMAScript 2021 features
        sourceType: 'module', // Use ES modules
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin, // TypeScript linting rules
      'react': reactPlugin, // React linting rules
      'react-hooks': reactHooksPlugin, // React hooks linting rules
      'jest': jestPlugin, // Jest linting rules for testing
      'prettier': prettierPlugin, // Prettier integration
      'import': importPlugin, // Import/export linting rules
    },
    rules: {
      // TypeScript recommended rules
      ...typescriptPlugin.configs.recommended.rules,

      // React recommended rules
      ...reactPlugin.configs.recommended.rules,

      // Prettier rules for consistent code formatting
      ...prettierConfig.rules,
      'prettier/prettier': [
        'error', // Treat Prettier issues as errors
        { singleQuote: true, trailingComma: 'es5' }, // Prettier configuration
      ],

      // React-specific rules
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in scope
      'react/jsx-uses-react': 'off', // Same as above
      'react/prop-types': 'off', // Disable prop-types, as TypeScript is used for type checking

      // General JavaScript rules
      'no-undef': 'off', // Disable undefined variable checks (handled by TypeScript)
      'no-unused-vars': 'warn', // Warn about unused variables

      // Jest-specific rules
      'jest/no-disabled-tests': 'warn', // Warn about disabled tests
      'jest/no-focused-tests': 'error', // Disallow focused tests (e.g., `test.only`)
      'jest/no-identical-title': 'error', // Disallow duplicate test titles

      // Import/export rules
      'import/order': [
        'error', // Enforce import order
        {
          groups: ['builtin', 'external', 'internal'], // Group imports
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
  {
    // Special rules for Webpack configuration files
    files: ['webpack.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off', // Allow `require` imports in Webpack
    },
  },
];
