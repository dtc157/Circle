<template>
    <div class="photoPages">
        <div class="head">
            <div class="goBack" @click="$router.back()">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
            <div class="title">
                文件库
            </div>
            <div class="add">
                <i class="iconfont icon-xiangzuo"></i>
            </div>
        </div>
        <div class="search-box">
            <div class="search">
            <div class="iconfont icon-sousuo"> </div>
            <input class="search2" placeholder="搜索文件">
        </div>
        </div>
        <div class="container">
            <div class="file-box">
                <div class="fileImg">
                    <img src="http://localhost:8080/static/icon-doc.jpg">
                </div>
                <div class="file-message">
                    <div class="file-name">
                        <span>刘粤的害羞日记</span>
                    </div>
                    <div class="file-other-message">
                        <span>2019-08</span>
                        <span class="notext">来自</span>
                        <span class="text-name">傻子刘粤</span>
                    </div>
                </div>
            </div>
            <div class="file-box">
                <div class="fileImg">
                    <img src="http://localhost:8080/static/icon-doc.jpg">
                </div>
                <div class="file-message">
                    <div class="file-name">
                        <span>付小华和女朋友的秘密</span>
                    </div>
                    <div class="file-other-message">
                        <span>2019-08</span>
                        <span class="notext">来自</span>
                        <span class="text-name">刘小粤</span>
                    </div>
                </div>
            </div>
            <div class="file-box">
                <div class="fileImg">
                    <img src="http://localhost:8080/static/icon-doc.jpg">
                </div>
                <div class="file-message">
                    <div class="file-name">
                        <span>傻子粤成长记</span>
                    </div>
                    <div class="file-other-message">
                        <span>2019-08</span>
                        <span class="notext">来自</span>
                        <span class="text-name">刘大粤</span>
                    </div>
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
            .file-box
                margin-top 10px
                width 80%
                margin-left 10%
                height 50px
                display flex
                .fileImg
                    width 40px
                    height 40px
                    margin-top 5px
                    margin-left 5px
                    img 
                        width: 100%
                        height: 100%
                        max-width: 100%
                        max-height: 100%
                .file-message
                    margin-left 15px
                    font-size 14px 
                    .file-name
                        height 25px
                        line-height 25px
                    .file-other-message
                        height 25px
                        line-height 25px
                        .notext
                            margin-left 5px 
                        .text-name 
                            color blue
                                     
</style>