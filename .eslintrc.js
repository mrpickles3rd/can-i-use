// https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs
// https://www.npmjs.com/package/eslint-plugin-jest

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'airbnb-base'/* , 'plugin:jest/all' */, 'plugin:jest/recommended', 'plugin:jest/style'/* , 'eslint-config-my-config' */],
  // plugins: ['jest'],
  rules: {
    semi: ['warn', 'always'],
    'jest/no-identical-title': 'error',
  },
  env: {
    browser: true,
  //   'jest/globals': true,
  },
  // ...other config
}
