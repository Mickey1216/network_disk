<template>
    <div class="search">
        <div class="title">查找文件:</div>
        <div class="input">
            <input type="text">
        </div>
        <div class="searchBtn">搜索</div>
        <div class="allFileBtn">全部文件</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
 
    }
  },
  methods:{
      
  }
}
</script>

<style lang="css" scoped>
    .search{
        width: 80%;
        height: 60px;
        background-color: #fff;
        margin-top: 15px;
        display: flex;
        align-items: center;
    }
    .title{
        font-size: 16px;
        min-width: 75px;
    }
    .input{
        margin-left: 15px;
    }
    input{
        width: 180px;
        height: 33px;
        border: 1px solid #cccccc;
        border-radius: 5px;
        background:none; 
        outline:none;
        padding-left: 10px;
    }
    input:focus{
        box-shadow: 0px 0px 5px #6699FF;
    }
    .searchBtn{
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50px;
        height: 33px;
        color: #ffffff;
        background-color:#6699CC;
        border-radius: 5px;
    }
    .searchBtn:hover,.allFileBtn:hover{
        background-color: #6666FF;
    }
    .allFileBtn{
        margin-left: 10px;
        border: 1px solid #6699CC;
        color: #6699CC;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 70px;
        height: 33px;
        border-radius: 5px;
    }
    .allFileBtn:hover{
        background-color: #6666FF;
        color: #fff;
    }
</style>