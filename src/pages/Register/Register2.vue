<template>
  <div id="container">
    <div id="top">
      <router-link to="/Register1">
        <i class="iconfont icon-zuo"></i>
      </router-link>
    </div>

    <!-- 注册内容 -->
    <div id="register_content">
      <div class="regiter_point">新用户注册</div>
      <div class="inp2">
        <span>+86&nbsp;</span>
        <span>18866652196</span>
      </div>
      <div class="input_code">
        <input type="text" placeholder="请输入短信验证码" autofocus />
      </div>
      <div class="repeat">重新获取验证码</div>
      <router-link to="/Register3">
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
    .regiter_point
      width 50%
      height 50px
      margin-left 10%
      text-align left
      line-height 50px
      font-size 22px
      font-weight 700
    .inp2
      width 80%
      height 30px
      line-height 30px
      margin auto
      font-size 13px
    .input_code
      width 80%
      height 40px
      line-height 40px
      margin auto
    .repeat
      width 60%
      height 25px
      text-align center
      line-height 25px
      font-size 13px
      margin auto
      margin-bottom 10px
      color #7F7F7F
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