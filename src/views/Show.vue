<template>
  <div class="show">
    <div class="navClass"><Nav/></div>
    <div class="showClass">
      <ShowPath :path="path"/>
      <Search/>
      <List :list="list" :path="path"/>
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
      path:["http://localhost:8080"]
    }
  },
  methods:{
  },
  created(){
    let _url = window.location.href
    let resources_str = _url.substring(this.path[0].length, _url.length)

    let tgt_url = '/api/dir' + resources_str

    request({url: tgt_url})
      .then(res => {
        this.list = res.data.data

        resources_str.split('/').forEach(elem => {
          if(elem !== '')
            this.path.push(decodeURI(elem))
        })
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