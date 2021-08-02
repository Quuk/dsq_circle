let OSS = require('ali-oss');

import {private_data} from "../../config";

let client = new OSS({
    region: private_data.region,
    accessKeyId: private_data.accessKeyId,
    accessKeySecret: private_data.accessKeySecret,
    bucket: private_data.bucket,
    endpoint: private_data.endpoint,
    cname: private_data.cname,
});


// 文件上传
export async function upload(file) {
    try {
        const typeStr = file.name.substring(file.name.lastIndexOf('.') + 1);
        const fileNameStr = 'cdn/' + randomString(10) + '.' + typeStr;
        return await client.put(fileNameStr, file)
    } catch (err) {
        console.log(err);
    }
}


// 生成随机名称
function randomString(len) {
    len = len || 32
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const maxPos = chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
}