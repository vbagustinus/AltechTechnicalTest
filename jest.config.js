module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native)/)"
  ],
  setupFilesAfterEnv: ['./jest-setup.js', './node_modules/@testing-library/jest-native/extend-expect'],
};
