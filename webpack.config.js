module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: './release/bundle.js'
	},
	module: {
		rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env',{
                            targets: {
                                browsers: ['> 1%', 'last 2 versions']
                            }
                        }]
                    ]
                }
            },
            exclude: '/node_modules/'
        }]
	}
};