Vue.component('select-subject', {
  template: '#select-subject',
  props: ['subject'],
  data: function() {
    return {};
  },
  methods: {
    onClickSubjectMe: function(subject) {
      this.$emit('selectedsubject', subject);
    }
  }
});

var drawing = new Vue({
  el: '#app',
  data: {
    pageInfo: 'subject', // visual, subject, drawing
    subjectDatas: subjectDatas,
    // 최종 전송할 프로퍼트
    sendData: {
      name: '',
      phone: '',
      pictureType: 'FRIEND',
      pictureDecode: '',
      pictureDetail: '',
      currectMe: ''
    },

    description: '',
    // 인증데이터 속성
    authData: {
      name: '',
      phone: '',
      privacyOne: false,
      privacyTwo: false
    },
    popupData: {
      dim: false,
      entry: false,
      certification: false,
      alertPc: false,
      alert: false,
      loading: false
    },
    chunkGallery: [],
    certificationInfo: {
      name: 'info', // info, agree1, agree2
      info: certificationInfo
    }, // certificationInfo
    msgData: msgData,
    apiURI: {
      AUTHENICATE: '/api/note9_draw/entry/authenicate',
      SAVE: '/api/note9_draw/entry/save',
      PICTURE: '/api/note9_draw/picture'
    }
  },
  created: function() {
    this.getGalleryList();
  },
  computed: {
    maxStringLenth: function() {
      return this.description.length;
    }
  },

  updated: function() {
	  this.$nextTick(function() {
	        slider.build('.gallery', {
	          loop: true,
	          items: 1,
	          dots: false,
	          nav: true
	        });
	      });

  },
  methods: {

    /*setTickSlider: function() {
      this.$nextTick(function() {
        slider.build('.gallery', {
          loop: true,
          items: 1,
          dots: false,
          nav: true
        });
      });
    },*/
    setChunk: function (data) {

      // debugger;
      var showPerLen = 4;
      var result = data.reduce(
        function(newArr, item, idx) {
          if (idx % showPerLen === 0 || !(idx % showPerLen)) {
            newArr.push(data.slice(idx, idx + showPerLen));
          }
          return newArr;
        }.bind(this),
        []
      );

      this.chunkGallery = [];
      this.chunkGallery = result;

      //this.setTickSlider();

    },
    getGalleryList: function() {
      // 갤러리 이미지 불러오기
      var self = this;

      $.ajax({
        url: this.apiURI.PICTURE,
        type: 'GET',
        success: function(data) {
          // data = tempData;

          data = !data.length ? tempData : data;
          self.setChunk(data);
        },
        error: function(data) {
          // console.log(data);
        }
      });
    },
    showLoading: function() {
      this.popupData.dim = true;
      this.popupData.loading = true;
    },
    //────  페이지 설정
    // @params String
    setPage: function(pageName) {
      this.pageInfo = pageName;
    },
    //────  친구~운동... 클릭시 주제 선택
    // @params obj
    setSubject: function(subject) {
      // 주제 선택하기
      this.sendData.pictureType = subject.tit;
    },
    displayMsg: function(msg) {
      alert(msg);
    },
    //────  모든 팝업 닫기
    resetAllPopup: function() {
      for (var prop in this.popupData) {
        this.popupData[prop] = false;
      }
    },
    showPopup: function(popupName) {
      this.popupData.dim = true;
      this.popupData[popupName] = true;
    },
    //────  인증팝업 내용 삭제
    deleteAuthData: function() {
      for (var prop in this.authData) {
        if (prop === 'privacyOne' || prop === 'privacyTwo') {
          this.authData[prop] = false;
        } else {
          this.authData[prop] = '';
        }
      }
    },
    //────  주제선택하기 화면 보기

    showSelectSubjectView: function () {


      // 이름 / 연락처 sendData로 보내기
      this.sendData.name = this.authData.name;
      this.sendData.phone = this.authData.phone;

      this.resetAllPopup();
      // 인증 팝업 삭제
      this.onHideCertification('info');
      this.setPage('subject');
    },
    //────  응모완료 팝업 보기
    showEntryPopup: function() {
      // dim 보이기
      // 응모완료 팝업 보이기
      this.showPopup('entry');
      this.getGalleryList();
      goToLoc();
    },
    //────  사용자 정보 입력, 정보동의, 제 3자 동의 창
    // @param certification kind: info, agree1, agree2
    showCertification: function(certificationKind) {
      this.showPopup('certification');
      this.certificationInfo.name = certificationKind;
    },
    //────  사용자 정보 입력, 정보동의, 제 3자 동의 창 닫기
    // @param certification kind: info, agree1, agree2
    hideCertification: function(certificationKind) {
      if (certificationKind === 'info') {
        this.resetAllPopup();
        this.deleteAuthData();
      } else {
        this.certificationInfo.name = 'info';
      }
    },
    //────  사용자 정보 서버 전송하여 확인 하기
    // @params obj 개인정보
    certificationConfirm: function(authData) {
      var self = this;
      // this.showLoading();
      self.showSelectSubjectView();
      // $.ajax({
      //   url: self.apiURI.AUTHENICATE,
      //   data: authData,
      //   type: 'POST',
      //   success: function(data) {
      //     // 인증정보 전송
      //     // callKMCpopUp(data);
      //     // callback.html에서 인증 페이지에서 제목 선택 페이지 보이는 메서드 호출
      //   },
      //   error: function(data) {
      //     // 오류메시지 보이기
      //     self.displayMsg(data.responseJSON.error);
      //   }
      // });
    },
    //────  선택한 주제로 그림을 그릴건가
    // @params bool t/f
    subjectConfirm: function(choiced) {
      if (choiced) {
        this.showDrawingView();
        goToLoc();
      }
    },
    //──── 주제 선택 후 그림그리기 뷰 보기
    showDrawingView: function() {
      this.showPopup('alert');
      this.setPage('drawing');
    },
    resizeImage: function() {
      var w = 600 / 2;
      var h = 710 / 2;

      var canvas = document.querySelector('#hidden-canvas');
      var ctx = canvas.getContext('2d');

      ctx.drawImage(drawingBoard.canvas, 0, 0, w, h);
      this.sendData.pictureDecode = canvas.toDataURL('image/png');

      this.entryPic();
    },

    resetCanvas: function() {
      drawingBoard.reset({ background: true });
    },
    entryPic: function () {
      this.showLoading();

      var self = this;

      $.ajax({
        url: self.apiURI.SAVE,
        type: 'POST',
        data: self.sendData,
        success: function(data) {
          // debugger;
          // console.log(data);
          if (data) {
            self.resetAllPopup();
            self.showEntryPopup();
          } // if
          // 성공하면 응모완료 팝업 보이기
          // 주제에 맞는 팝업
        },
        error: function(data) {
          self.displayMsg(data.responseJSON.error);
          self.resetAllPopup();
          //self.setPage('drawing');
          //self.resetCanvas();
        }
      });
    },
    hideEntry: function() {
      for (var prop in this.sendData) {
        if (prop === 'pictureType') {
          this.sendData[prop] = 'FRIEND';
        } else {
          this.sendData[prop] = '';
        }
      }
      this.resetCanvas();
      this.setPage('visual');
    },
    //────  글자수 체크

    checkTextLength: function () {

      var maxLen = 20;

      if (this.description.length >= maxLen) {
        this.displayMsg(maxLen + this.msgData.OVERFLOWTEXT);
        this.description = this.description.slice(0, maxLen);
      }
    },
    //────  다른 참여작 보기

    onGoToMain: function (target) {
      if (target) {
        var $anchor = $(target);
      }

      // 캔버스 지우기
      this.resetCanvas();
      this.resetAllPopup();

      // 메인 화면으로 이동
      this.setPage('visual');
      this.getGalleryList();

      //this.setTickSlider();
      if (this.pageInfo === 'visual') {
        setTimeout(function() {
          goToLoc($anchor.offset().top);
        }, 200);
      }
    },
    //────  이미지 다운로드
    onImgDownload: function(e) {
      // 현재 시간 생성
      var aEl = e.currentTarget;
      downloadImg(aEl, this.sendData.pictureDecode);
      // href에 이미지 데이터 삽입
    },
    //────  EV: 응모완료 팝업 닫기
    onHideEntry: function() {
      this.resetAllPopup();
      this.hideEntry();
    },
    //────  EV: 그림그리기 시작
    onStartDrawing: function() {
      this.resetAllPopup();
    },
    //──── EV: 인증 대상자 입력 팝업 띄우기
    // @param String: certification kink : info, agree1, agree2
    onShowCertification: function(certificationKind) {
      this.showCertification(certificationKind);
      goToLoc();
    },
    //──── EV: 개인정보 인증 팝업 닫기(개인정보, 동의하기)
    // @params String 'info, agree1, agree2'
    onHideCertification: function(certificationKind) {
      this.hideCertification(certificationKind);
    },
    //──── EV: 이벤트 대상자 인증 확인 하기
    onCertificationConfirm: function() {
      this.certificationConfirm(this.authData);
      // debugger;
      // 이름, 연락처를 db로 보낸다
    }, // onCertificationConfirm
    //──── EV:  주제 선택하기 confirm
    onSubjectConfirm: function() {
      var choiced = confirm(
        this.subjectDatas[this.sendData.pictureType].korean +
          ' (으)로 \n' +
          this.msgData.ISITTRUE
      );
      this.subjectConfirm(choiced);
    },
    //────  EV: 그림 응모하기

    onEntryPic: function () {

      this.sendData.pictureDetail = this.description;
      this.resizeImage();
    },
    //────  EV: 주제 다시 선택
    onReselect: function () {
      this.resetCanvas();

      this.setPage('subject');
      this.description = '';
      this.sendData.pictureDetail = '';
    }
  } // methods
});

// =================================
// slider
// gift, gallery, subject select
// =================================

var slider = (function() {
  return {
    build: function(target, opt) {
      return $(target).owlCarousel(opt);
    },
    destroy: function(target) {
      $(target).trigger('destroy.owl.carousel');
    }
  };

}());



(function($) {
  $(window).on('load', function() {
    slider.build('.gift__slider', {
      loop: true,
      items: 1
    });

    slider.build('.gallery', {
      loop: true,
      items: 1,
      dots: false,
      nav: true
    });

    var slideSubject = slider.build('.select-subject__list', {
      loop: true,
      items: 1,
      center: true,
      autoWidth: true,
      margin: 40
    });

    slideSubject.on('changed.owl.carousel', function (e) {
      var el = e.target;
      var idx = e.item.index;
      var current = $(el).find('.owl-item').eq(idx).find('button');
      drawing.sendData.pictureType = current.data('subject');
    });
  });

}(jQuery));


// =================================
// drawing
// =================================
var drawingBoard = (function(DB) {
  return new DB.Board('drawing-board', {
    controls: [
      'DrawingMode',
      { Size: { type: 'dropdown' } },
      'Color',
      'Navigation'
    ],
    webStorage: false
  });
})(DrawingBoard);

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i) ? true : false;
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) ? true : false;
  },
  any: function() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS();
  }
};

drawing.popupData.alertPc = isMobile.any() ? false : true;
drawing.popupData.dim = isMobile.any() ? false : true;
