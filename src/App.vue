<template>
  <div id="app">
    <Nav/>
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

</style>
