<!--
 * 主要文章区域
 * 
 * @author tcyeee
 * @date 2021/8/5
-->
<template>
    <div class="center" style="background-color:#E9EEF3">
        <mavonEditor class="width70"
                     :editable="false"
                     :subfield="false"
                     defaultOpen="preview"
                     :toolbarsFlag="false"
                     previewBackground="#E9EEF3"
                     boxShadowStyle=""
                     v-model="blogDetailData"/>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'

    export default {
        name: "content_page",
        components: {mavonEditor},
        data() {
            return {
                blogDetailData: "\n" +
                    "##  version 1.0.5\n" +
                    "### <img src=\"https://img.shields.io/badge/2021年08月04日-red.svg\"/>&ensp; 功能调整\n" +
                    "1. 案件列表中, 添加新建案件入口\n" +
                    "   ![image-20210804171515330](http://img.igo12.top/typora/20210804171515.png)\n" +
                    "2. 当事人不再能添加案件\n" +
                    "### <img src=\"https://img.shields.io/badge/2021年08月05日-red.svg\"/>&ensp; 新增功能: 添加律师案件统计\n" +
                    "* 位置: [律所管理员] -> 律所信息 -> 律师管理\n" +
                    "* 功能: 统计单个律师创建的案件总数\n" +
                    "  ![image-20210804175018351](http://img.igo12.top/typora/20210804175018.png)\n"
            }
        },
        created() {
            console.log("页面被加载了");
        },
        activated() {
            console.log("有一次活动");
        },
        methods: {}
    }
</script>

<style scoped>

</style>