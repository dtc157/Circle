<template>
  <div class="photopages">
    <div class="photopages_header">
      <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing" @click="back()"></i>
      <p>图片库</p>
    </div>
    <div class="btn">
      <button><i class="iconfont icon-xiangji"></i>  上传图片</button>
    </div>
    <div class="photo_wrap">
      <div class="img">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566675874592&di=5af92aa12a8f5f07606af80ce9a3bddd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6eb878299fdc5412035f8b6f9a1701fa4cd3e46a1ada9-KEaWmP_fw658">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566675874592&di=5af92aa12a8f5f07606af80ce9a3bddd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6eb878299fdc5412035f8b6f9a1701fa4cd3e46a1ada9-KEaWmP_fw658">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566675874592&di=5af92aa12a8f5f07606af80ce9a3bddd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6eb878299fdc5412035f8b6f9a1701fa4cd3e46a1ada9-KEaWmP_fw658">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566675874592&di=5af92aa12a8f5f07606af80ce9a3bddd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6eb878299fdc5412035f8b6f9a1701fa4cd3e46a1ada9-KEaWmP_fw658">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566675874592&di=5af92aa12a8f5f07606af80ce9a3bddd&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6eb878299fdc5412035f8b6f9a1701fa4cd3e46a1ada9-KEaWmP_fw658">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566672704855&di=86b89b9c1bdd690bf65e69199f94eae4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201210%2F21%2F20121021201351_hx3R2.thumb.700_0.jpeg"
      }
    },
    methods:{
      //回到上一页
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  .photopages
    .photopages_header
      display flex
      flex-direction column
      justify-content space-between
      height 130px
      color #fff
      padding 20px
      background-size 100% 100%
      background-image url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566672704855&di=86b89b9c1bdd690bf65e69199f94eae4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201210%2F21%2F20121021201351_hx3R2.thumb.700_0.jpeg")
      p
        font-size 20px
        font-weight 500
      i
        font-size 20px
    .btn
      text-align center
      padding 15px 0
      bottom-border-1px(#e5e5e5)
      button
        background-color red
        box-sizing border-box
        border none
        height 40px
        width 90%
        color #fff
        border-radius 10px
    .photo_wrap
      padding 0 10px 10px 10px
      .img
        padding 10px
        img
          width 100px
          height 100px
          margin 5px 0 5px 5px
</style>
