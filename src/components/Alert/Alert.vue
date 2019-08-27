<template>
  <div id="alert">
    <van-dialog
      v-model="isShow"
      title="请输入口令"
      show-cancel-button
      :beforeClose="beforeClose"
    >
      <van-field
        v-model="userPass"
        placeholder="请输入口令"
      />
    </van-dialog>
  </div>
</template>

<script>
  import Cookies from "../../api/localStorage";
    export default {
      data() {
        return {
          value:'',
          isShow: false,
          userPass:""
        };
      },
      computed:{
      },
      methods:{
        //验证密码加入圈子
        //confirm
        judePassword(){
          let self=this
            const params = {
              clusterId: self.$route.query.clusterId,
              userId: JSON.parse(Cookies.get('username')).userId,
              password:this.userPass
          }
            console.log(params)
            const url = "/api/cluster/password";
            this.$http.fetchGet(url, {params}).then(res => {
              console.log(res)
              if (res.status == 200) {
                this.$toast("加入成功")
                this.$router.replace({name: "Circlemain", query:{clusterId: self.$route.query.clusterId}})
              } else {
                this.$toast(res.msg)
              }
            })
        },
        onClick() {
          this.isShow = !this.isShow
        },
        beforeClose(action, done) {
          if(!this.userPass) {
            this.$toast("请输入口令")
            done(false) //不关闭弹框
          }
          if(action === 'confirm') {
            setTimeout(done, 1000)
            this.judePassword()
            done(false)
            console.log()
          } else if(action === 'cancel') {
            done() //关闭
          }
        },
      },
      props:{
        isclusterId:''
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
