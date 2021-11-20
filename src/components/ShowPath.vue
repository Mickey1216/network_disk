<template>
    <div class="showpath">
      <span v-for="(item, index) in path">
        <a :class="[index === path.length - 1 ? 'linkDisabled' : 'linkAble']" :href="get_prefix_path_url(index)">{{ item }}</a>
        <span v-if="index < path.length - 1">&nbsp;/&nbsp;</span>
      </span>
    </div>
</template>

<script>
export default {
  props:["path"],
  methods: {
    get_prefix_path_url(index){
      let path_str = ""
      for(let i = 0; i <= index; i++){
        path_str += this.path[i] + '/'
      }
      
      return index ? path_str : path_str.substring(0, path_str.length - 1)
    }
  }
}
</script>

<style lang="css" scoped>
  .showpath{
    display: flex;
    align-items: center;
    border-radius: 5px;
    width: 80%;
    height: 40px;
    background-color: #eeeeee;
    color: #6699CC;
    margin-top: 20px;
    padding-left: 15px;
  }

  .linkAble, .linkDisabled {
    text-decoration: none;
  }
  .linkAble{
    color: rgb(0, 123, 255);
  }
  .linkDisabled{
    color: rgb(108, 117, 125);
    pointer-events: none;
  }
</style>