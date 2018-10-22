var imgVr = imgVr || {};

imgVr.colorSelector = (function() {
  var config = {};

  var _setCurrentColor = function(e) {
    // console.log(e.target);
    var target = e.target || window.event;

    imgVr.allDatas.color = target.textContent;
    imgVr.dragPannel.drawImages(imgVr.allDatas.posX);
  };

  var onBtnEvent = function() {
    config.wrap.addEventListener('click', _setCurrentColor);
  };

  var init = function(wrap) {
    config.wrap = wrap;
    onBtnEvent();
  };

  return {
    init: init
  };
}());
