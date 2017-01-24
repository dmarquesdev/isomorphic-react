var webpack = require('webpack');

module.exports = {
	entry: ['./src/client/index.js'],
	output: {
		path: './public/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				query: {
					presets: ['stage-0', 'react', 'es2015']
				}
			}
		]
	}
}
