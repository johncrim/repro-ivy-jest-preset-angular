// Commented out, b/c ngcc is run during postinstall step
// require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  preset: 'jest-preset-angular/presets/defaults-esm',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    }
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|js)?(x)",
    "**/+(*.)+(spec|test).+(ts|js)?(x)"
  ],
  cacheDirectory: './.jest-cache',
  roots: ['<rootDir>/apps/', '<rootDir>/libs/', '<rootDir>/test-cases/'],
  reporters: [
    'default',
    // ['jest-junit', {
    //   outputDirectory: 'dist/test/junit/jest',
    //   outputName: 'jest-junit.xml',
    // }]
  ],
  // transform: {
  //   '^.+\\.(ts|js|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js'
  // },
  //transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/.*)'],
  //collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: 'dist/test/coverage/jest',
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/environments/**',
    '!**/test.ts',
    '!**/*.karma-spec.ts',
    '!**/index.ts',
    '!**/public-api.ts',
    '!**/polyfills.ts',
    '!**/main.ts',
    '!**/setup-jest.ts',
    '!**/*.module.ts'
  ],
  moduleNameMapper: {
    // Old form loads umd modules, eg:
    '^@this/(.*)$': '<rootDir>/dist/$1'
    // Required to load fesm2015
    // '^@this/([a-z\\-]+)/([a-z\\-]+)$': '<rootDir>/dist/$1/fesm2015/this-$1-$2.js',
    // '^@this/([a-z\\-]+)': '<rootDir>/dist/$1/fesm2015/this-$1.js'
  },
  setupFilesAfterEnv: ['./test/setup-jest.ts']
};
