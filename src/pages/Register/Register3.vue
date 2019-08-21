<template>
  <div id="container">
    <div id="top">
      <router-link to="/Register2">
        <i class="iconfont icon-zuo"></i>
      </router-link>
    </div>
    <!-- 注册内容 -->
    <div id="register_content">
      <div class="regiter_point">设置密码</div>
      <div class="input_password">
        <input type="password" placeholder="不少于6位字符" autofocus />
      </div>
      <router-link to="/msite">
        <button class="register3_btn">完成</button>
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
    .input_password
      width 80%
      height 40px
      line-height 40px
      text-align left
      margin auto
    .register3_btn
      width 80%
      height 45px
      margin-top 50px
      line-height 45px
      text-align center
      margin-left 10%
      border-radius 27px
      background-color #ED1C24
      color #ffffff
      font-size 20px
      border 1px solid #ED1C24
</style>