const nextJest = require('next/jest')

// @ts-ignore
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

/** @type {import('jest').Config} */
const jestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!./src/**/*.stories.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testMatch: ['**/*.test.*'], // Run only files with ".test." suffix
  testEnvironment: 'jest-environment-jsdom'
}

module.exports = createJestConfig(jestConfig)
