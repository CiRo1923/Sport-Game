module.exports = {
  HtmlWebpackPlugin: [{
    filename: 'live-score.html',
    template: '_shared/layout.ejs',
    action: null,
    description: '',
    chunks: ['live-score']
  }, {
    filename: 'live-score-nolive.html',
    template: '_shared/layout.ejs',
    action: null,
    description: '',
    chunks: ['live-score']
  }, {
    filename: 'live-video.html',
    template: '_shared/layout.ejs',
    action: null,
    description: '',
    chunks: ['live-video']
  }, {
    filename: 'live-anim.html',
    template: '_shared/layout.ejs',
    action: null,
    description: '',
    chunks: ['live-anim']
  }, {
    filename: 'live-league.html',
    template: '_shared/layout.ejs',
    action: 'Leagues',
    description: '',
    chunks: ['live-league']
  }, {
    filename: 'live-league-nolive.html',
    template: '_shared/layout.ejs',
    action: 'Leagues',
    description: '',
    chunks: ['live-league']
  }]
};
