module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',    
    'json'
  ],
  transform: {
//    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/tests/unit/**/*.(test|spec).(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testEnvironment: "jsdom",
//  testEnvironmentOptions: {
//    url: 'http://localhost/'
//  },
//  watchPlugins: [
//    'jest-watch-typeahead/filename',
//    'jest-watch-typeahead/testname'
//  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: false
    }
  }
}
