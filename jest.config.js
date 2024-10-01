module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/test/fixtures"],
  coveragePathIgnorePatterns: ["<rootDir>/test/"],
  testRegex: "test/(.+)\\.test\\.(jsx?|tsx?)$",
  setupFilesAfterEnv: ["./jest.setup.js"],

  moduleNameMapper: {
    // 假设 @polkadot/x-bigint 的 ESM 路径是 /node_modules/@polkadot/x-bigint/esm
    // 假设你想要映射到 /node_modules/@polkadot/x-bigint/cjs
    "^@polkadot/x-bigint/esm/(.*)$":
      "<rootDir>/node_modules/@polkadot/x-bigint/cjs/$1",

    // 如果有其他映射规则，可以继续添加
  },
};
