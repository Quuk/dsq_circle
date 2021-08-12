<!--
 * 首页中的内容导航
 * 
 * @author tcyeee
 * @date 2021/8/5
-->
<template>
    <div>
<!--        <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
        <contentOverview/>
    </div>
</template>

<script>
    import contentOverview from "~/pages/common/main_page_content_overview";

    export default {
        name: "main_content",
        components: {contentOverview},
    }
</script>

<style scoped>

</style>