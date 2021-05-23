module.exports = {
  HtmlWebpackPlugin: [{
    filename: 'index.html',
    template: '_shared/layout.ejs',
    action: '首页',
    description: '',
    chunks: ['index']
  }]
};
