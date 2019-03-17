;(function ($) {
  var $slideWrap = $('.slider__list');
  var $slides = $slideWrap.find('.slider__item');
  var $btns = $('.slider__btn');
  var timeId = null;

  $slideWrap.prepend($slides.last());

  var setCurrentPager = function(num) {
    var $pager = $('.pager');
    $pager.find('.on').removeClass('on').end().find('li').eq(num).addClass('on');

  }

  var doSlider = function(current) {
    var $active = $('.active');
    var currentIdx = 0;
    $slides = $slideWrap.find('.slider__item');
    
    if (current === 'next') {
      $slideWrap.append($slides.first());
      $active.removeClass('active').next().addClass('active');
      currentIdx = $active.next().data('num');
    } else {
      $slideWrap.prepend($slides.last());
      $active.removeClass('active').prev().addClass('active');
      currentIdx = $active.prev().data('num');
    }
    setCurrentPager(currentIdx);
  };

  $btns.on('click', function () {
    var $this = $(this);
    clearInterval(timeId);
    timeId = null;
    
    doSlider($this.text());
  });

  // timeId = setInterval(nextSlider, 4000);


  // 패널 여닫기
  $('.poster__toggle').on('click', function() {
    var $this = $(this);
    $this.parent().toggleClass('on');
  });

}(jQuery));