<template>
  <div class="silder">
      <div id="slider" class="mui-slider" >
			<div class="mui-slider-group mui-slider-loop">
				<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="http://localhost:8082/static/img/1.jpg">
					</a>
				</div>
				<!-- 第一张 -->
				<div class="mui-slider-item">
					<a href="#">
						<img src="http://localhost:8082/static/img/2.jpg">
					</a>
				</div>
				<!-- 第二张 -->
				<div class="mui-slider-item">
					<a href="#">
						<img src="http://localhost:8082/static/img/1.jpg">
					</a>
				</div>
				<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="http://localhost:8082/static/img/2.jpg">
					</a>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import mui from '../../../static/mui/js/mui.js'
export default {
  data () {
    return {
    }
 },
 mounted () {
		mui('#slider').slider({
			interval: 5000
		})
 },
  methods: {
  }
 }
</script>

<style scoped>
.silder{
    padding: 5px;
}
#slider{
    height: 80px;
    overflow: hidden;
}
</style>

