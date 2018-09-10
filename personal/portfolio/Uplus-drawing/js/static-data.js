//############################
// 갤러리 데이터가 없을때 넣을 더미
//############################
var tempData = [
  {
    pictureUrl: '',
    pictureType: '',
    pictureDetail: ''
  },
  {
    pictureUrl: '',
    pictureType: '',
    pictureDetail: ''
  },
  {
    pictureUrl: '',
    pictureType: '',
    pictureDetail: ''
  },
  {
    pictureUrl: '',
    pictureType: '',
    pictureDetail: ''
  }
];

//############################
// 팝업 히든 텍스트, 제목 선택 데이터
//############################
var subjectDatas = {
  FRIEND: {
    tit: 'FRIEND',
    korean: '친구',
    giftName: 'AI스피커 사은품',
    entryDesc: '친구처럼 재미있게 알려주고 도와주는 U+우리집 AI 스피커! 지금 속도 용량 걱정 없는 데이터 요금제를 쓰시면 U+우리집 AI 스피커가 무료!지금 바로 신청해보세요!',
    drawTit: '당신에게 친구란'
  },
  EXERCISE: {
    tit: 'EXERCISE',
    korean: '운동',
    giftName: 'U+프로야구, U+골프',
    entryDesc: '운동과 함께하는 건강한 당신의 일상! 오직 유플러스 고객만 볼 수 있는 TV중계보다 더 재미있는 U + 프로야구와 U+골프로 당신의 일상을 더욱 풍성하게 완성하세요!',
    drawTit: '당신에게 운동이란?'
  },
  TREND: {
    tit: 'TREND',
    korean: '트렌드',
    giftName: '비디오 포털',
    entryDesc: '최신 드라마, 영화, 예능까지 트렌디한 영상이 가득한 U+비디오포털! 속도용량 걱정 없는 데이터 요금제로 데이터 걱정 없이 U+비디오 포털을 무료로 즐겨보세요!',
    drawTit: '당신에게 트렌드란'
  },
  FAMILY: {
    tit: 'FAMILY',
    korean: '가족',
    giftName: '데이터 주고받기',
    entryDesc: '가족과 함께하는 풍족한 데이터 생활을 즐기고 싶다면? 속도 용량 걱정 없는 데이터 요금제 쓰시면 가족과 월 40GB까지 데이터 나누기가 가능해요~',
    drawTit: '당신에게 가족이란'
  },
  MUSIC: {
    tit: 'MUSIC',
    korean: '음악',
    giftName: '지니뮤직',
    entryDesc: '지친 일상을 음악으로 달래는 당신! 속도 용량 걱정 없는 데이터 요금제 쓰시면 지니뮤직이 무료! 유플러스에서 지니뮤직으로 힐링하세요~',
    drawTit: '당신에게 음악이란'
  },
  FOOD: {
    tit: 'FOOD',
    korean: '음식',
    giftName: '유튜브 프리미엄',
    entryDesc: '음식과 함께하는 맛있는 당신의 일상 유플러스 고객이라면 누구나 유튜브 프리미엄 3개월 무료 혜택! 지금 바로 신청하고, 광고 없이 유튜브로 먹방 마음껏 보세요!',
    drawTit: '당신에게 음식이란'
  },
  MOVIE: {
    tit: 'MOVIE',
    korean: '영화',
    giftName: '넷플릭스',
    entryDesc: '영화와 함께하는 소소한 일상이 좋은 당신 속도 용량 걱정 없는 요금제라면 넷플릭스 3개월 무료 혜택! 언제 어디서든 편안하게 영화를 즐기세요~',
    drawTit: '당신에게 영화란'
  },
  COMPANY: {
    tit: 'COMPANY',
    korean: '직장생활',
    giftName: '2nd 디바이스 2대 요금 무료',
    entryDesc: '오늘도 열심히 일하는 당신의 일상! 속도 용량 걱정 없는 데이터 요금제의 태블릿/스마트기기 2회선 요금 무료 혜택으로 더 스마트한 일상를 즐겨보세요!',
    drawTit: '당신에게 직장생활이란'
  },
  REST: {
    tit: 'REST',
    korean: '휴식',
    giftName: '유튜브 프리미엄',
    entryDesc: '유튜브 광고나 보기엔 인생이 너무 짧다! 광고 보는 시간이 너~무 아까운 당신에게! 유플러스 고객이라면 누구나 유튜브 프리미엄 3개월 무료!',
    drawTit: '당신에게 휴식이란'
  }
};


//############################
// 인증 팝업 히든 텍스트 데이터
//############################
var certificationInfo = {
  info: {
    tit: '본인인증',
    desc: '이벤트 참여를 위해 아래 정보를 입력해주세요'
  },
  agree1: {
    tit: '개인정보 수집 및 이용에 대한 동의',
    desc: '이벤트 참여를 위해서는 아래 사항에 대한 동의가 필요합니다.'
  },
  agree2: {
    tit: '개인정보 제3자 제공에 대한 동의',
    desc: '이벤트 참여를 위해서는 아래 사항에 대한 동의가 필요합니다.'
  }
};

//############################
// alert 데이터
//############################
var msgData = {
  NOTTARGET: '이벤트 대상자가 아닙니다.',
  ISITTRUE: '그리시겠습니까?',
  OVERFLOWTEXT: '자 이내로 작성해 주세요',
  maxTxtLen: '그림에 대해 설명해주세요. (필수입력 / 20자 이내)'
};