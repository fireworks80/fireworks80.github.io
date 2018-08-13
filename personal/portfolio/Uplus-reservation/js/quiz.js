var goPopupLoc = function (target) {
  $('html, body').animate({
    scrollTop: $(target).offset().top
  });
};

new Vue({
  el: '#quiz-app',
  data: {
    // 팝업 show / hide data
    popupData: {
      dim: false,
      quiz: false,
      isQuiz: true,
      isResult: false
    },
    // 정답 제출 data
    answers: {
      answerNumber: '',
      visitPath: ''
    },
    // 경품 관련 data
    // prizeType에 따라 경품 class 명변경하여 경품 이미지 변경
    // prizeMsg: 는 숨김 텍스트 처리
    prizeData: {
      prizeType: 'NOTE_9',
      prizeMsg: {
        BANG: '땡 다시 도전해보세요!',
        NOTE_9: '정답! 축하합니다. 삼성전자 갤럭시 노트9에 당첨되셨습니다.',
        COFFEE: '정답! 축하합니다. 스타벅스 아이스 아메리카노에 당첨되셨습니다.',
        BR_PINT: '정답! 축하합니다. 배스킨라빈스 31 파인트에 당첨되셨습니다.',
        WIERLESS_EARPHONE: '정답! 축하합니다. 삼성 기어 아이콘 X에 당첨되셨습니다.'
      }
    },
    // 퀴즈 관련 데이터
    // quizNum: 인증번호 전달시 넘어오는 퀴즈 번호 저장 (1, 2 중 하나)
    // key: 1, 2 는 quizNum에 따라 화면에 나타날 데이터 키
    quizData: {
      quizNum: 1,
      1: {
        title: '방금 본 영상속 소년의 헤어스타일은?',
        answer: [
          { no: 1, value: 1, desc: '긴생머리' },
          { no: 2, value: 2, desc: '아프로헤어' },
          { no: 3, value: 3, desc: '단발머리' }
        ]
      },
      2: {
        title: '방금 본 영상 속 미국 국기가 걸려있는 쪽은?',
        answer: [
          { no: 4, value: 1, desc: '왼쪽' },
          { no: 5, value: 2, desc: '가운데' },
          { no: 6, value: 3, desc: '오른쪽' }
        ]
      }
    },
    // 참여 경로 data
    servayData: [
      { no: 7, id: 'ONLINE_AD', desc: '온라인 광고' },
      { no: 8, id: 'AD_SMS', desc: '광고 문자 메시지' },
      { no: 9, id: 'MARKET_GUIDE', desc: '매장 직원 안내' },
      { no: 10, id: 'ETC', desc: '기타' }
    ],
    // 인증코드
    authData: {
      code: '',
      activated: false
    },
    apiURL: {
      AUTHCODE: '/api/s9/caputre/moments/authcode',
      QUIZ: '/api/s9/caputre/moments/quiz'
    },
    errorData: {
      NOTCHECKANI: '퀴즈 정답을 입력해주세요.',
      NOTCHECKJOINPATH: '방문경로를 체크해주세요.'
    }
  },
  methods: {
    displayMessage: function (msg) {
      alert(msg);
    },
    submitAuthCode: function () {
      var self = this;

      $.ajax({
        url: this.apiURL.AUTHCODE,
        method: 'POST',
        data: { authenicationCode: this.authData.code },
        success: function (data) {

          self.quizData.quizNum = data.quizNum;
          self.onShowPopup();
        },
        error: function (data) {
          var msg = JSON.parse(data.responseText);
          self.displayMessage(msg.error);
          self.resetAuth();
        }
      });
    },
    isQuizOrPrize: function (obj) {
      this.popupData.isQuiz = obj.isQuiz;
      this.popupData.isResult = obj.isResult;
    },
    submitData: function () {
      var self = this;
      $.ajax({
        url: this.apiURL.QUIZ,
        method: 'POST',
        data: self.answers,
        success: function (data) {
          self.prizeData.prizeType = data.prizeType ? data.prizeType : 'BANG';
          self.authData.activated = true;
          self.isQuizOrPrize({
            isQuiz: false,
            isResult: true
          });
        },
        error: function (data) {
          // console.log(data);
          var msg = JSON.parse(data.responseText);
          self.displayMessage(msg.error);
          self.authData.activated = true;
          if (msg.error === self.errorData.NOTCHECKANI || msg.error === self.errorData.NOTCHECKJOINPATH) {
            return;
          }
          self.closePopup();
        }
      });
    },
    resetAuth: function () {
      this.authData.code = '';
    },
    resetAnswer: function () {
      this.answers = {
        answerNumber: '',
        visitPath: ''
      };
    },
    retryQuiz: function () {
      this.isQuizOrPrize({
        isQuiz: true,
        isResult: false
      });
    },
    closePopup: function () {
      this.resetAuth();
      this.resetAnswer();

      for (prop in this.popupData) {
        this.popupData[prop] = (prop === 'isQuiz') ? true : false;
      }
    },
    onShowPopup: function () {
      this.popupData.dim = !this.popupData.dim ? true : false;
      this.popupData.quiz = true;

      goPopupLoc('.popup');
    },
    onSubmitAuthCode: function () {
      // 인증번호 입력
      this.submitAuthCode();
    },
    onSubmitData: function () {
      // 정답 데이터 보내기
      goPopupLoc('.popup');
      this.submitData();
    },
    onRetryQuiz: function () {
      this.resetAnswer();
      this.retryQuiz();
    },
    onClosePopup: function () {
      this.closePopup();
    }
  } // method
});