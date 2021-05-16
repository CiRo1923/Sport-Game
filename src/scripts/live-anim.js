import '../assets/css/live-anim.css';
import { acc, accAllClose, ticketCtrl } from '_common.js';
import { prjs, j$ } from '_factory.js';

prjs.$d.on('click', '.jDataCtrl', e => {
  j$(e.$this).children().toggleClass('act');
});

ticketCtrl();

prjs.$w.on('load', () => {
  accAllClose({
    ctrl: '.jAccAllClose',
    frame: '.jAcc',
    btn: '.jAccCtrl',
    bd: '.jAccList'
  });

  acc({
    ctrl: '.jAccCtrl',
    bd: '.jAccList'
  });
});
