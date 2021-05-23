import '../assets/css/event-favorite.css';
import { tns } from 'tiny-slider/src/tiny-slider.js';
import {
  acc, accAllClose, ticketCtrl, tinySlider
} from '_common.js';
import { prjs } from '_factory.js';

ticketCtrl();

prjs.$w.on('load', () => {
  tinySlider(tns);

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
