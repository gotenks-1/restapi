module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: __dirname+'/dist'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'tsc',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    target: 'node',
};