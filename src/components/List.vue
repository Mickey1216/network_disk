<template>
    <div class="list">
        <el-table :data="tableData" border>
            <el-table-column prop="icon" label="" width="40"></el-table-column>
            <el-table-column prop="fileName" label="文件名"></el-table-column>
            <el-table-column prop="fileSize" label="文件大小" width="100"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
         tableData: [{
            icon: '',
            fileName: '吾爱破解论坛网络诊断修复工具.txt',
            fileSize: '182 B'
          }, {
            icon: '',
            fileName: '吾爱破解论坛精华集',
            fileSize: '476.5 MB'
          }, {
            icon: '',
            fileName: '吾爱破解视频教程',
            fileSize: '8.6 GB'
          }]
    }
  },
  methods:{}
}
</script>

<style lang="css" scoped>
    .list{
        width: 80%;
        height: 100%;
    }
</style>