<template>
    <div id="app" class="no-select">
        <router-view style="min-width: 800px;min-height: 400px"/>
    </div>
</template>
<script>
    export default {
        name: 'App'
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
