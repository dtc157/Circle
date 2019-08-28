<template>
  <div class="profile">
    <div class="myTop">我&nbsp;的</div>
    <div class="myInform_outContainer">
      <div class="myInform" >
        <div class="myInform_picture">
          <img v-lazy="'http://106.13.193.45:8080/static/'+userPhoto"
          v-if="userPhoto!==null"/>
          <div clsss="img" v-else>
            <van-uploader :after-read.stop="Read" :preview-size="50" />
          </div>
        </div>
        <div class="myInform_main" @click="jumpInform">
          <div class="myInform_name">{{nickName}}</div>
          <div class="myInform_ID">
            <div class="myInform_ID_mian">ID:{{userId}}</div>
            <div class="myInform_ID_icon">
              <i class="iconfont icon-range-left"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 去掉 -->
    <!-- <router-link to="/userinfo" class="profile-link">
      <div class="profile-images">
        <img :src="'http://106.13.193.45:8080/static/'+userPhoto" class="profile_image" />
      </div>
      <div class="user">
        <div class="user-info">
          <p class="user-info-top">{{nickName}}</p>
          <p class="user-info-top2">账号信息</p>
        </div>
        <div class="arrow">
          <i class="iconfont icon-range-left"></i>
        </div>
      </div>
    </router-link>-->
    <!-- 去掉 -->

    <div class="link-wallet">
      <div class="wallet-box" @click="JumpCollection">
        <div class="wallet">
          &nbsp;&nbsp;
          <i class="iconfont icon-qianbao-"></i>
          <span class="my-wallet">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的收藏</span>
        </div>
        <div class="arrow">
          <i id="left_icon" class="iconfont icon-range-left"></i>
        </div>
      </div>
    </div>
    <div class="link-wallet">
      <div class="wallet-box" @click="JumpMyConversation">
        <div class="wallet">
          &nbsp;&nbsp;
          <i class="iconfont icon-qianbao-"></i>
          <span class="my-wallet">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的话题</span>
        </div>
        <div class="arrow">
          <i id="left_icon" class="iconfont icon-range-left"></i>
        </div>
      </div>
    </div>
    <div class="link-wallet">
      <div class="wallet-box" @click="JumpSetting">
        <div class="wallet">
          &nbsp;&nbsp;
          <i class="iconfont icon-qianbao-"></i>
          <span class="my-wallet">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;推送设置</span>
        </div>
        <div class="arrow">
          <i id="left_icon" class="iconfont icon-range-left"></i>
        </div>
      </div>
    </div>
    <div class="link-wallet">
      <div class="wallet-box">
        <div class="wallet">
          &nbsp;&nbsp;
          <i class="iconfont icon-qianbao-"></i>
          <span class="my-wallet">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的钱包</span>
        </div>
        <div class="arrow">
          <i id="left_icon" class="iconfont icon-range-left"></i>
        </div>
      </div>
    </div>
    <div class="loginout" @click="Logout()">退出登录</div>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
export default {
  data() {
    return {
      nickName: "",
      userPhoto: "",
      userId:"",
      formdata:"",
      imgName:"",
    };
  },
  created() {
    this.reqUserinfo();
  },
  methods: {
    //退出
    Logout() {
      let self = this;
      this.$dialog.confirm({
        title: '',
        message: '确定退出吗？'
      }).then(() => {
        // 退出
      this.$http.fetchPost("/api/user/logout").then(res => {
        if (res.status == 200) {
          Cookies.set("username", "", -1);
          // Cookies.remove("username");
          self.$router.replace("/toLogin");
        }
      });
    }).catch(() => {
    // on cancel
    this.$toast("退出取消")
  });
    },
    //上传头像
    //返回文件
    Read(file){
      this.formdata = new FormData()
      this.formdata.append('file', file.file)
      this.uploadFile()
    },
    //上传文件返回参数
    uploadFile() {
      //添加请求头
      let config = {headers: {  'Content-Type': 'multipart/form-data'}}
      const url = "/api/filer/upfiler";
      this.$http.filePost(url,this.formdata,config).then(res => {
        if (res.status == 200) {
          this.imgName=res.data
          this.updateUserinfo()
          this.$toast("上传头像成功")
        } else {
          this.$toast(res.msg)
        }
      });
    },
    //修改用户信息
    updateUserinfo() {
      let self = this;
      this.userId=JSON.parse(Cookies.get("username")).userId
      console.log(this.userId)
      const url = "/api/user/update";
      const params = { userId: self.userId ,userPhoto:self.imgName};
      console.log(params)
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          this.$toast(res.msg)
          this.reqUserinfo()
        }
      });
    },
    //查看用户信息
    reqUserinfo() {
      let self = this;
      this.userId=JSON.parse(Cookies.get("username")).userId
      console.log(this.userId)
      const url = "/api/user/ById";
      const params = { userId: self.userId };
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          self.nickName = res.data.userName;
          self.userPhoto = res.data.userPhoto;
        }
      });
    },
    // 跳转到我的信息
    jumpInform() {
      this.$router.push("/userinfo");
    },
    //跳转我的收藏
    JumpCollection() {
      this.$router.push("/Collection");
    },
    //跳转我的话题
    JumpMyConversation() {
      this.$router.push("/myConversation");
    },
    JumpSetting() {
      this.$router.push("/Setting");
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/sylus/mixins.styl'
.profile
  width 100%
  background white
  height 100%
  .myTop
    height 50px
    line-height 50px
    width 100%
    background-color #FF4500
    text-align center
    color #ffffff
    font-size 18px
    font-weight 600
  .arrow
    .iconfont
      font-size 25px
    #left_icon
      color #C3C3C3
  .myInform_outContainer
    bottom-border-1px(#EDEDED)
    width 100%
    margin-top 20px
    padding-bottom 20px
    .myInform
      margin-left 5%
      width 90%
      display flex
      display -webkit-flex
      .myInform_picture
        width 50px
        height 50px
        border-radius 50%
        img,.img
          width 100%
          height 100%
          border-radius 50%
      .myInform_main
        margin-left 40px
        width 70%
        height 50px
        .myInform_name
          margin-top 8px
        .myInform_ID
          margin-top 5px
          display flex
          display -webkit-flex
          justify-content space-between
          -webkit-justify-content space-between
          .myInform_ID_icon
            i
              font-size 20px
              color #C3C3C3
  span
    font-size 18px
    color black
  .link-wallet
    bottom-border-1px(#e4e4e4)
    width 100%
    padding-bottom 5px
    .wallet-box
      display flex
      display -webkit-flex
      justify-content space-between
      -webkit-justify-content space-between
      align-items center
      height 50px
      width 90%
      margin-left 5%
      .wallet
        height 30px
        line-height 30px
        width 100%
      .icon-qianbao-
        font-size 25px
        color red
  .loginout
    height 50px
    margin-left auto
    margin-right auto
    line-height 60px
    text-align center
    color red
</style>
