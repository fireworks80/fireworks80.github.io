// =================================
// util
// up to the top
// =================================
var goToLoc = function(loc) {
  // debugger;
  $('html, body').animate({
    scrollTop: loc ? loc : 0
  });
};

// =================================
// img download
// =================================
var downloadImg = function(el, imgData) {
  var dateObj = new Date();
  var year = dateObj.getFullYear();
  var mon = dateObj.getMonth() + 1;
  var date = dateObj.getDate();
  //a.downloaded 에 현재시간으로 이미지 이름 대체
  el.download = dateObj + '.png';
  el.setAttribute('href', imgData);
}

