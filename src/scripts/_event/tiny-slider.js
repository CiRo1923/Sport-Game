// import 'tiny-slider/dist/tiny-slider.css';
import { tns } from 'tiny-slider/src/tiny-slider.js';
import { j$ } from '_factory.js';

export const tinySlider = () => {
  const tneElem = j$('.jTnsTab')[0];
  const tenItem = j$('.jTnsTabItem');
  let startIndex = 0;

  for (let i = 0; i < tenItem[0].length; i += 1) {
    const tenItemElem = tenItem.eq(i);

    if (tenItemElem.hasClass('act')) {
      startIndex = tenItemElem.parent().index();
    }
  }

  if (tneElem.length !== 0) {
    tns({
      container: '.jTnsTab',
      items: 4,
      startIndex: startIndex,
      loop: false,
      nav: false,
      controls: false
    });
  }
};
