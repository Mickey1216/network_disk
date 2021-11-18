<template>
  <div class="list">
    <div class="head">
      <div class="icon"></div>
      <div class="fileName">文件名</div>
      <div class="fileSize">文件大小</div>
    </div>
    <div class="other" v-for="item in list">
      <div class="icon"><i :class="item.isDir ? 'el-icon-folder' : 'el-icon-tickets'"></i></div>
      <div class="fileName" @click="getFileName($event)">{{item.name}}</div>
      <div class="fileSize">{{item.size === '-1' ? '/' : item.size}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ["list"],
  methods: {
    getFileName(e){
      let fileName = e.currentTarget.innerHTML
    
      if(fileName.indexOf('.') === -1){   //说明是文件夹
        this.$emit('getFileName',fileName)
      }else{

      }
    }
  }
};
</script>

<style lang="css" scoped>
.list {
  width: 80%;
  height: 100%;
  border-left: 1px solid #DDDDDD;
  border-right: 1px solid #DDDDDD;
  border-top: 1px solid #DDDDDD;
}
.head {
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight:600;
  color: #555555;
  border-bottom: 1px solid #DDDDDD;
  background-color: #BBBBBB;
}
.icon {
  width: 7%;
  margin-left: 10px;
}
i{
  color:#666666;
}
.fileName {
  width: 80%;
}
.fileSize{
  min-width: 80px;
}
.other{
  height: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  color:#6699CC;
}
.other:hover{
  background-color: #eeeeee;
}
.other .fileName:hover{
  cursor: pointer;
  color:#6666FF;
  text-decoration: underline;
}
</style>