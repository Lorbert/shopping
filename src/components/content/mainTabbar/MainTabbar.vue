<template>
  <div id="MainTabbar">
    <!-- <tabbar> -->
      <tabbaritem path='/home'>
        <img src="@/assets/img/tabbar/home.svg" slot='item-icon'>
        <img src="@/assets/img/tabbar/home-active.svg" slot='item-icon-active'>
        <div slot="item-name">首页</div>
      </tabbaritem>

      <tabbaritem path='/category'>
        <img src="@/assets/img/tabbar/Category.svg" slot='item-icon'>
        <img src="@/assets/img/tabbar/Category-active.svg" slot='item-icon-active'>
        <div slot="item-name">分类</div>
      </tabbaritem>
    
      <tabbaritem path='/cart'>
        <img src="@/assets/img/tabbar/shop-cart.svg" slot='item-icon'>
        <img src="@/assets/img/tabbar/shop-cart-active.svg" slot='item-icon-active'>
        <div slot="item-name">购物车</div>
      </tabbaritem>
    
      <tabbaritem path='/me'>
        <img src="@/assets/img/tabbar/profile.svg" slot='item-icon'>
        <img src="@/assets/img/tabbar/profile-active.svg" slot='item-icon-active'>
        <div slot="item-name">我的</div>
      </tabbaritem>
    <!-- </tabbar> -->
  </div>
</template>

<script>
// import Tabbar from  'components/common/tabbar/Tabbar.vue'
import Tabbaritem from  'components/common/tabbar/Tabbaritem.vue'

export default {
  name: 'MainTabbar',
  components: {
    // Tabbar,
    Tabbaritem
  }
}
</script>
<style scoped>
#MainTabbar {
  display: flex;
  position: fixed;
  background-color: #f6f6f6;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, .3);
}
</style>