<template>
 <div id="app">
   
    <!-- 主题内容 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <footerCom></footerCom>
  </div>
</template>

<script>
import footerCom from '../src/components/public/footer.vue'
export default {
  data () {
    return {
      isShow: true
    }
  },
  cretated () {
     console.log(this.$route.name)
  },
  name: 'app',
  components: {
    footerCom
  }
}
</script>

<style>
html,body{
			background-color: white;
    }
</style> 
