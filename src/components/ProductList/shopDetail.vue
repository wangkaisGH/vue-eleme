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
                <div class=" mui-row mui-fullscreen">
                  <div class="mui-col-xs-3">
                    <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                      <a class="mui-control-item" href="#content">选项1</a>
                      <a class="mui-control-item" href="#content">选项2</a>
                      <a class="mui-control-item" href="#content">选项3</a>
                      <a class="mui-control-item" href="#content">选项4</a>
                    </div>
                  </div>
                  <div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
                    <div id="item1" class="mui-control-content mui-active">
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                      </ul>
                    </div>
                    <div id="item2" class="mui-control-content">
                      <ul>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                      </ul>
                    </div>
                    <div id="item3" class="mui-control-content">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="item2mobile" class="mui-slider-item mui-control-content">
            <div id="scroll2" class="mui-scroll-wrapper">
              <div class="mui-scroll">
                <div class="mui-loading">
                  <div class="mui-spinner">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="item3mobile" class="mui-slider-item mui-control-content">
            <div id="scroll3" class="mui-scroll-wrapper">
              <div class="mui-scroll">
                <div class="mui-loading">
                  <div class="mui-spinner">
                  </div>
                </div>
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
export default {
  data() {
    return {
      id: this.$route.params.shopId
    }
  },
  created() {},
  methods: {},
  props: {
    type: String
    // search: search
  },
  filters: {},
  components: {
    headerCom
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
  height: 300px;
}
#scroll1 {
  height: 300px;
}
.mui-content {
  height: 1000px;
}
</style>
