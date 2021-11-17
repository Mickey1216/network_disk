<template>
  <div class="show">
    <div class="navClass"><Nav/></div>
    <div class="showClass">
      <ShowPath/>
      <Search/>
      <List/>
    </div> 
  </div>
</template>

<script>
import Nav from "../components/Nav"
import ShowPath from "../components/ShowPath"
import Search from "../components/Search"
import List from "../components/List"

export default {
  components: {
    Nav,
    ShowPath,
    Search,
    List,
  },
  data() {
    return {
    }
  },
  methods:{}
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