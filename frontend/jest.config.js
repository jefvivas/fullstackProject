/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.ts", "!src/**/styles.ts","!src/**/*.d.ts"],
};
