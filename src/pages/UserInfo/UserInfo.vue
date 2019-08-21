<template>
    <div class="userinfo">
      <div class="userinfo-head">
        <div class="arrow" @click="$router.back()">
          <i class="iconfont icon-xiangzuo"></i>
          <span class="userinfo-title">账号信息</span>
        </div>
      </div>
      <div class="items-container">
        <div class="userinfo-items">
          <div class="head-img">头像</div>
          <div class="userinfo-images">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566366732063&di=9a9b20ec73aa3b1f48ad268ad4c3d514&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4c7811030d895c5d40b799d4db5b1e13077370e58bff-9hnxpe_fw658" class="userinfo_image">
            <div class="arrow">
              <i class="iconfont icon-range-left"></i>
            </div>
          </div>
        </div>
        <div class="userinfo-items">
          <div class="head-img">昵称</div>
          <div>
            <div class="arrow">
              <div class="userinfo-left">辣辣</div>
              <div class="userinfo-right">
                <i class="iconfont icon-range-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="userinfo-items">
          <div class="head-img">ID</div>
          <div class="userinfo-right2">909404</div>
        </div>
        <div class="userinfo-items">
          <div class="head-img">手机号</div>
          <div>
            <div class="arrow">
              <div class="userinfo-left">151****1870</div>
              <div class="userinfo-right">
                <i class="iconfont icon-range-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="userinfo-items">
          <div class="head-img">微信</div>
          <div>
            <div class="arrow">
              <div class="userinfo-left">已绑定</div>
              <div class="userinfo-right">
                <i class="iconfont icon-range-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="userinfo-items">
          <div class="head-img" style="color: red">退出登录</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .userinfo
    width 100%
    .userinfo-head
      background white
      height 50px
      .arrow
        position: relative
        margin-left 2%
        padding-top 10px
        .icon-xiangzuo
          font-size 40px
          color #7e8c8d
        .userinfo-title
          font-size 20px
          position absolute
          margin 0 auto
          left 0
          right 0
          margin-top 6px
          margin-left 40%
    .items-container
      margin-top 38px
      background white
      .arrow
        display flex
        justify-content space-between
        margin-right 20px
        margin-top 25px
        .userinfo-left
          margin-top 5px
        .icon-range-left
          font-size 30px
      .userinfo-items
        margin-top 20px
        display flex
        justify-content space-between
        height 60px
        .head-img
          margin-left 8%
          margin-top 30px
        .userinfo-right2
          margin-right 8%
          margin-top 20px
        .userinfo-images
          display flex
          justify-content space-between
          .userinfo_image
            padding-right 0
            margin-top 20px
            margin-right 10px
            width 40px
            height 40px
</style>
