<template>
  <!-- 发布公告页面 -->
  <div id="container">
    <!-- 顶部 -->
    <div id="top_publish">
      <div id="back_icon" @click="back()">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div id="top_title">编辑内容</div>
      <div>&nbsp;</div>
    </div>
    <div id="publish_content">
      <div class="publish_title">
        <input type="text" placeholder="标题" autofocus v-model="title" />
      </div>
      <div class="publis_content">
        <textarea
          name="textarea_content"
          class="publis_textarea"
          placeholder="有什么新消息要分享给大家.."
          v-model="content"
        ></textarea>
      </div>
    </div>
    <button class="publishGo" @click="publish">发布</button>
  </div>
</template>
<script>
import Cookies from "../../api/localStorage";
export default {
  data() {
    return {
      title: "",
      content: "",
      user: "",
      clusterId: ""
    };
  },
  methods: {
    //发布公告
    publish() {
      if (this.title != "" && this.content != "") {
        this.user = JSON.parse(Cookies.get("username"));
        this.clusterId = this.$route.query.clusterId;
        const url = "/api/note/add";
        const params = {
          title: this.title,
          content: this.content,
          userId: this.user.userId,
          clusterId: this.clusterId
        };
        this.$http.fetchGet(url, { params }).then(res => {
          if (res.status == 200) {
            this.$toast("发布成功");
            this.$router.go(-1);
          } else {
            this.$toast("发布失败");
          }
        });
      } else {
        this.$toast("标题和内容不能为空");
      }
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/sylus/mixins.styl'
#container
  background-color #EDEDED
  position relative
  height 100%
  #top_publish
    position absolute
    display flex
    display -webkit-flex
    justify-content space-between
    -webkit-justify-content space-between
    align-items center
    -webkit-align-items center
    top 0
    height 50px
    width 100%
    color white
    background-color orangered
    #top_title
      margin-right 15px
    #back_icon
      margin-left 13px
      height 50px
      line-height 50px
      float left
  #publish_content
    position absolute
    top 60px
    left 5%
    width 90%
    height 75%
    border-radius 15px
    background-color #ffffff
    .publish_title
      width 100%
      height 100%
      height 40px
      line-height 40px
      bottom-border-1px(#EDEDED)
      input
        border-radius 27px
        width 80%
        padding-left 3%
    .publis_content
      width 100%
      height 100%
      position relative
      margin-top 5px
      textarea
        margin-left 3%
        border none
        width 93%
        height 85%
  .publishGo
    position absolute
    bottom 30px
    width 70%
    height 50px
    left 15%
    line-height 50px
    color #ffffff
    font-size 20px
    background-color #FF4500
    border-radius 27px
    border none
</style>
