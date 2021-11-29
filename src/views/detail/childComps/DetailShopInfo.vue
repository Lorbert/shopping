<template>
  <div id="detail-shopinfo">
    <div class="shop-name">
      <img :src="shopInfo.Logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="shop-middle-item">
          <div class="item-count">{{shopInfo.Sells | sellCountFilter}}</div>
          <div class="item-text">总销量</div>
        </div>
        <div class="shop-middle-item">
          <div class="item-count">{{shopInfo.TGoods}}</div>
          <div class="item-text">全部宝贝</div>
        </div>
        <div class="shop-middle-item">
          <div class="item-count">{{shopInfo.Fans}}</div>
          <div class="item-text">粉丝</div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td >{{item.name}}</td>
            <td class="item-score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高': '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if(value < 1000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }

}
</script>

<style scoped>
#detail-shopinfo {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-name {
  line-height: 45px;
  display: flex;
  align-items: center;
}
.shop-name img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .1);
}
.shop-name span {
  margin-left: 10px;
}
.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.shop-middle-left {
  display: flex;
  flex: 1;
  justify-content: space-around;
  color: #333333;
  text-align: left;
  border-right: 1px solid rgba(0, 0, 0, .1);
}
.item-count {
  text-align: center;
  font-size: 16px;
}
.item-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right {
  flex: 1;
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.shop-middle-right .item-score {
  color: #53a732;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better span {
  background-color: #53a732;
  color: #fff;
  text-align: center;
}
.shop-middle-right .better-more span {
  background-color: #f13e3a;
}
.shop-bottom {
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
  background-color: #eef3f8;
  border-radius: 10px;
}
.shop-bottom .enter-shop {
  font-size: 12px;
}
</style>