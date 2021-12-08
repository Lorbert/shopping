<template>
  <div id="menu">
    <ul>
      <li><img src="~assets/img/profile/message.svg" alt=""><span>我的消息</span></li>
      <li><img src="~assets/img/profile/shopping.svg" alt=""><span>积分商城</span></li>
      <li><img src="~assets/img/profile/vip.svg" alt=""><span>会员卡</span></li>
      <li @click="backCart"><img src="~assets/img/profile/cart.svg" alt=""><span>我的购物车</span></li>
      <li><img src="~assets/img/profile/phone.svg" class="last-img"><span>下载购物APP</span></li>
    </ul>
  </div>
</template>

<script>

export default {
  name:'MyMenu',
  methods: {
    backCart() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>
#menu {
  /* height: 60vw; */
  background-color: #fff;
}
#menu ul li {
  display: flex;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #eeeeee;
  font-size: 15px;
  height: 15vw;
  line-height: 15vw;
  align-items: center;
}
#menu ul li img {
  width: 40px;
  height: 40px;
}
#menu ul li span {
  padding-left: 8px;
}
#menu ul li .last-img {
  color: pink;
}
</style>