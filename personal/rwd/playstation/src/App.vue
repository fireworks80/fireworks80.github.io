<template>
  <div id="app">
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
import 'normalize.css'
import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Contents,
    Footer
  }
}
</script>

<style lang="scss">

#app {
  @include relative;
  height: 100%;

}
</style>
