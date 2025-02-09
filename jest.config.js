// export default {
//     testEnvironment: "jsdom",
//     moduleNameMapper: {
//       "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
//       "^.+\\.(css|scss|sass)$": "<rootDir>/test/mocks/styleMock.js",
//       "^@/(.*)$": "<rootDir>/src/$1"
//     },
//     setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
//     transform: {
//       "^.+\\.jsx?$": "babel-jest",
//       "^.+\\.tsx?$": "babel-jest"
//     }
//   };
  
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|scss|sass)$": "<rootDir>/test/mocks/styleMock.js",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  collectCoverage: true,
  // coverageReporters: ["text", "lcov"],
};
