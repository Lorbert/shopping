<template>
<div id="cart">
  <nav-bar class="nav-top"><div slot="center">购物车({{cartlength}})</div></nav-bar>
  <scroll ref="scroll"
  :proprobeType="3">
  <cart-list></cart-list>
  <cart-bottom></cart-bottom>
  </scroll>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import CartList from './childComps/CartList.vue'
import CartBottom from './childComps/CartBottom.vue'

import {mapGetters} from 'vuex'

export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottom
  },
  computed: {
    ...mapGetters(['cartlength'])
  },
  activated () {
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
.nav-top {
  color: #fff;
  background-color: var(--color-tint);
}
</style>