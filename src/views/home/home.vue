<template>
<div id="home">
  <nav-bar class="navbar"><div slot="center">购物街</div></nav-bar>
  <scroll class="content" ref="scroll"
  :proprobeType = 3
  @scroll="TabScollCl"
  @pullingUp="Loadmore"
  :pullUpLoad="true"
  >
    
  </scroll>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  name: "Home",
  data () {
    return {

    }
  },
  components: {
    NavBar,
    Scroll
  },
}
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.navbar {
  color: #fff;
  background-color: var(--color-tint);
}
</style>