<template>
    <div id="loadingpage" @click="jumpMsite()">
    </div>
</template>

<script>
    export default {
      created() {
        setTimeout(()=>{   //设置延迟执行
          this.$router.push("/tologin")
        },1500);
      },
      methods:{
        jumpMsite(){
          this.$router.push("/tologin")
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #loadingpage
    width 100%
    height 100%
    background-color #febd87
    background-size 100% 100%
    background-image url("../../assets/photo/loadingpage.png")
</style>
