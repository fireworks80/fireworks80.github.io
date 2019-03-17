;(function () {
  var accodion = (function () {
    var wrap = null;

    var toggleHook = function (tab) {
      // console.log(tab);
      
      if (tab.tagName.toLowerCase() === 'h3') {
        Array.from(wrap.querySelectorAll('.accordion__item')).forEach(function(item) {
          item.classList.remove('on');
        });
        // debugger;
        tab.parentNode.classList.add('on');
      }
    };

    var doAccodion = function () {
      // console.log(wrap);
      wrap.addEventListener('click', function (e) {
        toggleHook(e.target);
      });
    };

    return {
      init: function (string) {
        wrap = document.querySelector(string);
        doAccodion();
      },
    }
  }());

  accodion.init('.accordion');
}());