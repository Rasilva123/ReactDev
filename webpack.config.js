const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'styled-components/native': 'styled-components',
    };

    return config;
};
