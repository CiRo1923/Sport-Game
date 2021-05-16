module.exports = {
  HtmlWebpackPlugin: [{
    filename: 'bet-list-running.html',
    template: '_shared/layout.ejs',
    action: '投注纪录',
    description: '',
    chunks: ['bet-list-running']
  }, {
    filename: 'bet-list-settled.html',
    template: '_shared/layout.ejs',
    action: '投注纪录',
    description: '',
    chunks: ['bet-list-settled']
  }]
};
