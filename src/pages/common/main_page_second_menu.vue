<!--
 * 首页中间靠右的二级导航
 * 
 * @author tcyeee
 * @date 2021/8/5
-->
<template>
    <div>
        <div class="center" v-for="item in 2"
             style="height: 50px;background-color: rgba(188,143,143,0.32);border-radius: 7px;margin-top: 15px">
            <div>量化工具</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main_page_second_menu"
    }
</script>

<style scoped>

</style>