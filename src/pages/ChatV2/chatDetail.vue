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
        <div class="box_item" :class="{on:item.messageUserId==userId}"
             v-for="(item,index) in list" :key="index">
          <div class="item_img" :class="{on:item.messageUserId==userId}">
            <img :src="'http://106.13.193.45:8080/static/'+item.userPhoto">
          </div>
          <div class="item_right" :class="{on:item.messageUserId==userId}">
            <span class="item_span " :class="{on:item.messageUserId==userId}">{{item.userName}}</span>
            <br>
            <div class="text" :class="{on:item.messageUserId==userId}">
              {{item.messageContent}}
            </div>
          </div>
        </div>

        <!--<div class="your_chat" :class="{on:item.messageUserId==userId}" v-for="(item,index) in list"-->
             <!--:key="index">-->
            <!--<div class="header_img">-->
              <!--<img :src="'http://106.13.193.45:8080/static/'+item.userPhoto">-->
            <!--</div>-->
            <!--<div class="chat_right" :class="{on:item.messageUserId==userId}">-->
              <!--<p class="p" :class="{on:item.messageUserId==userId}">{{item.userName}}</p>-->
              <!--<div class="input">-->
                <!--{{item.messageContent}}-->
              <!--</div>-->
            <!--</div>-->
        <!--</div>-->

      </div>
    <!-- 底部 -->
    <div id="fooder">
      <div id="comment_area">
        <input type="text" placeholder="说点什么" v-model="text" @keydown="send($event)"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
  export default {
    name: "WebSocket",
    data() {
      return {
        text: '',
        data: '',
        websocket: null,
        list:[],
        userId:"",
        clusterName:this.$route.query.clusterName,
        clusterId:this.$route.query.clusterId
      }
    },
    created(){
      this.userId=parseInt(JSON.parse(Cookies.get('username')).userId)
    },
    mounted() {
      if ('WebSocket' in window) {
        this.websocket = new WebSocket('ws://106.13.193.45:8080/websocket/'+this.clusterId+'/'+this.userId)
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
        this.$dialog.confirm({
          title: '',
          message: '确定后将不在接受消息，确定退出吗？'
        }).then(() => {
        this.$router.go(-1)
        }).catch(() => {
          // on cancel
          this.$toast("退出取消")
        });
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
        this.data =event.data;
        this.list.push(JSON.parse(this.data))
        console.log(this.list)
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
  #top
    position fixed
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
    padding-bottom 100px
    flex-direction column
    .your_chat
      padding-left 15px
      margin-top 10px
      display flex
      &.on
        justify-content flex-end
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
        &.on
          justify-content flex-end
        .p
          padding-top 5px
          font-size 12px
          &.on
            display flex
          justify-content flex-end
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
    .box_item
      margin-top 10px
      margin-left 10px
      min-height 40px
      float left
      &.on
        float right
        margin-right 10px
      .item_img
        float left
        display inline-block
        width 40px
        &.on
          float right
        img
          float left
          width 35px
          height 35px
          border-radius 50%
          border orangered solid 1px
          &.on
            float right
      .item_right
        display inline-block
        float left
        margin-left 5px
        &.on
          float right
          margin-right 5px
        .item_span
          min-width 10px
          font-size 14px
          color red
          float left
          &.on
            float right
        .text
          float left
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
          &.on
            float right
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
