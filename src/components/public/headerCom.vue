<template>
  <div class="header">
  <div class="mui-input-row mui-search">
    <input type="search" class="mui-input-clear" placeholder="搜索商家.商品名称">
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.header{
  height: 60px;
  background-color: rgb(17, 212, 247);
  padding-top: 10px;
  padding-left: 5%;
}
input[type="search"] {
  background-color: white;
  color: black;
  border-radius: 17px;
  width: 90%;
}
</style> 
