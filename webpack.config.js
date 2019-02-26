const libraryTarget = 'umd';
const TerserPlugin = require('terser-webpack-plugin');

const config = {
    mode: 'production',
    output: {
        libraryTarget,
        globalObject: 'this',
    }
};

module.exports = [{
    ...config,
    entry: {
        'unminified': './source.js',
    },
    optimization: {
        minimizer: [],
    },
},
{
    ...config,
    entry: {
        'minified': './source.js',
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
}];
