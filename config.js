const ticket = require('./htmlPage.ticket.js');
const bet = require('./htmlPage.bet.js');
const evt = require('./htmlPage.event.js');
const live = require('./htmlPage.live.js');
const index = require('./htmlPage.index.js');

module.exports = {
  tailwindcss: false,
  desktopMinWidth: 1366,
  mobileMaxWidth: 740,
  basicMobileWidth: 414,
  copyStatic: true,
  js: 'scripts/',
  css: 'assets/css/',
  imgs: 'assets/img/',
  svg: 'assets/svg/',
  fonts: 'static/fonts/',
  plugins: () => {
    const def = [];
    let publish = def.concat(
      index.HtmlWebpackPlugin,
      ticket.HtmlWebpackPlugin,
    );

    if (process.env.NODE_ENV === 'production') {
      publish = def.concat(
        ticket.HtmlWebpackPlugin,
        bet.HtmlWebpackPlugin,
        evt.HtmlWebpackPlugin,
        live.HtmlWebpackPlugin,
        index.HtmlWebpackPlugin
      );
    }
    return publish;
  }
};
