<template>
  <div class="list">
    <div class="head">
      <div class="icon"></div>
      <div class="fileName">文件名</div>
      <div class="fileSize">文件大小</div>
    </div>
    <div class="other" v-for="item in list">
      <div class="icon"><i :class="item.isDir ? 'el-icon-folder' : 'el-icon-tickets'"></i></div>
      <div class="fileName"><a :href="get_link_url(item.name, item.isDir)" :target="item.isDir ? '_self' : '_blank'">{{item.name}}</a></div>
      <div class="fileSize">{{item.size === '-1' ? '/' : item.size}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path_str: "", //文件夹时
      download_str: ""  //文件时
    }
  },
  props: ["list", "path"],
  methods: {
    initialize_current_path(){
      this.path_str = ""
      this.download_str = ""

      let index = 0
      this.path.forEach(p => {
        if(!index)
          this.download_str += p.replace(":8080", ":3000") + '/api/dir/'
        else
          this.download_str += p + '/'

        this.path_str += p + '/'
        index++
      })
    }
  },
  computed: {
    get_link_url(){ //当需要传参数时，使用高阶函数形式
      return (name, isDir) => {
        return (isDir ? this.path_str : this.download_str) + name
      }
    }
  },
  watch: {
    path(){
      this.initialize_current_path()
    }
  },
  created(){
    this.initialize_current_path();
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
}
.other:hover{
  background-color: #eeeeee;
}
.other .fileName:hover{
  color:#6666FF;
}
.other a:hover{
  cursor: pointer;
  text-decoration: underline;
}
.other .fileName{
  color:#6699CC;
}
.other .fileSize{
  text-align: center;
}

div.other a {
  text-decoration: none;
  color: rgb(0, 123, 255);
}
</style>