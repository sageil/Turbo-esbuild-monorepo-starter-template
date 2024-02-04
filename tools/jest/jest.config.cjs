/** @type {import('jest').Config} */
module.exports = {
  testMatch: ["<rootDir>/src/**/?(*.)spec.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  bail: true,

  transform: {
    "^.+\\.(t)sx?$": "@swc/jest",
  },
  collectCoverageFrom: ["**/*.{js,ts}", "!**/node_modules/**"],
};
