module.exports = {
    publicPath: './',// <----这里就是会修改webpack的outPath.publicPath
    devServer: {
		proxy: {
		  '/api': {
			target: 'http://api.tianapi.com/internet/index',
			changeOrigin: true,
			pathRewrite: {
			  '^/api': ''
			}
		  }
		}
	}
   }