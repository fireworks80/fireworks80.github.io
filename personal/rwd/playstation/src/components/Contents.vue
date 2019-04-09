<template>
  <main>
    <div class="l-wrap">
      <h2>최신컨텐츠</h2>
        <ul>
          <li v-for="title in titles" :key="title.id">
              <em>
                {{title.name}}
              </em>
              <span>{{title.price}}</span>
              <img :src="'./' + title.type + title.img" alt="">
          </li>
        </ul>
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Contents',
  created () {
    this.$store.dispatch('fetch')
  },
  computed: mapState(['titles'])
}
</script>
<style lang="scss" scoped>
main {
  min-height: 100%;
  padding-top: 165px;
  margin-bottom: -292px;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(0, 21, 54, 1) 100%
  );
}
</style>
