<template>
  <div class="template">
     <div class="mui-content mui-row mui-fullscreen">
			<div class="mui-col-xs-3">
				<div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
          <a class="mui-control-item" href="#content1">选项卡1</a>
          <a class="mui-control-item" href="#content2">选项卡2</a>
          <a class="mui-control-item" href="#content3">选项卡3</a>
          <a class="mui-control-item" href="#content4">选项卡4</a>
          <a class="mui-control-item" href="#content5">选项卡5</a>
          <a class="mui-control-item" href="#content6">选项卡6</a>
				</div>
			</div>
			<div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
       
          <productList></productList>

			</div>
		</div>
  </div>
</template>
<script>
import productList from '../ProductList/ProductList.vue'
export default {
  dara () {
    return {}
  },
  components: {
    productList: productList
  }
}
</script>
<style scoped>
.mui-segmented-control .mui-control-item{
  width: 90px;
  height: 60px;
  line-height: 60px;
  background-color: #F8F8F8;
  margin: 0;
}
.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical .mui-control-item{
  border-bottom: none;
  color: #969696;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
  color:black ;
  font-weight: 700;
}
</style>
