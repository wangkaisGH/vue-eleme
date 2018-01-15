<template>
  <div class="template">
       <!-- 顶部搜索 -->
    <headerCom></headerCom>
      <div id="Gallery" class="mui-slider">
				<div class="mui-slider-group">
                    <div class="mui-slider-item">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"
                                v-for="(item,index) in homeIcon" :key="index">
								<a href="#">
									<span class="mui-icon ">
                                        <svg class="icon" aria-hidden="true">
                                             <use :xlink:href="item.icon"></use>
                                        </svg>
                                    </span>
									<div class="mui-media-body">{{item.name}}</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="mui-slider-item">
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"
                                v-for="(item,index) in homeIcon" :key="index">
								<a href="#">
									<span class="mui-icon ">
                                        <svg class="icon" aria-hidden="true">
                                             <use :xlink:href="item.icon"></use>
                                        </svg>
                                    </span>
									<div class="mui-media-body">{{item.name}}</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="mui-slider-indicator">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
				</div>
	</div>
    <!-- 轮播组件 -->
    <silder></silder>
    <!-- 广告 -->
    <ul class="mui-table-view" id="banner-ul">
		<li class="mui-table-view-cell mui-media banner-li" >
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-right" src="http://localhost:8082/static/img/dashuju.jpg">
				<div class="mui-media-body">
				    限量抢购
					<p class='mui-ellipsis'>超值美味9.9</p>
				</div>
			</a>
		</li>
        <li class="mui-table-view-cell mui-media banner-li" >
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-right" src="http://localhost:8082/static/img/dashuju.jpg">
				<div class="mui-media-body">
				    限量抢购
					<p class='mui-ellipsis'>超值美味9.9</p>
				</div>
			</a>
		</li>
	</ul>
    <!-- 商品列表 -->
    <h4>推荐商家</h4>
    <productList></productList>
  </div>
 
</template>

<script>
import Root from '../../../config/rootURL.js'
import Silder from '../public/silder.vue'
import headerCom from '../public/headerCom.vue'
import productList from '../ProductList/ProductList.vue'
import mui from '../../../static/mui/js/mui.js'
export default {
  data () {
    return {
      homeIcon: []
    }
  },
  created () {
    this.getHomeIocon()
  }, 
  mounted () {
		mui('#Gallery').slider({// 初始化菜单滑动
		})
 },
  methods: {
    getHomeIocon () {
      this.$http.get(Root.SERVER + 'static/data.json').then(data => {
        this.homeIcon = data.data.homeIcon
      })
    }
  },
  components: {
    silder: Silder,
    headerCom: headerCom,
    productList: productList

  }
}
</script>

<style scoped>
#Gallery{
    margin-top: 0;
}
.mint-swipe{
    height:170px;
}
.mint-swipe-item{
    text-align: center;
    overflow: hidden;
}
.mint-swipe-item img{
    width: 100%;
}
.mui-grid-view.mui-grid-9{
    background-color: white;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
   border: 0;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 13px;
    line-height: 13px;
    display: block;
    width: 100%;
    height: 13px;
    margin-top: 8px;
    text-overflow: ellipsis;
    color: #333;
}
.mui-slider-indicator {
    bottom: 0px;
}
.mui-slider-indicator .mui-indicator {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 1px 3px;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}

/* 广告样式 */
.banner-li{
    width: 50%;
    float: left;
    background-color: white
}
#banner-ul{
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
    background-color: #f3f5f5;

}
h4{
    font-size: 16px;
    text-align: center;
    padding: 10px 0
}
</style>
