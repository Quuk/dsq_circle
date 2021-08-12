<!--
 * 首页中文章概述
 * 
 * @author tcyeee
 * @date 2021/8/5
-->
<template>
    <div>
        <!-- 如果有图  -->
        <el-row class="margin-top-sm overview-item" v-for="item in 10">
            <el-col :span="17">
                <div class="title" @click="$router.push('/page')">老人与猫</div>
                <div class="over-view">日头升到了笔架山的最高处，阳光如水倾泻而下，把公园里片片嫩叶洗刷得发亮，又在长椅上划分了一块专属的区域。猫蜷缩在长椅上，就像睡着了似的...</div>
                <div class="between justify-center" style="margin-top: 5px">
                    <div class="center icon-text" style="margin-top: 12px">
                        <el-avatar :size="26"
                                   src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        <div class="author">tcyeee</div>
                    </div>
                    <div class="icon flex align-center">
                        <message-sent theme="outline" size="20" fill="#333" :strokeWidth="1"/>
                        <span class="icon-text">1234</span>
                        <thumbs-up theme="outline" size="20" fill="#333" :strokeWidth="1"/>
                        <span class="icon-text">1234</span>
                        <share-two theme="outline" size="20" fill="#333" :strokeWidth="1"/>
                        <span class="icon-text">1234</span>
                    </div>
                </div>
            </el-col>

            <el-col :offset="1" :span="6" class="img">
                <img src="http://img.igo12.top/cdn/72raMS3Pe4.jpg" :height="140"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {MessageSent, ShareTwo, ThumbsUp} from '@icon-park/vue'

    export default {
        name: "main_page_content_overview",
        components: {MessageSent, ThumbsUp, ShareTwo},
        methods: {}
    }
</script>

<style scoped>
    .author {
        margin-left: 10px;
        font-size: 16px;
    }

    .icon-text {
        margin: 0 20px 0 4px;
        color: #808080;
        font-size: 13px;
        line-height: 17px;
    }

    .icon {
        margin-top: 14px;
        line-height: 17px;
        text-align: left;
    }

    .overview-item {
        height: 140px;
        border-bottom: rgba(182, 183, 189, 0.19) 1px solid;
    }

    .img {
        height: 120px;
        overflow: hidden;
        border-radius: 8px;
        filter: grayscale(40%);
        opacity: 0.7;
    }

    .title {
        line-height: 15px;
        font-weight: bold;
        font-size: 20px;
        text-align: left;
        margin: 15px 0;
    }

    .over-view {
        color: grey;
        line-height: 20px;
        text-align: left;
        font-size: 14px;
    }
</style>