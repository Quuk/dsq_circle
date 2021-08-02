<!--
 * 文件上传
 *
 * @author tcyeee
 * @date 2021/7/28
-->
<template>
    <div class="margin-top-xl">
        <h3 style="opacity: 0.5;">文件转链接</h3>
        <el-upload class="upload-demo " drag action="#"
                   :http-request="handleChange"
                   :show-file-list="false"
                   :on-change="onUpload"
                   multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>

            <template #tip>
                <div v-for="file in fileList" class="el-upload__tip">
                    <div>{{file.name}}</div>
                    <el-button size="small" type="primary" @click="copyName(file.url)">复制链接</el-button>
                </div>
            </template>
        </el-upload>
    </div>
</template>

<script>
    import {upload} from '~/utils/oss'

    export default {
        name: "upload",
        data() {
            return {
                fileList: []
            }
        },
        methods: {
            handleChange(file) {
                upload(file.file).then(res => {
                    this.fileList.push({name: file.file.name, url: res.url});
                })
            },

            onUpload(event, file, fileList) {
                console.log("开始上传了");
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

</style>