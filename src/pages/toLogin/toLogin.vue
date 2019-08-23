<template>
  <div id="container">
    <div class="icon">
      <img src="../../assets/photo/login.png">
    </div>
    <router-link to="/Login">
      <button class="btn login">账号登录</button>
    </router-link>
    <router-link to="/Register0">
      <button class="btn register">注册</button>
    </router-link>
    <div class="remind">
      <span>登录即表示您已经同意</span>
      <span class="warn">《用户注册协议》</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#container
  width 100%
  overflow hidden
  .icon
    position absolute
    width 80%
    top 100px
    left 10%
    img 
     width 100%
  .btn
    position absolute
    height 50px
    width 85%
    line-height 50px
    border-radius 27px
    font-size 18px
    text-align center
    left 7.5%
    border 1px solid #ED1C24
    &.login
      bottom 180px
      background-color #ED1C24
      color #ffffff
    &.register
      bottom 120px
      background-color white
      color #ED1C24
  .remind
    position absolute
    height 20px
    line-height 20px
    font-size 12px
    text-align center
    width 70%
    left 15%
    bottom 68px
    .warn
      color #ED1C24
</style>