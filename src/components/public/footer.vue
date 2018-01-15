<template>
  <div class="footer" v-if="isShow">
 <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-items" to="/home">
				<span class="mui-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jidan"></use>
          </svg>
        </span>
				<span class="mui-tab-label">外卖</span>
			</router-link>
			<router-link class="mui-tab-items" to="/find">
				<span class="mui-icon"><span class="mui-badge">9</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-miantiao"></use>
          </svg>
        </span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-items" to="/indent">
				<span class="mui-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-guozhi"></use>
          </svg>
        </span>
				<span class="mui-tab-label">订单</span>
			</router-link>
			<router-link class="mui-tab-items" to="/mine">
				<span class="mui-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ningmeng"></use>
          </svg>
        </span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
</div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {

  },
  created () {
    // console.log(this.$route.name)
  },
  watch:{
			'$route.name':function(val,old){
        this.isShow = !(val == 'shopDetail');
      }
		}
   
  }
</script>

<style scoped>
html,body{
			background-color: white;
		}
		.root{
			padding-top: 40px;
			padding-bottom: 50px;
		}
		.mui-bar-tab .mui-tab-items.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-items {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-items .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-items .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style> 
