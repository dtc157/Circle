<template>
    <div id="search">
      <div class="search_wrap">
        <div class="content_search">
          <div class="iconfont icon-sousuo"> </div>
          <!--<form @submit.prevent="formSubmit" action="javascript:return true">-->
            <input class="search2" placeholder="请输入圈名/圈名关键字" @keydown="searchCircle($event)"
                   v-model="searchName">
          <!--</form>-->
        </div>
        <span @click="back">取消</span>
      </div>
      <div class="content_wrap" v-show="none">
        <p class="recommended" v-if="!searchName">推荐乌托邦</p>
        <ul>
          <li class="content_item" @click="jumpJoinCircle(item.clusterId)"
              v-for="(item,index) in lists" :key="index">
            <div class="img">
              <img :src="'http://10.96.107.14:8080/static/'+item.clusterIcon">
            </div>
            <div class="content">
              <p class="title">{{item.clusterName}}</p>
              <p class="introduce">免费：吹牛逼.打广告.专业大小锤.三陪服务</p>
              <p class="sort">拆迁大队·成员 N</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="content_wrap" v-show="!none">
        <p>暂无此圈</p>
      </div>
    </div>
</template>

<script>
  import Cookies from 'js-cookie'
    export default {
      data(){
        return{
          lists:"",
          searchName:"",
          none:true
        }
      },
      created(){
        this.recommendCircle();
      },
      methods:{
        //查询圈子
        searchCircle(ev){
          let self =this
          if(ev.keyCode == 13) {  //键盘回车的编码是13
            const params={clusterName:self.searchName}
            const url = "/api/cluster/obscure";
            this.$http.fetchGet(url,{params}).then(res => {
              if(res.status==200){
                if(res.data=="没有你要搜索的圈"){
                  self.none=false
                }else{
                  self.none=true
                  self.lists=res.data
                }
              }else{
                self.$toast(res.msg)
              }
            })
          }
        },
        //返回
        back(){
          this.$router.back(-1)
        },
        //跳转加入圈子页面
        jumpJoinCircle(clusterId){
          //判断当前用户是否加入过此圈
          let self=this
          const a= JSON.parse(Cookies.get('username')).userId
          const params={ucClusterId:clusterId,ucUserId:a}
          console.log(params)
            const url = "/api/cluster/addcluster";
            this.$http.fetchGet(url,{params}).then(res => {
              if(res.status==200){
                console.log(res)
                if(res.data==1){
                  this.$router.push({name:"Circlemain",query:{clusterId:clusterId}})
                }else{
                  this.$router.push({name:"JoinCircle",query: {clusterId:clusterId}})
                }
                self.role=res.msg
                console.log(self.role)
              }else{
                alert(res.msg)
              }
            })
        },
        //推荐圈子
        recommendCircle() {
          let self =this
          const UserId= JSON.parse(Cookies.get('username')).userId
          const Address= JSON.parse(Cookies.get('username')).userAddress
          let params = {
            ucUserId:UserId,
            clusterAddress:Address,
            pageNum:1,
            pageSize:4}
            console.log(params)
          const url = "/api/cluster/allview";
          this.$http.fetchGet(url,{params}).then(res => {
            if (res.status == 200) {
              console.log(res)
              if(res.data.list==""){
                self.none=false
              }
              self.lists = res.data.list
              console.log(self.lists)
            } else {
              alert(res.msg)
            }
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/sylus/mixins.styl"
  #search
    .search_wrap
      display flex
      padding 10px
      background-color #fff
      bottom-border-1px(#e4e4e4)
      span
        margin auto
      .content_search
        display flex
        margin-left 17px;
        background-color #f2f2f2
        width 75%
        box-sizing border-box
        margin-top 5px
        color #7e8c8d
        border-radius 10px
        outline: none;    //消除默认点击蓝色边框效果消除
        .icon-sousuo
          margin-left 10px;
          line-height 35px;
          font-size 20px;
          width 20px;
          height 35px;
        & .search2
          margin-left 5px;
          height 35px;
          width 60%
          border-radius 10px
          background-color #f2f2f2
  .content_wrap
    background-color #fff
    padding 10px 15px 15px 15px
    .recommended
      height 30px
      line-height 30px;
      font-size 14px
    ul
      li
        display flex
        margin-bottom 10px
        .img
          margin-right 10px
          img
            height 80px
            width 80px
            border-radius 10px

        .content
          padding 5px
          line-height 15px
          .title
            margin-bottom 10px
          .introduce,.sort
            width 226px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size 12px
            color #999
</style>
