//自适应屏幕改变html的font-size大小
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if(clientWidth<375){
            clientWidth=375;
          }
          docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };

      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);