const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// هذا السطر يحل مشكلة require في حزم الويب
config.resolver.sourceExts.push('cjs');

module.exports = config;
