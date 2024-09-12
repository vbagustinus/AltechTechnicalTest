module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
  setupFilesAfterEnv: ['./jest-setup.js'],
};
