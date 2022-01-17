module.exports = {
    mode: 'production',
    // entry: './src/main.js',
    entry: {
        a:'./src/a.js',
        b: './src/b.js'
    },
    output: {
        filename: '[name]-[chunkhash].js',
    },
    target: ['web', 'es5'],
    optimization: {
        splitChunks: {
            minSize: 6,
            // chunks(chunk) {
            //     return !['wuyanzu'].includes(chunk.name)
            // },
            chunks: 'all',
            name: 'commons'
        }
    }
}