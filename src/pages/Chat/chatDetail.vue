<template>
  <!-- 话题页面 -->
  <div id="container">
    <!-- 顶部 -->
    <div id="top">
      <div id="back_icon" @click="back()">
        <i class="iconfont icon-zuo"></i>
      </div>
      <div id="top_title">{{clusterName}}</div>
      <div id="join">
        <i class="iconfont icon-chengyuan"></i>
      </div>
    </div>
    <!-- 内容 -->
    <div id="out_container">
      <div class="chatOther">
        <div class="chatOther_content" v-for="(item,index) in list" :key="index" >
          <div class="chatHeat_picture"></div>
          <div class="chatHeat_name">西西弗</div>
          <div class="chatContent" >{{item}}</div>
        </div>
      </div>
      <!--<div class="chatSelf">-->
        <!--<div class="chatSelf_content">-->
          <!--<div class="chatContent">哦i管理局卡诺i国际上来看耨i剪了个酷哦给家里困难都i格局来看的</div>-->
          <!--<div class="chatHeat_picture"></div>-->
        <!--</div>-->
      <!--</div>-->
    </div>

    <!-- 底部 -->
    <button @click="closeWebSocket()">关闭websocket连接</button>
    <div id="fooder">
      <div id="comment_area">
        <input type="text" placeholder="说点什么" v-model="text" @keydown="send($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
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
        clusterName:this.$route.query.clusterName
      }
    },
    watch:{

    },
    mounted() {
      if ('WebSocket' in window) {
        this.websocket = new WebSocket('ws://10.96.116.148:8080/websocket/1/付小华')
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
        this.data = '服务端返回：' + event.data;
        this.list.push(this.data)
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
#container
  background-color #FBFBFB
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
        font-size 20px
  #out_container
    position absolute
    top 50px
    width 100%
    left 0
    bottom 59px
    overflow hidden
    .chatOther
      margin-top 10px
      width 80%
      float left
      padding-left 10px
      .chatHeat_picture
        position absolute
        width 35px
        height 35px
        border-radius 50%
        background-color red
      .chatHeat_name
        display inline-block
        position absolute
        left 50px
        margin-top 5px
        color #7F7F7F
      .chatContent
        position absolute
        left 50px
        width 70%
        margin-top 28px
        background-color #EAEAEA
        border-radius 10px
        padding-left 10px
        padding-top 5px
        padding-bottom 5px
        line-height 23px
    .chatSelf
      margin-top 10px
      width 80%
      float right
      padding-right 10px
      .chatHeat_picture
        position absolute
        width 35px
        height 35px
        border-radius 50%
        right 10px
        margin-top 100px
        background-color red
      .chatContent
        position absolute
        left 50px
        width 70%
        margin-top 100px
        background-color #EAEAEA
        border-radius 10px
        padding-left 10px
        padding-top 5px
        padding-bottom 5px
        line-height 23px
        color white
        background-color #01C48E
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
