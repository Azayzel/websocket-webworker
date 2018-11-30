//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/
const nodeExternals = require('webpack-node-externals');

/** @type WebpackConfig[] */
const configs = [
    {
        entry: {
            browser: './src/client/index.tsx'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js'
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        }
    }, {
        entry: {
            server: './src/server/server.tsx'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js'
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },

        // Source maps support ('inline-source-map' also works)
        devtool : 'source-map',

        // Add the loader for .ts files.
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
        target: 'node',
        externals: [nodeExternals()]
    }
];

module.exports = configs;