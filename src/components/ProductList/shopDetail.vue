<template>
  <div class="product-list">
    <headerCom></headerCom>
    <h4 class="shop-name">阿上阿上麻辣烫（新建村店）</h4>
    <p class="shop">
      <span>
        <i>{{"dddd"|setStarNamber("3")}}</i>&nbsp;&nbsp;&nbsp;月售1124单</span>
      <span class="zhushida">准时达</span>
      <span class="fengnaoda">蜂鸟专送</span>
    </p>
    <p>
      <span>￥20起送 &nbsp;| &nbsp;配送费￥20</span>
      <span>4.2km&nbsp;| &nbsp;41分钟</span>
    </p>

    <div class="mui-content">
      <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <a class="mui-control-item" href="#item1mobile">
            点餐
          </a>
          <a class="mui-control-item" href="#item2mobile">
            评价
          </a>
          <a class="mui-control-item" href="#item3mobile">
            商家
          </a>
        </div>
        <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4"></div>
        <div class="mui-slider-group">
          <div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
            <div id="scroll1" class="mui-scroll-wrapper">
              <div class="mui-scroll">
                <orderFood></orderFood>
              </div>
            </div>
          </div>
          <div id="item2mobile" class="mui-slider-item mui-control-content">
            <div id="scroll2" class="mui-scroll-wrapper">
              <div class="mui-scroll">

              </div>
            </div>
          </div>
          <div id="item3mobile" class="mui-slider-item mui-control-content">
            <div id="scroll3" class="mui-scroll-wrapper">
              <div class="mui-scroll">

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Root from '../../../config/rootURL.js'
import headerCom from '../public/headerCom.vue'
import orderFood from '../orderFood/orderFood.vue'
import mui from '../../../static/mui/js/mui.js'
export default {
  data() {
    return {
      id: this.$route.params.shopId
    }
  },
  created() {},
  mounted() {
    mui.init({
      swipeBack: false
    })
    mui('#slider').slider({
      // 初始化菜单滑动
    })
  },
  methods: {},
  props: {
    type: String
    // search: search
  },
  filters: {},
  components: {
    headerCom,
    orderFood
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}
.product-list {
  text-align: center;
}
.zhushida {
  height: 20px;
  line-height: 20px;
  color: #06a0f8;
  border: #06a0f8 solid 1px;
  border-radius: 3px;
  padding: 0px 2px;
}
.fengnaoda {
  background-color: #06a0f8;
  color: white;
  border-radius: 3px;
  height: 20px;
  line-height: 20px;
  padding: 0 2px;
}
p i {
  color: #febe04;
  font-style: normal;
}
.shop-name {
  text-align: center;
  margin-top: 10px;
  font-size: 24px;
  margin-bottom: 10px;
}
.mui-content .mui-row .mui-fullscreen {
  height: 100%;
}
#scroll1 {
  height: 540px;
}
.mui-content {
  height: 540px;
}
.mui-slider .mui-slider-group {
  height: 540px;
}
.mui-table-view {
  height: 100%;
}
.mui-content {
  background-color: white;
}
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  color: black;
  font-weight: 700;
}
</style>
