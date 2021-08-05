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
                <div class="title">老人与猫</div>
                <div class="over-view">猫死了。 日头升到了笔架山的最高处，阳光如水倾泻而下，把公园里片片嫩叶洗刷得发亮，又在长椅上划分了一块专属的区域。猫蜷缩在长椅上，就像睡着了似的...</div>
            </el-col>

            <el-col :offset="1" :span="6" class="img">
                <img src="http://img.igo12.top/cdn/72raMS3Pe4.jpg" :height="140"/>
            </el-col>
        </el-row>


        <!-- 如果没有图 -->
    </div>
</template>

<script>
    export default {
        name: "main_page_content_overview"
    }
</script>

<style scoped>
    .overview-item {
        height: 140px;
        border-bottom: rgba(182, 183, 189, 0.67) 1px solid;
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