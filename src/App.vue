<template>
    <el-container style="height: 100%">
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
        components: {sidebar, reference, mainPage},
    }
</script>

<style>
    @import "./utils/index.less";

    body {
        user-select: none;
        font-family: Helvetica, sans-serif;
        text-align: center;
        height: 100vh;
        background: linear-gradient(to right bottom, rgba(179, 255, 206, 0.4), rgba(158, 90, 201, 0.4))
    }


    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
