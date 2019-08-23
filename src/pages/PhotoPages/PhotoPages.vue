<template>
    <div class="photoPages">
        <div class="head">
            <div class="goBack" @click="$router.back()">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
            <div class="title">
                照片库
            </div>
            <div class="add">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
        </div>
        <div class="search-box">
            <div class="search">
            <div class="iconfont icon-sousuo"> </div>
            <input class="search2" placeholder="搜索图片">
        </div>
        </div>
        <div class="container">
            <div class="photo-box">
                <div class="images">
                    <img src="http://localhost:8080/static/111.jpg"/>
                </div>
                <div class="images-user">
                    <span>发布人：</span>
                    <span>刘粤</span>
                </div>
                <div class="images-time">
                    <span>发布时间：</span>
                    <span>2019-8-23 16:17:55</span>
                </div>
            </div>
            <div class="photo-box">
                <div class="images">
                    <img src="http://localhost:8080/static/123.jpg"/>
                </div>
                <div class="images-user">
                    <span>发布人：</span>
                    <span>刘粤</span>
                </div>
                <div class="images-time">
                    <span>发布时间：</span>
                    <span>2019-8-23 16:17:55</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .photoPages
        width 100%
        .head
            height 45px
            bacground white
            display flex
            justify-content space-between
            .goBack
                margin-left 2%
                margin-top 5px
                .iconfont
                    font-size 35px
            .title
                margin-top 14px
            .add
                margin-left 2%
                margin-top 5px
                .iconfont
                    font-size 35px
        .search-box
            width 100%
            padding-top 10px
            .search
                display flex
                margin-left 10%;
                background white
                width 80%
                box-sizing border-box
                margin-top 5px
                color #7e8c8d
                border-radius 10px
                outline: none;    //消除默认点击蓝色边框效果消除
                .icon-sousuo
                    margin-left 10px
                    line-height 35px
                    font-size 20px
                    width 20px
                    height 35px
                & .search2
                    margin-left 5px
                    height 35px
                    width 80%
                    border-radius 10px
                    background white
        .container
            width 100%
            padding-top 10px
            .photo-box
                margin-top 5px
                width 80%
                margin-left 10%
                background orange
                overflow:hidden
                border-radius 10px    
                .images
                    margin-top 15px
                    width 90%
                    margin-left 5%
                    height 250px
                    img 
                        width: 100%
                        height: 100%
                        max-width: 100%
                        max-height: 100%                     
                .images-user
                    width 100%
                    height 25px
                    margin-top 5px
                    line-height 25px
                    span 
                        margin-left 10px
                .images-time
                    width 100%
                    height 25px
                    font-size 14px
                    line-height 25px
                    span 
                        margin-left 10px
</style>