const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './example/index.js',
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},{
				test: /\.pug$/,
				use: 'pug-plain-loader'
			},{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},{
				test: /\.styl/,
				use: ['vue-style-loader', 'css-loader', 'stylus-loader']
			},{
        test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
        loader: 'file-loader'
      }
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './example/index.html'
		})
	]
};
