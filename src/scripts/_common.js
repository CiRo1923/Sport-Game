import LazyLoad from 'vanilla-lazyload';
import {
  prjs, j$, svgRequire, validate
} from '_factory.js';

new LazyLoad({
  elements_selector: '.lazy',
  use_native: true
});

/* 一次載入使用到的 svg */
svgRequire(require.context('../assets/svg/', true, /\.svg$/));

export const refresh = () => {
  window.location.reload();
};

export const accAllClose = (obj) => {
  prjs.$d.on('click', obj.ctrl, () => {
    const frameElem = j$(obj.frame);

    for (let i = 0; i < frameElem[0].length; i += 1) {
      const btnElem = frameElem.eq(i).find(obj.btn);
      const bdElem = frameElem.eq(i).find(obj.bd);

      btnElem.removeClass('act');
      bdElem[0][0].style.maxHeight = 0;
    }
  });
};

export const acc = (obj) => {
  for (let i = 0; i < j$(obj.ctrl)[0].length; i += 1) {
    const ctrlElem = j$(obj.ctrl).eq(i);
    const bdElem = j$(obj.bd).eq(i);

    if (ctrlElem.hasClass('act')) {
      bdElem[0][0].style.maxHeight = `${bdElem.height()}px`;
    } else {
      bdElem[0][0].style.maxHeight = 0;
    }
  }

  prjs.$d.on('click', obj.ctrl, e => {
    const elem = j$(e.$this);
    const nextElem = elem.next(obj.bd);
    const maxHeight = parseInt(nextElem[0][0].style.maxHeight, 10);

    elem.toggleClass('act');

    if (maxHeight === 0) {
      nextElem[0][0].style.maxHeight = `${nextElem.height()}px`;
    } else {
      nextElem[0][0].style.maxHeight = 0;
    }
  });
};

export const ticketCtrl = () => {
  const fetchURL = (url, callback) => {
    fetch(url).then(res => {
      return res.text().then(text => {
        const htmlObject = document.createElement('html');
        htmlObject.innerHTML = text;
        const $ticketCnt = j$(htmlObject).find('.jTicketCnt')[0][0];
        j$('.jTicketBd')[0][0].scrollTo({ top: 0 });
        j$('.jTicketBd').empty().append($ticketCnt);
      }).then(() => {
        /* 一次載入使用到的 svg */
        svgRequire(require.context('../assets/svg/', true, /\.svg$/));

        j$('[\\:validate]').on('blur', e => {
          const $this = j$(e.$this);

          validate($this);
        });

        if (callback) {
          callback();
        }
      });
    });
  };

  // 點擊注單
  prjs.$d.on('click', '.jTicketCtrl', () => {
    const $ticket = j$('.jTicket');
    const url = j$('.jTicketTab.act').attr('href');

    fetchURL(url, () => {
      $ticket.toggleClass('act');
      prjs.$hb.toggleClass('Ov(hide)');
    });
  });

  // 串关投注 checkbox 改變事件
  prjs.$d.on('change', '.jFormCheckBoxMore', e => {
    const $this = j$(e.$this);
    const $ticketMore = j$('.jTicketMore');
    const ticketMoreSet = JSON.parse(j$('.jTicketMore').children().attr(':text').replace(/'/g, '"'));

    if ($this.prop('checked')) {
      $ticketMore.prop('disabled', false);
    } else {
      $ticketMore.prop('disabled', true);
      $ticketMore.removeClass('act');
      $ticketMore.children().text(ticketMoreSet.close);
    }
  });

  // 更多串关类型
  prjs.$d.on('click', '.jTicketMore', e => {
    const $this = j$(e.$this);
    const moreSet = JSON.parse($this.children().attr(':text').replace(/'/g, '"'));
    const $moreList = j$('.jTicketMoreList');

    if (!$this.prop('disabled')) {
      $this.toggleClass('act');
      $moreList.toggleClass('act');

      if ($this.hasClass('act')) {
        $this.children().text(moreSet.open);
        $moreList[0][0].style.maxHeight = `${$moreList.children().height()}px`;
      } else {
        $this.children().text(moreSet.close);
        $moreList[0][0].style.maxHeight = 0;
      }
    }
  });

  // 单注 & 串关投注 點擊事件
  prjs.$d.on('click', '.jTicketTab', e => {
    const $this = j$(e.$this);
    const url = $this.attr('href');

    $this.parent().siblings().find('.jTicketTab').removeClass('act');
    $this.addClass('act');
    e.preventDefault();

    fetchURL(url);
  });

  prjs.$d.on('click', '.jSubmit', e => {
    alert(0);
  });
};

prjs.$d.on('click', '.jRefresh', () => {
  refresh();
});
