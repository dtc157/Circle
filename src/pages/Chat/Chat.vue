<template>
  <div class="container">
    <div class="conTop">
      <span>聊天</span>
    </div>
    <div class="inform_content">
      <div class="comment_main" @click="jumptoDe(circle.clusterId,circle.clusterName)" v-for="(circle,index) in circles" :key="index">
        <div class="comment_head">
          <div class="head_container">
            <div class="head_picture">
              <img :src="'http://106.13.193.45:8080/static/'+circle.clusterIcon">
            </div>
            <div class="head_message">
              <div class="username">{{circle.clusterName}}</div>
            </div>
          </div>
          <div class="option">11分钟前</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
export default {
  name: "Chat",
  data(){
      return{
            circles:[{}]
      }
  },
  created(){
    this.myCircleshow()
  },
  methods:{
    //初始化本用户所有的圈子
    myCircleshow(){
      let self=this
      //得到登录的人的ID
      const a= JSON.parse(Cookies.get('username')).userId
      //根据ID查询圈子
      let params ={userId:a}
      const url = "/api/cluster/view";
      this.$http.fetchGet(url,{params}).then(res => {
        if(res.status==200){
          self.circles =res.data[0].clusters
        }else{
          this.$toast(res.msg)
        }
      })
    },
    //跳转圈子聊天界面
      jumptoDe(clusterId,clusterName){
          this.$router.push({name:'chatDetail',query:{clusterId:clusterId,clusterName:clusterName}});
      }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/sylus/mixins.styl'
.container
  background-color #fff
  width 100%
  height 100%
  .conTop
    bottom-border-1px(#EDEDED)
    position absolute
    width 100%
    height 50px
    line-height 50px
    top 0
    left 0
    span
      padding-left 15px
      font-size 23px
      font-weight 600
  .inform_content
    position absolute
    top 50px
    width 90%
    .comment_main
      bottom-border-1px(#EDEDED)
      width 100%
      margin-left 5%
      padding-bottom 10px
      .comment_head
        display flex
        display -webkit-flex
        justify-content space-between
        -webkit-justify-content space-between
        align-items center
        -webkit-align-items center
        padding-top 10px
        height 38px
        width 100%
        margin-bottom 5px
        .head_container
          display flex
          display -webkit-flex
          justify-content flex-start
          -webkit-justify-content flex-start
          align-items center
          -webkit-align-items center
          .head_picture
            height 38px
            width 38px
            border-radius 50%
            background-color pink
            img
              height 38px
              width 38px
              border-radius 50%
          .head_message
            margin-left 10px
            .username
              font-size 15px
            .time
              margin-top 6px
              font-size 13px
        .option
          margin-right 13px
          margin-bottom 18px
          color #B7B6B6
          font-size 12px
</style>
