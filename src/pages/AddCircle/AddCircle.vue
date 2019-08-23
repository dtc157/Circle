<template>
    <div id="addcircle">
        <HeaderTop :title="title">
          <span class="header_search" slot="left" @click="back">
            <i class="iconfont icon-zuo"></i>
          </span>
          <span class="header_login" slot="right">
          <span class="header_login_text" @click="createCircle">完成</span>
        </span>
        </HeaderTop>
      <div class="body">
        <input type="text" class="text" placeholder="输入圈子名称" v-model="circlename">
        <div class="header_img">
          <div class="content">
            <i class="iconfont icon-xiangji"></i>
            <p>乌托邦头像</p>
          </div>
        </div>
        <p>乌托邦主题色</p>
        <div class="choose_color">
          <input type="button" style="background-color: red">
          <input type="button" style="background-color: pink">
          <input type="button" style="background-color: deeppink">
          <input type="button" style="background-color: deepskyblue">
          <input type="button" style="background-color: darksalmon">
          <input type="button" style="background-color: deeppink">
          <input type="button" style="background-color: black">
          <input type="button" style="background-color: orangered">
        </div>
      </div>
    </div>

</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import Cookies from 'js-cookie'
    export default {
    data(){
      return{
        title:"创建乌托邦",
        circlename:""
      }
    },
      methods:{
      //返回上一页面
        back(){
          this.$router.back(-1)
        },
        //创建圈子
        createCircle(){
          const a= JSON.parse(Cookies.get('username')).userId
          let params ={
            clusterName:this.circlename,
            clusterComment:"暂无描述",
            clusterCreateById:a,
            clusterAdd:0,
            clusterPassword:"",
            clusterIcon:"http://pic30.nipic.com/20130619/9885883_210838271000_2.jpg",
          }
          const url = "http://10.96.127.250:8080/api/cluster/add";
          this.$http.fetchGet(url,{params}).then(res => {
            if(res.status==200){
              alert("创建成功")
              this.$router.push("/msite")
            }else{
              alert(res.msg)
            }
          })
        }
      },
    components:{
      HeaderTop
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #addcircle
    background-color #fff
    height 100%
    .body
      display flex
      flex-direction column
      text-align center
      .text
        margin-top 20px
        margin-bottom 10px
        font-size 20px
        color black
        text-align center
        &::-webkit-input-placeholder
          color #b3b3b3
      .header_img
        background-color #f5f5f5
        border-radius 10px
        margin 10px auto 20px auto
        height 110px
        width 110px
        .content
          margin-top 30px
        i
          font-size 30px
          color #999
        p
          margin-top 5px
          color #999
      .choose_color
        display flex
        margin 20px 10px 0 10px
        justify-content space-between
        input
          width 35px
          height 35px
          background-color #7e8c8d
          border-radius 50%
</style>
