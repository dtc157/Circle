<template>
  <div id="container">
    <div id="top">
      <router-link to="/toLogin">
        <i class="iconfont icon-zuo"></i>
      </router-link>
    </div>
    <!-- 注册内容 -->
    <div id="register_content">
      <div class="regiter1_point">输入手机号</div>
      <div class="area">
        <div class="country">国家/地区</div>
        <div class="china">中国</div>
        <div>
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
      <div class="inp1">
        <span>+86</span>
        <input type="phone_number" placeholder="输入手机号" autofocus />
      </div>
      <router-link to="/Register2">
        <button class="register_btn">继续</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#container
  width 100%
  height 100%
  background-color #ffffff
  #top
    position relative
    top 0
    margin-left 15px
    height 50px
    line-height 50px
  #register_content
    margin-top 20px
    width 100%
    .regiter1_point
      width 50%
      height 50px
      margin-left 10%
      margin-bottom 10px
      line-height 50px
      text-align left
      font-size 22px
      font-weight 700
    .area
      width 80%
      margin auto
      margin-bottom 20px
      display flex
      display -webkit-flex
      justify-content space-between
      -webkit-justify-content space-between
      align-items center
      -webkit-align-items center
      .country
        font-weight 600
      .china
        margin-right 40px
    .inp1
      width 80%
      height 50px
      line-height 50px
      margin auto
      margin-bottom 10px
      input
        padding-left 10px
    .register_btn
      width 80%
      height 45px
      line-height 45px
      text-align center
      margin-left 10%
      border-radius 27px
      background-color #ED1C24
      color #ffffff
      font-size 20px
      border 1px solid #ED1C24
</style>