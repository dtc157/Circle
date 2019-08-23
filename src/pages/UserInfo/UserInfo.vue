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
            <img src="http://10.96.122.34:8080/static/" class="userinfo_image">
            <div class="arrow">
              <i class="iconfont icon-range-left"></i>
            </div>
          </div>
        </div>
        <div class="userinfo-items" @click="toNickName()">
          <div class="head-img" >昵称</div>
          <div>
            <div class="arrow">
              <div class="userinfo-left">{{nickName}}</div>
              <div class="userinfo-right">
                <i class="iconfont icon-range-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="userinfo-items">
          <div class="head-img">真实姓名</div>
          <div class="userinfo-right2">{{userRealname}}</div>
        </div>
        <div class="userinfo-items">
          <div class="head-img">身份证号</div>
          <div class="userinfo-right2">{{userCardId}}</div>
        </div>
        <div class="userinfo-items">
          <div class="head-img">ID</div>
          <div class="userinfo-right2">{{userId}}</div>
        </div>
        <div class="userinfo-items">
          <div class="head-img">手机号</div>

          <div>
            <div class="arrow">
              <div class="userinfo-left">{{userMobile}}</div>
              <div class="userinfo-right">
                <i class="iconfont icon-range-left"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="userinfo-items">
          <div class="head-img" style="color: red" @click="Logout()">退出登录</div>
        </div>
      </div>
    </div>
</template>

<script>
  import Cookies from 'vue-cookie'
    export default {
      data(){
        return{
          phoneNumber: true,
          userId:JSON.parse(Cookies.get('username')).userId,
          nickName:'',
          userRealname:'',
          userCardId:'',
          userMobile:''
        }
      },
      created(){
        this.reqUserinfo()
      },
      methods: {
        reqUserinfo(){
          let self=this
          this.$http.fetchPost('http://10.96.122.34:8080/api/user/ById',{userId:self.userId}).then(res=>{
            if(res.status==200){
              self.userMobile=res.data.userMobile
              self.userCardId=res.data.userCardId
              self.userRealname=res.data.userRealname
              self.nickName=res.data.userName
            }
          })
        },
        Logout(){
          let self=this
          this.$http.fetchPost('http://10.96.116.148:8080/api/user/logout').then(res=>{
            if(res.status==200){
              self.$router.replace("/toLogin")
            }
          })
        },
        toNickName(){
          this.$router.push({
            path:"/nickname",
            query:{
              nickName:this.nickName
            }
          })
        }
      }
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
        display flex
        justify-content space-between
        height 60px
        .head-img
          margin-left 8%
          margin-top 30px
        .userinfo-right2
          margin-right 8%
          margin-top 30px
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
