<template>
    <el-container style="height: 100%">
        <el-aside width="25%">
            <sidebar/>
        </el-aside>
        <el-main>主要内容区域
            <CheckOne theme="filled" size="32" fill="#17bd08"/>
        </el-main>
    </el-container>
</template>
<script>
    import sidebar from "~/pages/main/sidebar";
    import reference from "~/pages/reference";
    import {CheckOne} from '@icon-park/vue'

    export default {
        components: {sidebar, reference, CheckOne},
        created() {
            this.swich();
        },
        methods: {
            swich() {
                document.body.style.background = this.getColor();
            },
            getRandom() {
                return Math.round(Math.random() * 255);
            },
            getColor() {
                const one = "rgba(" + this.getRandom() + ", " + this.getRandom() + ", " + this.getRandom() + ", 0.3)";
                const two = "rgba(" + this.getRandom() + ", " + this.getRandom() + ", " + this.getRandom() + ", 0.3)";
                return "linear-gradient(to right bottom, " + one + ", " + two + ")";
            },
        }
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

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
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
