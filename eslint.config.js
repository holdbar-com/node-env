import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import node from 'eslint-plugin-n';
import preferArrow from 'eslint-plugin-prefer-arrow';
import promise from 'eslint-plugin-promise';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    ignores: ['**/*.d.ts', 'node_modules/**/*'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
      globals: globals.node,
    },
    plugins: {
      promise,
      '@typescript-eslint': ts,
      unicorn,
      'eslint-plugin-prefer-arrow': preferArrow,
      node,
      prettier,
    },
    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended'].rules,
      // Disabling ident rule, because indentation is being handled by prettier.
      /*indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          ArrayExpression: 1,
          ObjectExpression: 1,
          offsetTernaryExpressions: true,
          flatTernaryExpressions: false,
          FunctionDeclaration: { body: 1, parameters: 1 },
          FunctionExpression: { body: 1, parameters: 1 },
          CallExpression: { arguments: 1 },
          MemberExpression: 1,
        },
      ],*/
      'no-console': 'error',
      'no-debugger': 'error',
      'node/no-process-exit': 'off',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-private-class-members': 'error',
      'require-atomic-updates': 'error',
      'guard-for-in': 'error',
      'new-parens': 'error',
      'no-eval': 'error',
      'no-new-wrappers': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      radix: 'error',
      'valid-typeof': 'off',
      camelcase: 'error',
      'consistent-this': ['error', 'self'],
      curly: 'error',
      'default-case-last': 'error',
      eqeqeq: 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'new-cap': 'error',
      'no-bitwise': 'error',
      'no-delete-var': 'error',
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      'no-return-assign': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error',
      'no-undef-init': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'require-await': 'error',
      'require-unicode-regexp': 'error',
      yoda: 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-regexp-exec': 'error',
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            Object: {
              message: 'Avoid using the `Object` type. Did you mean `object`?',
            },
            Function: {
              message:
                'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
            },
            Boolean: {
              message:
                'Avoid using the `Boolean` type. Did you mean `boolean`?',
            },
            Number: {
              message: 'Avoid using the `Number` type. Did you mean `number`?',
            },
            String: {
              message: 'Avoid using the `String` type. Did you mean `string`?',
            },
            Symbol: {
              message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
            },
          },
        },
      ],
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/consistent-indexed-object-style': [
        'error',
        'index-signature',
      ],
      'node/shebang': 'off',
      'node/no-missing-import': 'off',
      'node/no-unpublished-import': 'off',
      'node/no-deprecated-api': [
        'error',
        {
          ignoreModuleItems: ['url.parse'],
        },
      ],
      'node/prefer-global/buffer': 'error',
      'node/prefer-global/console': 'error',
      'node/prefer-global/process': 'error',
      'node/prefer-global/text-decoder': 'error',
      'node/prefer-global/text-encoder': 'error',
      'node/prefer-global/url-search-params': 'error',
      'node/prefer-global/url': 'error',
      'node/prefer-promises/dns': 'error',
      'node/prefer-promises/fs': 'error',
      'node/no-unsupported-features/es-syntax': 'off',
      'node/file-extension-in-import': 'off',
      'node/no-restricted-import': [
        'error',
        [
          {
            name: 'assert',
            message: 'Please use node:assert/strict instead.',
          },
          {
            name: 'assert/strict',
            message: 'Please use node:assert/strict instead.',
          },
          {
            name: 'node:assert',
            message: 'Please use node:assert/strict instead.',
          },
          {
            name: 'async_hooks',
            message: 'Please use node:async_hooks instead.',
          },
          { name: 'buffer', message: 'Please use node:buffer instead.' },
          {
            name: 'child_process',
            message: 'Please use node:child_process instead.',
          },
          { name: 'cluster', message: 'Please use node:cluster instead.' },
          { name: 'console', message: 'Please use node:console instead.' },
          {
            name: 'constants',
            message:
              'Please use constants property exposed by the relevant module instead.',
          },
          {
            name: 'node:constants',
            message:
              'Please use constants property exposed by the relevant module instead.',
          },
          { name: 'crypto', message: 'Please use node:crypto instead.' },
          { name: 'dgram', message: 'Please use node:dgram instead.' },
          {
            name: 'diagnostics_channel',
            message: 'Please use node:diagnostics_channel instead.',
          },
          { name: 'dns', message: 'Please use node:dns/promise instead.' },
          {
            name: 'node:dns',
            message: 'Please use node:dns/promises instead.',
          },
          {
            name: 'dns/promises',
            message: 'Please use node:dns/promises instead.',
          },
          { name: 'domains', message: 'Module is pending deprecation.' },
          { name: 'node:domains', message: 'Module is pending deprecation.' },
          { name: 'events', message: 'Please use node:events instead.' },
          { name: 'fs', message: 'Please use node:fs/promises instead.' },
          {
            name: 'node:fs',
            message: 'Please use node:fs/promises instead.',
          },
          {
            name: 'fs/promises',
            message: 'Please use node:fs/promises instead.',
          },
          { name: 'os', message: 'Please use node:os instead.' },
          { name: 'http', message: 'Please use node:http instead.' },
          { name: 'http2', message: 'Please use node:https instead.' },
          { name: 'https', message: 'Please use node:http2 instead.' },
          { name: 'path', message: 'Please use node:path instead.' },
          { name: 'process', message: 'Please use node:process instead.' },
          {
            name: 'timers',
            message: 'Please use node:timers/promises instead.',
          },
          {
            name: 'timers/promises',
            message: 'Please use node:timers/promises instead.',
          },
          {
            name: 'node:timers',
            message: 'Please use node:timers/promises instead.',
          },
          {
            name: 'querystring',
            message: 'Please use URLSearchParams API instead.',
          },
          { name: 'url', message: 'Please use node:url instead.' },
        ],
      ],
      'node/no-extraneous-import': 'off',
    },
  },
  {
    files: ['test/**/*.ts'],
    ignores: ['test/**/*.d.ts'],
    languageOptions: {
      globals: globals.mocha,
    },
    rules: {
      'no-debugger': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
  {
    files: ['bin/**/*.ts'],
    rules: {
      'no-console': 'off',
      'no-process-exit': 'off',
      'node/no-unpublished-bin': 'error',
    },
  },
];
