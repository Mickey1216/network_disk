<template>
  <div class="show">
    <div class="navClass"><Nav/></div>
    <div class="showClass">
      <ShowPath :path="path"/>
      <Search/>
      <List :list="list" @getFileName="getFileName"/>
    </div> 
  </div>
</template>

<script>
import Nav from "../components/Nav"
import ShowPath from "../components/ShowPath"
import Search from "../components/Search"
import List from "../components/List"
import {request} from '../network/request'

export default {
  components: {
    Nav,
    ShowPath,
    Search,
    List,
  },
  data() {
    return {
      list:[],
      path:""
    }
  },
  methods:{
    getFileName(fileName){
      this.path = '/'+fileName
    }
  },
  beforeCreate(){
    request({url:'/api/dir'})
      .then(res => {
        this.list = res.data.data
        console.log(this.list)
      })
  }
}
</script>

<style lang="css" scoped>
  .showClass{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>