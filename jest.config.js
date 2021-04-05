const path = require('path')

module.exports = {
  roots: [path.join(__dirname, '/src')],
  rootDir: path.join(__dirname),
  testEnvironment: 'node',
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  moduleDirectories: [
    'node_modules',
    __dirname,
    path.join(__dirname, '/src'),
  ],
  coverageDirectory: path.join(__dirname, '/coverage/collective'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coveragePathIgnorePatterns: ['.*/__tests__/.*'],
  setupFilesAfterEnv: [require.resolve('./setup-env')],
  watchPlugins: [
    require.resolve('jest-watch-select-projects'),
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
}