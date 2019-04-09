<template>
  <nav>
    <h2 class="a11y">사이트 네비게이션</h2>
    <ul class="l-wrap">
      <li v-for="(data, idx) in gnbData" :key="idx">
        <a :href="data.url">{{data.name}}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Gnb',
  data () {
    return {
      gnbData: [
        { name: '맞춤추천', url: 'https://store.playstation.com/ko-kr/just-for-you' },
        { name: 'PlayStation®Plus', url: 'https://store.playstation.com/ko-kr/home/games/psplus' },
        { name: 'PlayStation®VR', url: '#' },
        { name: 'PS4', url: '#' },
        { name: 'PS3', url: '#' },
        { name: 'PS Vita/PSP', url: '#' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    background-color: rgba(0, 0, 0, .5);
  }

  .l-wrap {
    display: flex;
    justify-content: space-between;

    li {

      &:nth-child(2) a {
        padding-left: 30px;
        background: url(../assets/plusIcon.png) no-repeat left center;
      }
    }

    a {
      display: block;
      padding: 10px 0;
      color: rgba(255, 255, 255, .7);
    }
  }
</style>
