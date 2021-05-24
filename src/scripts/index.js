import '../assets/css/index.css';
import { tns } from 'tiny-slider/src/tiny-slider.js';
import { acc, tinySlider, ticketCtrl } from '_common.js';
import { prjs, j$ } from '_factory.js';

ticketCtrl();

prjs.$d.on('click', '.jEye', e => {
  const $this = j$(e.$this);
  const $eyeHide = j$('.jEyeHide');

  $this.toggleClass('act');
  $eyeHide.toggleClass('act');
});

prjs.$d.on('click', '.jTab', e => {
  const $this = j$(e.$this);
  $this.addClass('act').parent().siblings().find('.jTab')
    .removeClass('act');
});

prjs.$w.on('load', () => {
  tinySlider(tns);

  acc({
    ctrl: '.jAccCtrl',
    bd: '.jAccList'
  });
});
