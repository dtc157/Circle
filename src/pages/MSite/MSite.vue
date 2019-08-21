<template>
    <div id="msite">
      <HeaderTop :title="title">
        <span class="add" slot="right">
        </span>
      </HeaderTop>
      <div class="search_wrap">
        <div class="content_search">
          <div class="iconfont icon-sousuo"> </div>
          <input class="search2" placeholder="发现乌托邦"  @click="jumpSearch()" >
        </div>
      </div>
      <div id="box">
        <div class="circle_join" @click="jumpCirclemain()">
          <div class="img_wrap">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566229549207&di=521990d0053a919c638f80b335f110c6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F19%2F20170719211350_4PnBt.jpeg">
          </div>
          <div class="circle_title">
            <p>乌托邦官方</p>
            <span>大同</span>
          </div>
        </div>
        <div class="circle_join">
        <div class="img_wrap">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566824520&di=ce57e667b9a6f8a4acb773544ab31124&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201507%2F07%2F20150707233018_YJsVW.jpeg">
        </div>
        <div class="circle_title">
          <p>乌托邦官方</p>
          <span>大同</span>
        </div>
      </div>
        <div class="circle_join">
        <div class="img_wrap">
          <img src="">
        </div>
        <div class="circle_title">
          <p>乌托邦官方</p>
          <span>大同</span>
        </div>
      </div>
        <div class="circle_join1" @click="jumpAddCircle()">
          <div class="img_wrap">
            <i class="iconfont icon-jia"></i>
          </div>
          <div class="circle_title">
            <p>创建乌托邦</p>
          </div>
        </div>
      </div>
      </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
        name: "MSite",
      data(){
          return{
            title:"圈圈"
          }

      },
      methods:{
          //跳转到圈子主页
        jumpCirclemain(){
          this.$router.push("/circlemain")
        },
        //跳转到搜索页面
        jumpSearch(){
          this.$router.push("/search")
        },
        jumpAddCircle(){
          this.$router.push("/addcircle")
        }
      },
      //跳转到添加页面

      components:{
        HeaderTop
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#msite
  background-color #fff
  .search_wrap
    margin-top 10px;
    background-color #fff
    .content_search
      display flex
      margin-left 17px;
      background-color #f2f2f2
      width 90%
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
  #box
    display flex
    flex-wrap wrap
    padding 10px 20px 50px 20px
    .circle_join
      display flex
      margin 15px auto 15px auto
      order 1
      flex-direction column
      .img_wrap
        border none
        img
          background-color red
          height 130px
          width 130px
          border-radius 10px
      .circle_title
        box-sizing border-box
        height 20px
        p
          margin-top 8px
        span
          color #999
          font-size 12px
          margin-top 5px
    .circle_join1
      display flex
      margin 15px
      order 1
      flex-direction column
      .img_wrap
        background-color #fff
        box-shadow 0 0 5px #888888;
        height 130px
        width 130px
        border-radius 10px
        i
          display inline-block
          overflow hidden
          font-size 40px
          margin-left 45px
          line-height 130px
      .circle_title
        box-sizing border-box
        height 20px
        p
          margin-top 10px
        span
          color #999
          font-size 12px
          margin-top 5px
</style>
