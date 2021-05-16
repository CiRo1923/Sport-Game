module.exports = {
  HtmlWebpackPlugin: [{
    filename: 'ticket-multiple.html',
    template: '_shared/layout.ejs',
    action: null,
    description: '',
    excludeAssets: [/.*/]
  }, {
    filename: 'ticket-single.html',
    template: '_shared/layout.ejs',
    action: null,
    description: '',
    excludeAssets: [/.*/]
  }]
};
