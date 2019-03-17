;(function ($) {
  var $window = $(window);
  var $row = $('.row');
  var $rowImg = $row.find('img');
  var $rowText = $row.find('dl');

  var getGapSize = function(imgHeight, txtHeight) {
    return (imgHeight - txtHeight) / 2;
  }

  var setTextPadding = function(windowWidth) {
    var minWidth = 780;
    var gap = windowWidth >= minWidth ? (getGapSize($rowImg.height(), $rowText.height()) + 'px') : '';

    $rowText.css({
      paddingTop: gap
    });
  };

  $window.on('load resize', function() {    
    setTextPadding($(this).width());
  });

}(jQuery));

