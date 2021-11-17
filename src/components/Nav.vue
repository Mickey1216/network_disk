<template>
  <div class="nav">
    <div class="title">网盘-个人下载器</div>
    <router-link to="/"><div class="home">网盘首页</div></router-link>
    <router-link to="/about"><div class="about">关于&帮助</div></router-link>
    <div class="github"><a href="https://github.com/Mickey1216"><i class="icon el-icon-s-custom"></i></a></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
       
    }
  },
  methods:{
     
  }
}
</script>

<style lang="css" scoped>
  .nav{
    width:100%;
    height:50px;
    background-color: #555;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
  .home:hover,.about:hover,.icon:hover{
    cursor:pointer;
    color: #6699CC;
  }
  .icon{
    font-size: 20px;
  }
  a{
    text-decoration:none;
    color: #ffffff;
  }
</style>