var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var cwd = process.cwd();

module.exports = {
    devtool: 'source-map',
    debug: true,

    entry: {
        'angular2': [
            'rxjs',
            'reflect-metadata',
            'angular2/core',
            'angular2/router',
            'angular2/http'
        ],
        'components': ["./app/components/HomeComponent"],
        'app': ["./app/app"]
    },

    output: {
        path: __dirname + '/build/',
        publicPath: '/build/',
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        root: [path.resolve(cwd)],
        modulesDirectories: [
            'node_modules', 'app', 'app/ts', '.'
        ],
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },
  
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: [/node_modules/]
            }
        ]
    },

    plugins: [
        new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
        new CommonsChunkPlugin({ name: 'common', filename: 'common.js' })
    ],
    target: 'node-webkit'
};
