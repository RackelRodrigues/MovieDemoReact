// jest.config.js
export default {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],

  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  testEnvironmentOptions: {
    resources: "usable",
  },

  globals: {
    "ts-jest": {
      useESM: true,
    },
  },

  extensionsToTreatAsEsm: [".ts", ".tsx"],
  errorOnDeprecated: true,
};
