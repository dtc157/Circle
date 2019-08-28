<template>
    <div id="looktopics">
      <header class="header3">
        <i class="iconfont icon-zuo" @click="back()"></i>
        <div class="header_title">
          <p>公告</p>
        </div>
        <span class="send" v-if="istrue" @click="jumpto">发布</span>
      </header>
      <div class="comments" >
        <div class="comments_item"
             v-for="(note,index) in notes" :key="index">
          <div class="item_master">
            <div class="userinfo">
              <img :src="'http://106.13.193.45:8080/static/'+note.user.userPhoto">
              <div class="username">
                <span>{{note.user.userRealname}}&nbsp;<i class="iconfont icon-zhiding2"></i></span>
                <p>{{note.user.noteCreateTime}}</p>
              </div>
            </div>
            <div class="item_update">
              <i class="iconfont icon-qitaxuanxiang"></i>
            </div>
          </div>
          <div class="item_content" >
            <!--<img :src="'http://106.13.193.45:8080/static/'+note.user.userPhoto">-->
            <p style="color: orangered"><i class="iconfont icon-xing1"></i> {{note.noteName}}</p>
            <p>{{note.noteContent}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
    data(){
      return{
        title:"置顶",
        notes:"",
        istrue:""
      }
    },
    created(){
      this.queryNotes()
      this.judjeRole()
    },
      methods:{
      //查询所有公告
        queryNotes(){
          let self=this
          const params={clusterId:this.$route.query.clusterId}
          const url = "/api/note/view";
          this.$http.fetchGet(url,{params}).then(res => {
            if(res.status==200){
              self.notes=res.data
            }else{
              self.$toast(res.msg)
            }
          })
        },
        //判断角色
        judjeRole(){
          const a=this.$route.query.role
          if(a=="圈主"){
              this.istrue=true
          }else{
            this.istrue=false
          }
        },
      //返回上一页面
        back(){
          this.$router.go(-1)
        },
        jumpto(){
          this.$router.push({name:'publishNotice',query:{clusterId:this.$route.query.clusterId}})
        }
      },
    components:{
      HeaderTop
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #looktopics
    .header3
      position fixed
      display flex
      color:#fff
      background-color orangered
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
        transform translateX(-30%) translateY(-50%)
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

  .comments
      display flex
      flex-direction column
      .comments_item
        margin 10px;
        background-color #fff
        border-radius 5px
        padding 10px
        display flex
        flex-direction column
        >div
          display flex
        .item_master
          justify-content space-between
          .userinfo
            display flex
            margin-bottom 10px
            i
              color orangered
              font-size 12px
            img
              width 30px
              height 30px
              border-radius 50%
              margin-right 5px
            span
              font-size 14px
            p
              margin-top 5px
              color #999
              font-size 10px

        .item_content
          display flex
          flex-direction column
          font-size 14px
          margin-bottom 10px
          img
            padding 10px
            background-color #f5f5f5
            max-height 300px
            line-height 50px
            border-radius 10px
          p
            line-height 20px
        .item_operation
          padding 0 5px
          margin-bottom 10px
          .operation
            display flex
            width 50px
            margin 0 30px 10px  0
            line-height 20px
            span
              font-size 12px
              margin-left 5px
              width 25px
            i
              font-size  20px
              &.on
                color orangered
        .item_rating
          margin-bottom 5px
          span
            color orangered
          p
            overflow hidden
            text-overflow ellipsis
            white-space nowrap

</style>
