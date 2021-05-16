import '../assets/css/live-league.css';
import { acc } from '_common.js';
import { prjs } from '_factory.js';

prjs.$w.on('load', () => {
  acc({
    ctrl: '.jAccCtrl',
    bd: '.jAccList'
  });
});
