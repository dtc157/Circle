<template>
    <div id="creategroup">
      <header class="creategroup_header">
        <i class="iconfont icon-zuo" @click="back()"></i>
        <div class="header_title">
          <p>创建小组</p>
        </div>
      </header>
      <img src="../../assets/photo/hi.png">
        <div class="group_name" >
          <span>名称:</span>
          <input placeholder="请输入小组名称" v-model="clusterName">
        </div>
        <div class="group_describe">
          <span>描述:</span>
          <input placeholder="请输入小组描述" v-model="clusterComment">
        </div>
        <div class="group_button">
          <button @click="createGroup">创建小组</button>
        </div>
    </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
    export default {
      data(){
        return{
          clusterComment:"",
          clusterName:""
        }
      },
      methods:{
        //创建小组
          createGroup(){
            const userId = JSON.parse(Cookies.get("username")).userId;
            let self = this;
            const params = {
              clusterName:self.clusterName,
              clusterComment:self.clusterComment,
              clusterCreateById:userId,
              clusterIcon:"1",
              clusterId: this.$route.query.clusterId,
            };
            const url = "/api/group/add";
            this.$http.fetchGet(url, { params }).then(res => {
              if (res.status == 200) {
                self.$toast("创建成功")
                this.$router.go(-1)
              } else  if(res.status==300){
                this.$toast(res.data);
              }else{
                //alert(res.msg)
              }
            });
          },
        //返回上一界面
        back(){
          this.$router.go(-1)
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #creategroup
    background-color #fff
    height 100%
    .creategroup_header
      position fixed
      display flex
      color:#fff
      background-color red
      justify-content space-between
      box-sizing border-box
      padding 10px
      z-index 100
      left 0
      top 0
      width 100%
      height 50px
      i
        margin-top 8px
      .send
        margin-top 8px
        font-size 14px
        margin-right 10px
      bottom-border-1px(#e5e5e5)
      .header_title
        position absolute
        top 50%
        left 50%
        transform translateX(-50%) translateY(-50%)
        display flex
        line-height 18px
        align-items center
        flex-direction column
        font-size 18px
        span,p
          text-align center
          span
            color #fff
            font-size 14px
    img
      width 100%
      height 250px
      position absolute
      z-index 50
    >div
      position relative
      z-index 100
      display flex
      height 50px
      align-items center
      justify-content center
      margin-bottom 10px
      >span
        color #df0000
        margin-right 10px
        font-size 18px
      input
        height 40px
        box-sizing border-box
        padding-left  40px
        width 60%
        border-bottom 1px solid #999

        ::-webkit-input-placeholder
          color #f5f5f5
      button
        background-color red
        margin-top 50px
        border none
        height 40px
        width 80%
        color #fff
        border-radius 10px
    .group_name
      margin-top 200px
</style>
