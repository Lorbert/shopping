<template>
  <div id="wallet">
    <div class="content">
      <div class="content-num"><span class="num">0.00</span> 元</div>
      <div class="title">我的余额</div>
    </div>
    <div class="content" style="border-left: 1px solid #eee">
      <div class="content-num"><span class="num">0</span> 个</div>
      <div class="title">我的优惠</div>
    </div>
    <div class="content" style="border-left: 1px solid #eee">
      <div class="content-num"><span class="num">0</span> 分</div>
      <div class="title">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Wallet'
}
</script>

<style scoped>
#wallet {
  display: flex;
  /* height: 20vw; */
  border-bottom: 10px solid #eeeeee;
}
#wallet .content {
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
#wallet .content .num {
  font-weight: bold;
  color: #f13e3a;
  font-size: 27px;
  padding: 5px;
}
#wallet .content .content-num {
  text-align: center;
  width: 100%;
}
#wallet .content .title {
  text-align: center;
  font-size: 15px;
  padding: 5px;
}
</style>