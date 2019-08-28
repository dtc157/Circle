<template>
    <div id="msite">
      <HeaderTop :title="title">
        <span class="add" slot="right">
        </span>
      </HeaderTop>
      <div class="search_wrap">
        <div class="content_search">
          <div class="iconfont icon-sousuo"> </div>
          <input class="search2" placeholder="发现圈子世界"  @click="jumpSearch()" >
        </div>
      </div>
      <div id="box">
        <div class="circle_join" @click="jumpCirclemain(circle.clusterId)"
             v-for="(circle,clusterId) in circles" v-show="circles!==null ">
          <div class="img_wrap">
            <img v-lazy="'http://106.13.193.45:8080/static/'+circle.clusterIcon">
          </div>
          <div class="circle_title">
            <p>{{circle.clusterName}}</p>
            <span>{{circle.clusterComment}}</span>
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
  import Cookies from "../../api/localStorage";
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    export default {
        name: "MSite",
      data(){
          return{
            title:"圈圈",
            circles:""
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
                console.log(res.data)
                self.circles =res.data[0].clusters
              }else{
                self.$toast(res.msg)
              }
            })
          },
          //跳转到圈子主页
        jumpCirclemain(clusterId){
          this.$router.push({ name: "Circlemain", query: {clusterId:clusterId}})
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
  margin-bottom 20px
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
