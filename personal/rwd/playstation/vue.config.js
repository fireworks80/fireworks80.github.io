module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          resources: './src/assets/scss/style.scss'

          // Or array of paths
          // resources: ['./src/assets/scss/_variable.scss', './src/assets/scss/_mixin.scss', './src/assets/scss/_reset.scss', './src/assets/scss/_common.scss']
        })
        .end()
    })
  }
}
