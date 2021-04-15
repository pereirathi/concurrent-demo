module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'default-case': 'off',
    'linebreak-style': 'off',
    semi: ['error', 'never'],
    'max-len': ['error', {
      code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true,
    }],

    'no-unused-expressions': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-wrap-multilines': 'off',
    'import/prefer-default-export': 'off',
    "react/react-in-jsx-scope": "off",
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/no-autofocus': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jest/no-mocks-import': 'off',
    'jest/no-disabled-tests': 'off',
  },
}
