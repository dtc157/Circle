<template>
  <div id="addcircle">
    <HeaderTop :title="title">
      <span class="header_search" slot="left" @click="back">
        <i class="iconfont icon-zuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">&nbsp;</span>
      </span>
    </HeaderTop>
    <div class="body">
      <input type="text" class="text" placeholder="输入圈子名称" v-model="circlename" />
      <input type="text" class="text" placeholder="输入圈子地址" v-model="clusterAddress" />
      <div class="header_img">
        <div class="content">
          <i class="iconfont icon-xiangji"></i>
          <p>乌托邦头像</p>
        </div>
      </div>
      <div class="joinStyle">
        <div>设置加圈方式</div>
        <select id="joinSelect" v-model="A" @click="setStyle()">
          <option value="0">直接加入</option>
          <option value="1">密码加入</option>
        </select>
      </div>
      <div class="setPassword" v-if="show">
        <input type="text" placeholder="请输入密码" v-model="clusterPassword" />
      </div>
      <button class="createCircle" @click="createCircle">创建圈子</button>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      title: "创建乌托邦",
      circlename: "",
      show: false,
      A: 0,
      address: "",
      clusterPassword: "",
      clusterAddress: ""
    };
  },
  methods: {
    setStyle() {
      if (this.A == 1) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    //返回上一页面
    back() {
      this.$router.back(-1);
    },
    //创建圈子
    createCircle() {
      const a = JSON.parse(Cookies.get("username")).userId;
      let params = {
        clusterName: this.circlename,
        clusterComment: "暂无描述",
        clusterCreateById: a,
        clusterAdd: this.A,
        clusterPassword: this.clusterPassword,
        clusterIcon:
          "http://pic30.nipic.com/20130619/9885883_210838271000_2.jpg",
        clusterAddress: this.clusterAddress
      };
      const url = "http://10.96.127.250:8080/api/cluster/add";
      this.$http.fetchGet(url, { params }).then(res => {
        if (res.status == 200) {
          alert("创建成功");
          this.$router.push("/msite");
        } else {
          alert(res.msg);
        }
      });
    }
  },
  components: {
    HeaderTop
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#addcircle
  background-color #fff
  height 100%
  .body
    display flex
    flex-direction column
    text-align center
    height 80%
    margin-top 50px
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
      margin 10px auto 5px auto
      height 110px
      width 110px
      .content
        margin-top 30px
      i
        font-size 30px
        color #999
    .joinStyle
      width 60%
      height 35px
      line-height 35px
      margin 10px auto 10px auto
      div
        color #7F7F7F
      select
        width 60%
        height 80%
        text-align center
        border 1px solid #C3C3C3
    .setPassword
      width 22%
      height 35px
      line-height 35px
      margin 30px auto 10px auto
      input
        border none
        width 100%
        height 100%
        text-align center
    .createCircle
      position absolute
      left 30%
      bottom 20%
      width 40%
      height 50px
      line-height 50px
      text-align center
      background-color #FF4500
      border-radius 27px
      border none
      color #ffffff
      font-size 17px
</style>
