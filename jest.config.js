module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  verbose: true,
  // testRunner: 'jest-circus/runner',
};
