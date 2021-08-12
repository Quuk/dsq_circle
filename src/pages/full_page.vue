<!--
 * 全部屏幕
 * 
 * @author tcyeee
 * @date 2021/8/12
-->
<template>
    <el-container style="height: 100vh">
        <el-aside width="25%" style="overflow-y: hidden">
            <sidebar/>
        </el-aside>
        <el-main style="padding-top: 0">
            <mainPage/>
        </el-main>
    </el-container>
</template>

<script>
    import sidebar from "~/pages/main/sidebar";
    import reference from "~/pages/main/reference";
    import mainPage from "~/pages/main_page";

    export default {
        name: "full_page",
        components: {sidebar, reference, mainPage},
    }
</script>

<style scoped>
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
</style>