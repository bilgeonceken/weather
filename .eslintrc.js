module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': 0,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'default-param-last': 0,
    'consistent-return': 0,
  },
};
