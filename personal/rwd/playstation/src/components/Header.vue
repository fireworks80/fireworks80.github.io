<template>
  <header>
    <p class="logo">
      <span class="l-wrap"><a class="logo__link" href="#"><img src="../assets/svg/corporate-logo.svg" alt="sony"></a></span>
    </p>
    <Account></Account>
    <Gnb></Gnb>
  </header>
</template>
<script>
import Account from './Account'
import Gnb from './Gnb'
export default {
  name: 'Header',
  components: {
    Account,
    Gnb
  }
}
</script>

<style lang="scss" scoped>

$height: 30px;

header {
  @include fixed($top: 0, $left: 0, $right: 0);
}

.logo {
  height: $height;
  margin: 0;
  background-color: #000;

  .l-wrap {
    // @include debug;
    display: block;
    text-align: right;
  }

  &__link {
    display: inline-block;
    line-height: $height;
  }

  img {
    width: 71px;
  }
}
</style>
