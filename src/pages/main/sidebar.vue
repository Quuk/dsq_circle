<!--
 * 左侧目录
 * 
 * @author tcyeee
 * @date 2021/8/2
-->
<template>
    <div>
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
    </div>
</template>

<script>
    import {BuildingTwo} from '@icon-park/vue'

    export default {
        name: "sidebar",
        components: {BuildingTwo}
    }
</script>

<style scoped>

</style>