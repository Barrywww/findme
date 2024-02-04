const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const watchFolders = [path.resolve(path.join(__dirname, '../../node_modules'))];

const nodeModulesPaths = [
  path.resolve(path.join(__dirname, '../../node_modules')),
];

const config = {
  resolver: {
    nodeModulesPaths,
  },
  watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
