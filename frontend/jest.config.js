const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

console.log(moduleNameMapper);

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper,
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
