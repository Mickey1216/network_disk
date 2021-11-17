<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"
import Nav from './components/Nav'

export default {
  name: 'app',
  components:{
    Nav
  },
  methods:{
    async getData(){
      const result = await axios.get('/user')
      console.log(result)
    }
  }
}
</script>

<style>
  /* css样式初始化 */
  @import 'assets/css/normalize.css';
</style>
