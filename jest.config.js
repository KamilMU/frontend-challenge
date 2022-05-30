const { defaults } = require('jest-config');
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ['src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
  transform: {
    '.(js|jsx)': 'babel-jest',
    '.(ts|tsx)': 'ts-jest',
  },
  verbose: true,
};
