import '../assets/css/event-live.css';
import { tinySlider } from '_event/tiny-slider.js';
import { acc, accAllClose, ticketCtrl } from '_common.js';
import { prjs } from '_factory.js';

ticketCtrl();

prjs.$w.on('load', () => {
  tinySlider();
  acc({
    ctrl: '.jAccCardCtrl',
    bd: '.jAccCardBd'
  });
  accAllClose({
    ctrl: '.jAccCardLiveClose',
    frame: '.jAccCard',
    btn: '.jAccCardCtrl',
    bd: '.jAccCardBd'
  });
});
