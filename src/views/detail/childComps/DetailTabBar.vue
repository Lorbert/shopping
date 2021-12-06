<template>
  <div id="detail-tabbar">
    <div class="tabbar-left bar-item">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="tabbar-right bar-item">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTabBar',
  methods: {
    addToCart() {
      this.$emit('addToCart');
    }
  }

}
</script>

<style scoped>
#detail-tabbar {
  position: relative;
  display: flex;
  height: 49px;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
}
.bar-item {
  flex: 1;
  display: flex;
  text-align: center;
}
.bar-item > div {
  flex: 1;
}
.tabbar-left .text {
  font-size: 13px;
}
.tabbar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.tabbar-left .service {
  background-position: 0 -54px;
}

.tabbar-left .shop {
  background-position: 0 -98px;
}
.tabbar-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}
.tabbar-right .cart {
  background-color: #ffe817;
  color: #333;
}
.tabbar-right .buy {
  background-color: #f69;
}
</style>