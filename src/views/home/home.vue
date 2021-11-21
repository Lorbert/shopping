<template>
<div id="home">
  <nav-bar class="navbar"><div slot="center">购物街</div></nav-bar>
  <scroll class="content" ref="scroll"
  :proprobeType = 3
  :pullUpLoad="true"
  >
    <home-swiper :banners="banners"></home-swiper>
  </scroll>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'

import {getHomeMultidata} from "network/home"
export default {
  name: "Home",
  data () {
    return {
      banners: []
    }
  },
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
  },
  created() {
    this.getHomeMultidata()
    
  },

  methods: {
    getHomeMultidata() {
      console.log('yes');
      getHomeMultidata().then( res => {
        this.banners = res.data.banner.list
      })
    }
  }
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