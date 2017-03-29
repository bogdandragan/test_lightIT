module.exports = {
    context: __dirname + "/app/src",
    entry: "./js/index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            }
        ]
    },
    output:{
        path: __dirname + "/app/src",
        filename: "bundle.js"
    }
};