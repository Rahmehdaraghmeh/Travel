const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'client', 'index.js'),
output: {
        filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader', // Babel for transpiling modern JavaScript
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // SCSS to CSS
            },
            {
                test: /\.html$/,
                use: 'html-loader', // To handle HTML files
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.scss', '.html'],
    },
};
