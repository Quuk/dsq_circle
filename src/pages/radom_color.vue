<!--
 * 
 * 
 * @author tcyeee
 * @date 2021/8/2
-->
<template>
    <div class=" bqbImg flex">
        <img src="http://img.igo12.top/cdn/TpGPaG3M7F.jpg" :width="352" :height="266" class="zoom70" @click="swich"/>
        <div>
            <div class="center bqbCopy" @click="copyName(oneColor)">
                点击复制
            </div>
            <div class="margin-top-xs" style="color: grey;font-size: 12px">{{oneColor}}</div>

            <div class="center margin-top bqbCopy" @click="copyName(twoColor)">
                点击复制
            </div>
            <div class="margin-top-xs" style="color: grey;font-size: 12px">{{twoColor}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "radom_color",
        data() {
            return {
                oneColor: '',
                twoColor: ''
            }
        },
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
                this.oneColor = one;
                this.twoColor = two;
                return "linear-gradient(to right bottom, " + one + ", " + two + ")";
            },
            copyName(value) {
                const input = document.createElement('input')
                document.body.appendChild(input)
                input.setAttribute('value', value)
                input.select()
                if (document.execCommand('copy')) {
                    document.execCommand('copy')
                    this.$notify({
                        title: '复制成功',
                        message: value,
                        type: 'success'
                    });
                }
                document.body.removeChild(input)
            },
        }
    }
</script>

<style scoped>
    .bqbImg {
        mix-blend-mode: color-burn;
        bottom: 50px;
        left: 50px;
    }

    .bqbCopy {
        color: rgba(128, 128, 128, 0.4);
        font-weight: bold;
        font-size: 14px;
        height: 50px;
        width: 150px;
        background-color: rgba(179, 255, 206, 0.4);
        border-radius: 5px
    }
</style>