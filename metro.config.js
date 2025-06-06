const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname, {
    //somente web: habilitar suporte ao css no Metro.
    isCSSEnabled: true,
});

module.exports = withNativeWind(config, { input: './global.css' });
