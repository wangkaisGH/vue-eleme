<template>
  <div class="product-list">
     <!-- 商品列表 -->
    <ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="(item) in itemInfo" :key="item.id" @click="getShopInfo(item.id)">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" :src="item.imgUrl">
				<div class="mui-media-body">
					{{item.title}}
          <p> <span><i>{{item.starNamber|setStarNamber(item.starNamber)}}</i>{{item.starNamber}}&nbsp;&nbsp;&nbsp;月售1124单</span> <span class="zhushida">准时达</span> <span class="fengnaoda">蜂鸟专送</span></p>
          <p> <span>￥20起送 &nbsp;| &nbsp;配送费￥20</span><span>4.2km&nbsp;| &nbsp;41分钟</span></p>
				  <div class="line"></div>
          <div>
            <span class="te">特</span> 折扣商品
          </div>
          <div>
            <span class="shou">首</span> 新用户下单立减17元
          </div>
           <!-- <div class="line"></div>
           <p>
             附近还有1家福兰酒家</p> -->
				</div>
			</a>
		</li>
	</ul> 
  </div>
</template>
<script>
import Root from '../../../config/rootURL.js'
export default {
  data () {
      return {
      id:this.$route.params.shopId,
      }
  }, 
  created () {
    this.getHomeIocon()
  }, 
  methods: {
    
  },
  props: {
    type: String,
    // search: search
  },
  filters:{
     setStarNamber (input,namber) {
      var rate = namber;  //评分
      return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
    }
  }
}
</script>

<style scoped>
.product-list>.mui-table-view{
    padding-bottom: 55px;
    padding-top: 10px;
    border: none;
}
.mui-media-body{
  font-size: 15px;
  font-weight: 900;
}
.mui-media-body p{
  color: #696969;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  justify-content: space-between
}
.mui-media-body p i{
  color: #FEBE04;
  font-style: normal;
}
.mui-media-body div{
  font-size: 12px;
   color: #696969;
}
.zhushida{
  height: 20px;
  line-height: 20px;
  color: #06A0F8;
  border: #06A0F8 solid 1px;
  border-radius: 3px;
  padding: 0px 2px;
}
.fengnaoda{
  background-color: #06A0F8;
  color: white;
  border-radius: 3px;
  height: 20px;
  line-height: 20px;
  padding: 0 2px
}
.line{
  height: 1px;
  background-color: #E7E7E7;
  margin-top: 8px;
  margin-bottom: 8px;
}
.te,.shou{
  background-color: #F5884F;
  padding: 0 3px;
  color:white;
  border-radius: 2px;
}
.shou{
  background-color: #78B95D;
}
</style>
