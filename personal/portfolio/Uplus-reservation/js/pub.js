// sticky banner
(function($) {
  'use strict';
  var $window = $(window);

  var config = {
      $wrap: null,
      $sticky: null,
      maxWrapWidth: 1920,
      minWrapWidth: 1220,
      triggerTop: 120,
      distanceTriggerTopAndStickyTop: 40,
      stickyDefaultOffsetLeft: 1710,
      scrollTime: 200
  };

  var displayStickLoc = function(opt) {

      config.$sticky.css({ left: opt.left })
          .stop()
          .animate({ top: opt.top }, config.scrollTime);
  };

  var setLocationSticky = function(windowScrollTop) {
      var currentScrollTop = config.triggerTop + config.distanceTriggerTopAndStickyTop;
      var currentWrapWidth = config.$wrap.width();

      var wrapWidthDifference = config.maxWrapWidth - currentWrapWidth;

      var currentStickyOffsetLeft = currentWrapWidth <= config.maxWrapWidth ? config.stickyDefaultOffsetLeft - wrapWidthDifference : stickyDefaultOffsetLeft;
      var currentStickyOffsetTop = windowScrollTop >= config.triggerTop ? currentScrollTop + (windowScrollTop - config.triggerTop) : currentScrollTop;

      displayStickLoc({
          left: currentStickyOffsetLeft,
          top: currentStickyOffsetTop
      });
  };

  $window.on('load resize scroll', function() {
      config.$wrap = $('.wrap');
      config.$sticky = $('.banner');
      setLocationSticky($(this).scrollTop());
  });

})(jQuery);


var goPopupLoc = function(target) {
  $('html, body').animate({
      scrollTop: $(target).offset().top
  });
};

// 인증번호 카운트 다운

var countdown = (function() {
  var config = {
      ENDTIME: 180,
      SEC: 60,
      SPEED: 1000,
      time: '',
      ID: null
  };

  var getSec = function() {
      var sec = Math.floor(config.ENDTIME % config.SEC);
      return sec > 9 ? sec : '0' + sec;
  };

  var getMin = function() {
      return Math.floor(config.ENDTIME / config.SEC);
  };

  var setDistanceTime = function() {
      if (config.ENDTIME <= 0) {
          resetTimer();
      }

      config.time = getMin() + ':' + getSec();
      config.ENDTIME -= 1;
  };

  var resetTimer = function() {
      clearInterval(config.ID);
      config.ID = null;
      config.ENDTIME = 0;
      return;
  };

  var init = function() {
      setDistanceTime();
  };

  return {
      init: init,
      getTime: function() {
          return config.time;
      },
      getEndTime: function() {
          return config.ENDTIME;
      },
      setEndTime: function() {
          config.ENDTIME = 180;
      },
      setTimeId: function(id) {
          config.ID = id;
      },
      getTimeId: function() {
          return config.ID;
      },
      resetTimer: resetTimer
  }
}());


(function() {
  var clipboard = new ClipboardJS('.btn--copy-url');
  clipboard.on('success', function(e) {
      alert('이벤트 URL이 복사되었습니다.');
      e.clearSelection();
  });
}());

new Vue({
  el: '#g-note',
  data: {
      popupData: {
          'dim': false,
          'agree': false,
          'find-store': false,
          'user-info': false,
          'reservation-ok': false
      },
      storeInfo: [],
      filterdStoreInfo: [],
      reservationData: {
          name: '',
          phoneNum: '',
          mobileCarriers: '',
          deviesType: '',
          mobileUsingPeriod: '',
          marketCode: '',
          agree: false
      },
      userInfoData: {
          storeQuery: '',
          marketName: '',
          isSendAuthCertificationCode: false,
          certificationTime: '',
          isCertification: false,
          authCode: ''
      },
      msgs: {
          CARRIER: '이용 중인 통신사를 선택해 주세요',
          DEVICETYPE: '이용 중인 휴대폰 기종을 선택해 주세요',
          PERIOD: '휴대폰 사용기간을 선택해 주세요',
          NOTCERTIFICATIONPhONENUM: '휴대폰 번호를 입력해 주세요',
          NOTCONFIRMEDCERTIFICATION: '인증 확인 해주세요',
          OVERTIME: '인증번호를 다시 받아주세요',
          // COPYURL: '이벤트 URL이 복사되었습니다.',
          COMPLETE: '방문 예약이 완료되었습니다. \n 발송된 문자메시지를 확인해주세요.',
          INCOMPLETE: '필수 정보를 확인하시고 \n 다시 입력해 주세요',
          NOTFOUNDSTORE: '검색결과가 없습니다'
      },
      apiURL: {
          STOREINFO: '/api/s9/caputre/moments/markets',
          AUTH: '/api/s9/caputre/moments/reservation/auth',
          CONFIRM: '/api/s9/caputre/moments/reservation/auth/confirmed',
          RESERVATION: '/api/s9/caputre/moments/reservation'
      },
      COPYURL: 'https://events.uplus.co.kr/note9_store',
      kakaoShareData: {
          KEY: 'e19917bac451ab82c155ae1e141309d5',
      }
  },
  created: function() {
      Kakao.init(this.kakaoShareData.KEY);
      this.getStoreInfos();
  },
  computed: {
      getStoreList: function() {
          return this.filterdStoreInfo.length > 0 ? this.filterdStoreInfo : this.storeInfo;
      }
  },
  methods: {
      getStoreInfos: function() {
          var self = this;
          $.ajax({
              url: this.apiURL.STOREINFO,
              method: 'GET',
              success: function(data) {
                  this.storeInfo = data.data;
              }.bind(this),
              error: function(error) {
                  // console.log(error);
              }
          });
      },
      doIterationDatas: function(datas, doFn) {
          for (prop in datas) {
              doFn(prop);
          }
      },
      searchStore: function(loc) {
          var newFilterStoreInfos = [];
          newFilterStoreInfos = this.storeInfo.filter(function(store) {

              if (typeof store.marketAddress !== 'object') {

                  return Array.prototype.includes ? store.marketAddress.includes(loc) : store.marketAddress.indexOf(loc) !== -1 ? true : false;
              }
          });

          if (newFilterStoreInfos.length) {
              this.filterdStoreInfo = newFilterStoreInfos;
          } else {
              this.displayMessage(this.msgs.NOTFOUNDSTORE);
          }
      },
      selectedStore: function(store) {
          this.userInfoData.marketName = store.marketName;
          this.reservationData.marketCode = store.marketCode;
      },
      displayMessage: function(msg) {
          alert(msg);
      },
      displayCountDown: function() {
          countdown.setTimeId(setInterval(function() {
              countdown.init();
              // console.log(countdown.getTime());
              this.userInfoData.certificationTime = countdown.getTime();
          }.bind(this), 1000));
      },
      authCertification: function(phoneNum) {
          var self = this;
          $.ajax({
              url: this.apiURL.AUTH,
              method: 'POST',
              data: {
                  phoneNum: phoneNum
              },
              success: function(data) {
                  self.displayMessage(data.message);
                  self.userInfoData.isSendAuthCertificationCode = true;
                  if (countdown.getTimeId()) {
                      countdown.resetTimer();
                  }
                  self.displayCountDown();
              },
              error: function(data) {
                  var msg = JSON.parse(data.responseText);
                  self.displayMessage(msg.error);
              }
          });
      },
      confirmCertification: function() {
          var self = this;
          $.ajax({
              url: this.apiURL.CONFIRM,
              method: 'POST',
              data: {
                  authCode: self.userInfoData.authCode
              },
              success: function(data) {
                  self.displayMessage(data.message);
                  countdown.resetTimer();
              },
              error: function(data) {
                  var msg = JSON.parse(data.responseText);
                  self.displayMessage(msg.error);
                  self.userInfoData.authCode = '';
              }
          });
      },
      submitReservation: function(userInfo) {
          var self = this;

          $.ajax({
              url: this.apiURL.RESERVATION,
              method: 'POST',
              data: userInfo,
              success: function(data) {
                  self.showPopup('reservation-ok');
                  kakaoPixel('2970235105268381013').purchase('E_매장완료');
              },
              error: function(data) {
                  var result = JSON.parse(data.responseText);
                  self.displayMessage(result.error);
              }
          });
      },
      resetUserInfoData: function(obj) {
          // 사용자 정보 입력 (인증여부, 인증번호 전송 여부, 인증 시간, 인증 번호, 스토어 이름)
          this.doIterationDatas(obj, function(prop) {
              obj[prop] = (prop === 'isSendAuthCertificationCode' || prop === 'isCertification') ? false : '';
          });
      },
      resetReservationData: function(obj) {
          // post 보낼 정보 
          this.doIterationDatas(obj, function(prop) {
              obj[prop] = prop === 'agree' ? false : '';
          });
      },
      resetPopupData: function() {
          var self = this;
          this.doIterationDatas(this.popupData, function(prop) {
              self.popupData[prop] = false;
          });
      },
      resetCountDown: function() {
          countdown.resetTimer();
          countdown.setEndTime();
      },
      resetUserInfoAndReservationData: function() {
          this.resetUserInfoData(this.userInfoData);
          this.resetReservationData(this.reservationData);
      },
      showPopup: function(popupName) {
          this.resetPopupData();
          this.popupData[popupName] = true;
          this.popupData['dim'] = true;
          goPopupLoc('.popup--' + popupName);
      },
      closePopup: function(popupName) {

          switch (popupName) {
              case 'user-info':
              case 'reservation-ok':
                  this.resetPopupData();
                  this.resetUserInfoAndReservationData();
                  this.resetCountDown();
                  break;
              case 'agree':
              case 'find-store':
                  // 동의하기, store 찾기를 닫으면 사용자 정보 입력창 띄우기
                  this.showPopup('user-info');
                  break;
          }
      },
      onConfirmedCertification: function() {
          // 인증번호 확인
          this.isCertification = true;

          this.confirmCertification();
      },
      onAuthCertification: function() {
          // 인증번호 받기
          if (!this.reservationData.phoneNum.length) {
              this.displayMessage(this.msgs.NOTCERTIFICATIONPhONENUM);
              return;
          }
          // 재발송 일경우
          if (this.userInfoData.isSendAuthCertificationCode) {
              this.resetCountDown();
          }

          this.authCertification(this.reservationData.phoneNum);
      },
      onSelectStore: function(store) {
          // store 선택하기
          this.onShowPopup('user-info');
          this.selectedStore(store);
      },
      onSearchStore: function() {
          // 동이름으로 store 찾기
          this.searchStore(this.userInfoData.storeQuery);
      },
      onShowPopup: function(popupName) {
          this.showPopup(popupName);
      },
      onClosePopup: function(popupName) {
          this.closePopup(popupName);
      },
      onSubmitReservation: function() {
          this.submitReservation(this.reservationData);
      }
  } // methods
});