<template>
    <div id="topicsearch">
      <div class="search_wrap">
        <div class="content_search">
          <div class="iconfont icon-sousuo"> </div>
          <input class="search2" placeholder="搜索话题或标签" @keydown="searchTopics($event)"
                 v-model="message">
        </div>
        <span @click="back">取消</span>
      </div>
      <div class="label">
        <p>标签</p>
        <div class="label_title">
          <span>#官方通知</span>
          <span class="label_content">分区：社长卧谈会</span>
        </div>
      </div>
      <div class="topic_title">
        <p>话题</p>
      </div>
      <div class="topic" v-for="(topic,index) in topics" :key="index"
           @click="jumpRatingInfo(topic.topicId)">
        <div class="topic_content">
          <p>{{topic.topicContent}}</p>
          <p class="topic_time">
            {{topic.topicCreateTime}}·{{topic.user.userRealname}}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          message: "",
          topics:""
        }
      },
      methods:{
        //返回上一页面
        back(){
          this.$router.back(-1)
        },
        //模糊搜索动态话题
        searchTopics(ev){
          let self =this
          if(ev.keyCode == 13) {
            const params={clusterId:this.$route.query.clusterId,message:this.message}
            const url = "/api/topic/search";
            this.$http.fetchGet(url,{params}).then(res => {
              if(res.status==200){
                //self.none=false
                self.topics=res.data

              }else{
                this.$toast(res.msg)
              }
            })
          }
        },
        //跳转话题详情
        jumpRatingInfo(topicId){
          this.$router.replace({ name: "RatingInfo", query: {topicId:topicId}})
        },
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #topicsearch
    .search_wrap
      box-sizing border-box
      display flex
      padding 10px
      background-color #fff
      bottom-border-1px(#e4e4e4)
      span
        margin auto
      .content_search
        display flex
        margin-left 17px;
        background-color #f2f2f2
        width 75%
        box-sizing border-box
        margin-top 5px
        color #7e8c8d
        border-radius 10px
        outline: none;    //消除默认点击蓝色边框效果消除
        .icon-sousuo
          margin-left 10px;
          line-height 35px;
          font-size 20px;
          width 20px;
          height 35px;
        & .search2
          margin-left 5px;
          height 35px;
          width 60%
          border-radius 10px
          background-color #f2f2f2
    .label
      height 50px
      padding 10px
      background-color #fff
      bottom-border-1px(#e4e4e4)
      p
        font-size 12px
        color #999
        margin-bottom 10px
      .label_title
        font-size 14px
        display flex
        justify-content space-between
        .label_content
          font-size 14px
          color #999
    .topic_title
      line-height 20px
      padding 10px 10px 5px 10px
      background-color #fff
      font-size 12px
      color #999
    .topic
      display flex
      flex-direction column
      background-color #fff
      padding 10px
      bottom-border-1px(#e4e4e4)
      .topic_content
        font-size 14px
        line-height 20px
      .topic_time
        font-size 12px
        margin-top 5px
        color #999


</style>
