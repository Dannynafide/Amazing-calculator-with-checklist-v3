module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/extensions': [
      // airbnb ESLint config leads the problem.
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/no-unused-prop-types': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test.{ts,tsx,js}', // repos with a single test file
          'test-*.{ts,tsx,js}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{ts,tsx,js}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.ts', // jest config
          '**/jest.setup.ts', // jest setup
          '**/setupTests.js',
        ],
        optionalDependencies: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {paths: ['src'], extensions: ['.js', '.jsx', '.ts', '.tsx']},
    },
  },
};
