<template>
  <div class="nickname">
    <div class="nickname-head">
      <div class="arrow" @click="$router.back()">
        <i class="iconfont icon-xiangzuo"></i>
      </div>
      <div class="nickname-title">昵称</div>
      <div class="nickname-left">完成</div>
    </div>
    <div class="nickname-content">
      <input type="text" v-model="nickname">
      <div class="nickname-icon" @click="removeInput()">
        <i class="iconfont icon-cuowu"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        nickname:''
      }
    },
    created(){
      this.toGetNick()
    },
    methods:{
      toGetNick(){
        this.nickname=this.$route.query.nickname
      },
      removeInput(){
        this.nickname=''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nickname
    width 100%
    .nickname-head
      height 45px
      background white
      display flex
      justify-content space-between
      .arrow
        margin-left 2%
        margin-top 5px
        .iconfont
          font-size 35px
      .nickname-title
        margin-top 14px
      .nickname-left
        margin-right 5%
        margin-top 14px

    .nickname-content
      width 100%
      height 40px
      margin-top 20px
      background white
      input
        width 80%
        padding-left 6%
        line-height 40px
        outline none
      .nickname-icon
        float right
        width 8%
        margin-top 10px
        margin-right 6%
        .iconfont
          font-size 20px
          color #7e8c8d
</style>
