const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Extend the asset extensions to include .mp4
config.resolver.assetExts = [
  ...config.resolver.assetExts, 
  "mp4"
];

module.exports = config;
