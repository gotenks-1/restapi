module.exports = {
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'app.js',
        path: __dirname+'/dist',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    target: 'node',
    mode:'development',
    watch:true
};