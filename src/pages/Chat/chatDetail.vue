<template>
  <!-- 话题页面 -->
  <div id="chatdetaile">
    <!-- 顶部 -->
    <div id="top">
      <div id="back_icon" @click="back()">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div id="top_title">{{clusterName}}</div>
      <div id="join">
        <i class="iconfont icon-chengyuan" ></i>
      </div>
    </div>
    <!-- 内容 -->
      <div class="chat_box">
        <div class="your_chat">
            <div class="header_img">
              <img src="../../assets/photo/hi.png">
            </div>
            <div class="chat_right">
              <p>付小华</p>
              <div class="input">
                附小哈奥斯卡加拿大的健康三道坎阿克苏加拿大看
              </div>
            </div>
        </div>
        <div class="your_chat">
          <div class="header_img">
            <img src="../../assets/photo/hi.png">
          </div>
          <div class="chat_right">
            <p>付小华</p>
            <div class="input">
              附小哈奥斯卡加拿大的健康三道坎阿克苏加拿大看
            </div>
          </div>
        </div>
        <div class="your_chat">
          <div class="header_img">
            <img src="../../assets/photo/hi.png">
          </div>
          <div class="chat_right">
            <p>付小华</p>
            <div class="input">
              附小哈奥斯卡加拿大的健康三道坎阿克苏加拿大看
            </div>
          </div>
        </div>
        <div class="my_chat">
          <div class="chat_right">
            <p>付小华</p>
            <div class="input">
              附小哈奥斯卡加拿大的健康三道坎阿克苏加拿大看
            </div>
          </div>
          <div class="header_img">
            <img src="../../assets/photo/hi.png">
          </div>
        </div>
      </div>
      <!--<div class="chatSelf">-->
        <!--<div class="chatSelf_content">-->
          <!--<div class="chatContent">哦i管理局卡诺i国际上来看耨i剪了个酷哦给家里困难都i格局来看的</div>-->
          <!--<div class="chatHeat_picture"></div>-->
        <!--</div>-->
      <!--</div>-->


    <!-- 底部 -->
    <div id="fooder">
      <div id="comment_area">
        <input type="text" placeholder="说点什么" v-model="text" @keydown="send($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "WebSocket",
    components: {

    },
    data() {
      return {
        text: '',
        data: '',
        websocket: null,
        list:[],
        array:[],
        clusterName:this.$route.query.clusterName
      }
    },
    mounted() {
      if ('WebSocket' in window) {
        this.websocket = new WebSocket('ws://10.96.116.148:8080/websocket/'+1+'/'+this.clusterName)
        this.initWebSocket()
      } else {
        alert('当前浏览器 Not support websocket')
      }
    },
    beforeDestroy() {
      this.onbeforeunload()
    },
    methods: {
      back(){
        this.$router.go(-1)
      },
      initWebSocket() {
        //连接错误
        this.websocket.onerror = this.setErrorMessage

        // //连接成功
        this.websocket.onopen = this.setOnopenMessage

        //收到消息的回调
        this.websocket.onmessage = this.setOnmessageMessage

        //连接关闭的回调
        this.websocket.onclose = this.setOncloseMessage

        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = this.onbeforeunload
      },
      setErrorMessage() {
        this.data = "WebSocket连接发生错误" + '   状态码：' + this.websocket.readyState;
      },
      setOnopenMessage() {
        this.data = "WebSocket连接成功" + '   状态码：' + this.websocket.readyState;
      },
      setOnmessageMessage(event) {
          this.array
            var A=event.data.split("￥");
          console.log(A)
          this.list.push(A[0])
        console.log(this.list)
        // this.text=event.data;
      },
      setOncloseMessage() {
        this.data = "WebSocket连接关闭" + '   状态码：' + this.websocket.readyState;
      },
      onbeforeunload() {
        this.closeWebSocket();
      },

      //websocket发送消息
      send(ev) {
        if(ev.keyCode == 13) {
          this.websocket.send(this.text)
          this.text = ''
        }
      },
      closeWebSocket() {
        this.websocket.close()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/sylus/mixins.styl'
#chatdetaile
  background-color #f5f5f5
  position relative
  height 100%
  #top
    position absolute
    display flex
    display -webkit-flex
    justify-content space-between
    -webkit-justify-content space-between
    align-items center
    -webkit-align-items center
    top 0
    left 0
    height 50px
    width 100%
    color white
    background-color orangered
    #back_icon
      margin-left 13px
      height 50px
      line-height 50px
      float left
    #top_title
      height 50px
      line-height 50px
      font-size 19px
    #join
      width 40px
      height 50px
      line-height 50px
      i
        color orangered
        font-size 20px
  .chat_box
    display flex
    padding-top 50px
    flex-direction column
    .your_chat
      padding-left 15px
      margin-top 10px
      display flex
      .header_img
        img
          border orangered solid  1px
          border-radius 50%
          width 35px
          height 35px
      .chat_right
        margin-left 10px
        display flex
        flex-direction column
        p
          padding-top 5px
          font-size 12px
        .input
          word-wrap break-all
          word-break break-all
          height auto
          line-height 18px
          font-size 14px
          max-width 200px
          background-color #fff
          border-radius 10px
          padding 5px
          margin-top 5px

    .my_chat
      padding-right 15px
      margin-top 10px
      display flex
      justify-content flex-end
      .header_img
        img
          border orangered solid  1px
          border-radius 50%
          width 35px
          height 35px
      .chat_right
        display flex
        margin-right 10px
        justify-content flex-end
        flex-direction column
        p
          display flex
          justify-content flex-end
          float right
          padding-top 5px
          font-size 12px
        .input
          word-wrap break-all
          word-break break-all
          height auto
          line-height 18px
          font-size 14px
          max-width 200px
          background-color #fff
          border-radius 10px
          padding 5px
          margin-top 5px

  #fooder
    position fixed
    bottom 0
    height 59px
    width 100%
    background-color #ebeaea
    display flex
    display -webkit-flex
    justify-content center
    -webkit-justify-content center
    align-items center
    -webkit-align-items center
    #comment_area
      width 88%
      height 40px
      line-height 40px
      background-color white
      padding-left 15px
      border-radius 8px
</style>
