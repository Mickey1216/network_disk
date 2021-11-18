<template>
    <div class="showpath">
      <span>http://localhost:3000{{path}}</span>
    </div>
</template>

<script>
export default {
  props:["path"]
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
</style>