<!--
 * 主页中的页面
 * 
 * @author tcyeee
 * @date 2021/8/4
-->
<template>
    <div class="padding-lr">
        <!--  头图 -->
        <titleImg/>
        <el-row :gutter="20" class="margin-top">
            <el-col :span="19">
                <div style="background-color: rgba(142,147,163,0.6);height: 1000px">left content</div>
            </el-col>
            <el-col :span="5">
                <div style="background-color: rgba(188,143,143,0.32);border-radius: 7px">right menu</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import titleImg from "~/pages/common/main_page_title_img";

    export default {
        name: "main_page",
        components: {titleImg},
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>
<style scoped>
</style>