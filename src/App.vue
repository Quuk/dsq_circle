<template>
    <div class="relative full">
        <h1 class="absolute" style="left: 20px;top: 20px;">spring cloud 学习测试</h1>
        <upload class="absolute width100" style="top: 20vh"/>
        <reference class="absolute width100" style="bottom: 30px"/>
    </div>
</template>
<script>
    import upload from "~/pages/upload";
    import reference from "~/pages/reference";

    export default {
        components: {upload, reference},
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
</style>
