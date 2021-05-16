import '../assets/css/bet-list-running.css';
import { acc, ticketCtrl } from '_common.js';
import { prjs } from '_factory.js';

ticketCtrl();

prjs.$w.on('load', () => {
  acc({
    ctrl: '.jCardCtrl',
    bd: '.jCardBd'
  });
});
