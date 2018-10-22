var imgVr = imgVr || {};

imgVr.dragPannel = (function() {

  var isTouchSupported = 'ontouchstart' in window;

  var configEvent = {
    start: isTouchSupported ? 'touchstart' : 'mousedown',
    move: isTouchSupported ? 'touchmove' : 'mousemove',
    end: isTouchSupported ? 'touchend' : 'mouseup'
  };

  var config = {
    imgs: [],
    isDraggable: false
  };

  var _preLoadImages = function() {
    for (var i = 0; i <= imgVr.allDatas.totalImgaLen - 1; i += 1) {
      config.imgs[i] = new Image();
      var imgName = (i + 1) > 9 ? '0' + (i + 1) + '.png' : '00' + (i + 1) + '.png';
      config.imgs[i].src = 'images/car/' + imgVr.allDatas.color + '/' + imgName;
      config.imgs[i].draggable = false;
    }
  };

  var _setCurrentPosition = function(e) {
    // debugger;
    var pointX = configEvent.isTouchSupported ? e.touches[0].pageX : e.pageX;
    // console.log(pointX);
    return Math.floor((pointX - config.wrap.offsetLeft) / config.wrap.clientWidth * imgVr.allDatas.totalImgaLen);
  };

  var onMouseEvent = function() {
    config.wrap.addEventListener(configEvent.start, function() {
      config.isDraggable = true;
    });

    config.wrap.addEventListener(configEvent.move, function(e) {
      if (!config.isDraggable) return;

      imgVr.allDatas.posX = _setCurrentPosition(e);
      drawImages(imgVr.allDatas.posX);
    });

    config.wrap.addEventListener(configEvent.end, function() {
      config.isDraggable = false;

    });

    config.wrap.addEventListener('mouseout', function() {
      config.isDraggable = false;
    });
  };

  var drawImages = function(posX) {
    // debugger;
    _preLoadImages();
    config.wrap.querySelector('img').src = config.imgs[posX].src;
  };

  var init = function(wrap) {
    config.wrap = wrap;

    onMouseEvent();
    drawImages(imgVr.allDatas.posX);
  };
  return {
    init: init,
    drawImages: drawImages
  };
}());
