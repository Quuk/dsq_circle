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
                <mainContent/>
            </el-col>
            <el-col :span="5">
                <rightMenu/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import titleImg from "~/pages/common/main_page_title_img";
    import mainContent from "~/pages/main/main_content";
    import rightMenu from "~/pages/main/main_page_right_menu";


    export default {
        name: "main_page",
        components: {titleImg, mainContent, rightMenu},
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