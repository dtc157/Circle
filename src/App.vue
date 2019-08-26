<template>
  <div id="app">
    <router-view></router-view>
    <lg-preview></lg-preview>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FoooterGuide/FoooterGuide.vue'
  import HeaderTop from './components/HeaderTop/HeaderTop.vue'
  export default {
    components: {
      FooterGuide,
      HeaderTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app{
    width:100%;
    height:100%;
    background:#f5f5f5;
  }
</style>
