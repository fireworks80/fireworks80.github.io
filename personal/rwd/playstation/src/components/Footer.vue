<template>
  <footer>
    <div class="l-wrap">
      <div class="foot-grid">
        <dl class="foot-con" v-for="(con, idx) in footerContents" :key="idx">
          <dt class="foot-con__tit">{{con.name}}</dt>
          <dd class="foot-con__item">
            <ul>
              <li v-for="(ca, idx) in con.category" :key="idx">
                <a :href="ca.url">{{ca.title}}</a>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="psn">
        <em class="psn__tit">Playstation Network</em>
        <ul>
          <li v-for="(psn, idx) in psns" :key="idx">
            <a :href="psn.url">{{psn.name}}</a>
          </li>
        </ul>
        <ul class="sns">
          <li><button class="sns__twitter" type="button"><Twitter></Twitter></button></li>
          <li><button class="sns__facebook" type="button"><Facebook></Facebook></button></li>
          <li><button class="sns__youtube" type="button"><Youtube></Youtube></button></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Youtube from 'vue-material-design-icons/Youtube.vue'
export default {
  name: 'Footer',
  components: {
    Facebook,
    Youtube,
    Twitter
  },
  data () {
    return {
      footerContents: [
        {
          name: '서비스',
          category: [
            { title: 'PlayStation Station', url: 'https://store.playstation.com/ko-kr/grid/STORE-MSF86012-NEWESTRELEASE/1' },
            { title: 'PlayStation Plus', url: 'https://asia.playstation.com/ko-kr/psn/playstation-plus/' }
          ]
        },
        {
          name: '계정',
          category: [
            { title: '계정관리', url: 'https://id.sonyentertainmentnetwork.com/id/management/#/p?pr_referer=cam&state=cc5ca30f41142b04c94b63f71ce569b&cid=79f6deef-5988-437c-a17b-b290c485e6ad&entry=%2Fp' },
            { title: '고객 지원 센터', url: 'https://asia.playstation.com/ko-kr/support/' }
          ]
        },
        {
          name: '이용안내',
          category: [
            { title: '이용약관', url: 'http://legaldoc.dl.playstation.net/ps3-eula/psn/kr_tosua_ko.html' },
            { title: '오픈 소스 라이선스', url: '#' },
            { title: '개인정보처리방침', url: 'http://legaldoc.dl.playstation.net/ps3-eula/psn/kr_privacy_ko.html' },
            { title: '건강상 유의사항', url: 'http://legaldoc.dl.playstation.net/ps3-eula/psn/k/k_health_ko.html' },
            { title: '회사소개', url: 'https://asia.playstation.com/ko-kr/support/contact-us/' },
            { title: '연령제한에 대하여', url: 'https://asia.playstation.com/ko-kr/about/ratings/' }
          ]
        }
      ],
      psns: [
        { name: '고객 지원 센터', url: 'https://asia.playstation.com/ko-kr/support/' },
        { name: 'PlayStation® 공식사이트', url: 'https://asia.playstation.com/ko-kr/support/' },
        { name: 'Facebook', url: 'https://www.facebook.com/PlayStationKorea/' },
        { name: '블로그', url: 'http://www.psblog.co.kr/' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  footer {
    background-color: #000;
    line-height: 1.4;
  }

  a {
    color: rgba(255, 255, 255, .5);
  }

  .l-wrap {
    display: flex;
    justify-content: space-between;
  }

  .foot-grid {
    display: flex;
    padding-top: 30px;
  }

  .foot-con {
    // @include debug;

    &:nth-of-type(n + 2) {
      margin-left: 30px;
    }

    &__tit {
      margin-bottom: 15px;
      color: #fff;
    }

    &__item a {
      padding: 5px 0;
      letter-spacing: .7px;
    }
  }

  .psn {
    padding: 30px 20px;
    background-color: #3C3C3C;

    * {
      // @include debug;
    }

    &__tit {
      display: block;
      margin-bottom: 10px;
      color: #fff;
      font-style: normal;
    }

    a {
      display: block;
      padding: 10px 0;
    }
  }

  .sns {
    $colors: (twitter: #00acee, facebook: #3b5b99, youtube: #ef3c39);
    $color-hover: #343434;

    display: flex;

    li:nth-child(n + 2) {
      margin-left: 10px;
    }

    button {
      @include size(2.25em, 2em);
      display: flex;
      padding: 0;
      border: 0;
      justify-content: center;
      color: #fff;
      cursor: pointer;

      &:hover {
        background-color: $color-hover;
      }
    }

    @each $key, $color in $colors {
      &__#{$key} {
        background-color: $color;
      }
    }
  }
</style>
