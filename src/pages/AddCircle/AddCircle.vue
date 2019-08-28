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
      <div class="left">
        <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" />
      </div>
      <p>乌托邦头像</p>
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
      <div class="createCircleDiv">
        <button class="createCircle" @click="checkForm">创建圈子</button>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
  import Cookies from "../../api/localStorage";
  export default {
    data() {
      return {
        fileList: [],
        title: "创建乌托邦",
        circlename: "",
        show: false,
        A: 0,
        address: "",
        clusterPassword: "",
        clusterAddress: "",
        imgName: "",
        formdata: "",
        istrue:false
      };
    },
    methods: {
      //上传图片的回调放入format中
      afterRead(file) {
        this.formdata = new FormData();
        this.formdata.append("file", file.file);
        this.sedImg();
      },
      //上传图片
      sedImg() {
        //添加请求头
        let config = { headers: { "Content-Type": "multipart/form-data" } };
        const url = "/api/filer/upfiler";
        this.$http.filePost(url, this.formdata, config).then(res => {
          if (res.status == 200) {
            this.imgName = res.data;
            this.istrue=true
          } else {
            this.$toast(res.msg);
          }
        });
      },
      //选择加入方式
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
      checkForm() {
        const self = this;
        if (self.show == true) {
          if (
            self.circlename != "" &&
            self.clusterAddress != "" &&
            self.clusterPassword != ""
          ) {
            self.createCircle();
          } else {
            self.$toast("请完善圈子信息");
          }
        } else if (self.show == false) {
          if (self.circlename != "" && self.clusterAddress != "") {
            self.createCircle();
          } else {
            self.$toast("请完善圈子信息");
          }
        }
      },
      //创建圈子
      createCircle() {
        let self = this;
        //创建圈子
        if (this.istrue) {
          const a = JSON.parse(Cookies.get("username")).userId;
          let params = {
            clusterName: self.circlename,
            clusterComment: "暂无描述",
            clusterCreateById: a,
            clusterAdd: self.A,
            clusterPassword: self.clusterPassword,
            clusterIcon: self.imgName,
            clusterAddress: self.clusterAddress
          };
          const url = "/api/cluster/add";
          self.$http.fetchGet(url, {params}).then(res => {
            if (res.status == 200) {
              self.$toast("创建成功");
              self.$router.push("/msite");
            } else {
              self.$toast(res.msg);
            }
          });
        }else{
          this.$toast("请上传头像")
        }
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
      .left
        margin 10px auto
      .text
        margin-top 20px
        margin-bottom 8px
        font-size 20px
        height 22px
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
        height 70px
        line-height 35px
        margin 10px auto 0 auto
        div
          color #7F7F7F
        select
          width 60%
          height 25px
          line-height 25px
          text-align center
          border 1px solid #C3C3C3
      .setPassword
        width 24%
        height 30px
        line-height 30px
        margin 0 auto 10px auto
        input
          border none
          width 100%
          height 100%
          text-align center
      .createCircleDiv
        width 80%
        height 50px
        margin-top 20px
        margin-left auto
        margin-right auto
        .createCircle
          width 100%
          height 100%
          line-height 50px
          text-align center
          background-color #FF4500
          border-radius 20px
          border none
          color #ffffff
          font-size 17px
</style>
