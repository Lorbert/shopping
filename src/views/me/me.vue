<template>
  <div id="mine">
    <nav-bar class="mytop"><div slot="center">我的</div></nav-bar>
    <login></login>
    <wallet></wallet>
    <my-menu></my-menu>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import Login from './childComps/Login.vue';
import MyMenu from './childComps/MyMenu.vue';
import Wallet from './childComps/Wallet.vue'

export default {
  name: "Me",
  components: {
    NavBar,
    Login,
    MyMenu,
    Wallet
  }
}
</script>
<style scoped>
#mine {
  height: 100vh;
  background-color: #fff;
}
.mytop {
  position: relative;
  color: #fff;
  background-color: var(--color-tint);
  z-index: 9;
}
</style>