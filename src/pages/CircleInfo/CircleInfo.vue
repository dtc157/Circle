<template>
    <div id="circleinfo">
      <header>
        <i class="iconfont icon-zuo" @click="back()"></i>
        <div class="header_right">
        </div>
      </header>
      <div class="circle_img">
        <img v-lazy="'http://106.13.193.45:8080/static/'+list.clusterIcon">
      </div>
      <div class="wrap_content">
        <div class="circle_name">
           <span>{{list.clusterName}}</span>
          <div class="signin " >
            <i class="iconfont icon-fenxiang"></i>
            <span>分享</span>
          </div>
        </div>
        <div class="circle_set">
          <span>设置</span>
          <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
        </div>
        <div class="circle_people">
          <span>成员</span>
          <div>
            <span class="s">{{allpeople}}人</span>
            <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
          </div>
        </div>
        <div class="circle_card">
          <span >我的名片</span>
          <div>
            <span class="s">{{user.userRealname}}</span>
            <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
          </div>
        </div>
        <div class="circle_topic">
          <span >我的话题</span>
          <div>
            <span class="s">0</span>
            <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
          </div>
        </div>
        <div class="circle_new_topic">
          <span >新话题通知</span>
          <i class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing1"></i>
        </div>
      </div>
      <div class="deleteCircle">
        <button @click="deteleteCircle">删除此圈</button>
      </div>
    </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
    export default {
      data() {
        return {
          list: "",
          allpeople: "",
        }
      },
      created(){
        //初始化圈详情
        this.circleDetails(),
          //查询圈子人数
          this.queryAllpeople()
      },
      methods:{
        //根据圈id查询圈子详情
        circleDetails() {
          //获取本用户信息
          this.user = JSON.parse(Cookies.get("username"));
          let self = this;
          const params = { clusterId: this.$route.query.clusterId };
          const url = "/api/cluster/details";
          this.$http.fetchGet(url, { params }).then(res => {
            if (res.status == 200) {
              self.list = res.data[0];
            } else {
             self.$toast(res.msg);
            }
          });
        },
        //查询圈子总人数
        queryAllpeople(){
          let self = this;
          const params = {clusterId: this.$route.query.clusterId};
          const url = "/api/cluster/sum";
          this.$http.fetchGet(url, { params }).then(res => {
            if (res.status == 200) {
              self.allpeople = res.data;
            } else {
              this.$toast(res.msg)
            }
          });
        },
        //删除此圈
        deteleteCircle(){
          let self = this;
          this.$dialog.confirm({
            title: '',
            message: '确定删除吗？'
          }).then(() => {
            // 退出
            const params = {
              ucClusterId: this.$route.query.clusterId,
              ucUserId: JSON.parse(Cookies.get("username")).userId
            };
            const url = "/api/cluster/delete";
            this.$http.fetchGet(url, { params }).then(res => {
              if (res.status == 200) {
                self.role = res.msg;
                self.$toast("删除成功");
                self.$router.push('/msite')
              } else {
                this.$toast(res.msg)
              }
            });
          }).catch(() => {
            // on cancel
            this.$toast("删除取消")
          });
        },
        //返回上一页
        back(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #circleinfo
    background-color #fff
    header
      height 90px
      box-sizing border-box
      width 100%
      top 0
      left 0
      background-color orangered
      line-height 30px
      padding  10px
      display flex
      color #fff
      justify-content space-between
      .header_right
        width 100px
        display flex
        justify-content space-between
        i
          font-size 18px
    .circle_img
      position absolute
      left 30px
      top 60px
      z-index 102
      img
        border #fff solid 3px
        width 50px
        height 50px
        border-radius 50%
    .wrap_content
      background-color #fff
      .circle_name
        padding  40px 40px 20px 20px
        bottom-border-1px(#e4e4e4)
        font-weight 500
        font-size 25px
        .signin
          display inline-block
          float right
          width 70px
          height 25px
          text-align center
          line-height 25px
          font-size 12px
          border-radius 25px
          color #ff4200
          border #ff4200 solid 1px
          i
            font-size 16px
            color #ff4200
      >div
        display flex
        padding 20px
        justify-content space-between
        bottom-border-1px(#e4e4e4)
        .s
          color #999
          font-size 12px
        i
          color #999
          font-weight 600
    .deleteCircle
      text-align center
      button
        width 90%
        height 40px
        margin-top 10px
        border-radius 10px
        font-size 16px
        border 0
        color #ff8a09
        background-color #ffffff
        border #ff8a09 solid 1px
</style>
