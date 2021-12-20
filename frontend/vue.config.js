module.exports = {
  devServer:{
    open: true,
    port: 3990
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
