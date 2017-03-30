module.exports = {
    context: __dirname + "/app/src",
    entry: "./js/index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel-loader','ng-annotate-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },
    output:{
        path: __dirname + "/app/src",
        filename: "bundle.js"
    }
};