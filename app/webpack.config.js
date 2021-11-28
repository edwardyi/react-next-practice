const path = require("path");

module.exports = {
    entry: {
        app: './server.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.build.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presents: ['env']
            }
        }]
    }
}