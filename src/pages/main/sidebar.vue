<!--
 * 左侧目录
 * 
 * @author tcyeee
 * @date 2021/8/2
-->
<template>
    <div class="relative" style="height: 100%;overflow: hidden">
        <div class="flex">
            <img src="../../assets/dsq.png" :height="160" :width="160"/>
            <div>dsq_bbs</div>
        </div>
        <div class="margin-top">
            <div class="width100 center" style="height: 100px">
                <building-two theme="outline" size="48" fill="#333" :strokeWidth="1"/>
                <div class="margin-left padding-bottom-sm">蓝图</div>
            </div>
            <div class="width100 center" style="height: 100px">
                <building-two theme="outline" size="48" fill="#333" :strokeWidth="1"/>
                <div class="margin-left padding-bottom-sm">蓝图</div>
            </div>
            <div class="width100 center" style="height: 100px">
                <building-two theme="outline" size="48" fill="#333" :strokeWidth="1"/>
                <div class="margin-left padding-bottom-sm">蓝图</div>
            </div>
        </div>

        <reference class="absolute width100 referce"/>
    </div>
</template>

<script>
    import {BuildingTwo} from '@icon-park/vue'
    import reference from "~/pages/main/reference";

    export default {
        name: "sidebar",
        components: {BuildingTwo, reference}
    }
</script>

<style scoped>
    .referce {
        bottom: 3px;
    }
</style>