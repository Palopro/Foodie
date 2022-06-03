module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    '@computools/eslint-config-react-native',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars-experimental': 'off',
      },
    },
  ],
};
