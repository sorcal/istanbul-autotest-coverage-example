module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: __dirname + '/assets/js',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};