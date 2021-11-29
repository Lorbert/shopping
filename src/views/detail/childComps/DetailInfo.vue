<template>
  <div id="detail-info" v-if="Object.keys(goods).length !== 0">
    <div class="detail-title">{{goods.title}}</div> 
    <div class="price">
      <span class="price-low">{{goods.newPrice}}</span>
      <span class="price-old">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span
      class="info-service-item"
      v-for="index in goods.services.length-1" :key="index">
      <img :src="goods.services[index-1].icon" alt="">
      <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
  },
}
</script>

<style scoped>
#detail-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.detail-title {
  color: #222;
}
.price {
  margin-top: 10px;
}
.price .price-low {
  font-size: 24px;
  color: var(--color-high-text);
}
.price .price-old {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.price .discount {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}
.columns {
  display: flex;
  margin-top: 15px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  justify-content: space-between;
  line-height: 30px;
}
.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.info-service span {
  font-size: 12px;
  padding-left: 2px;
  color: #333;
}
.info-service img {
  width: 12px;
  height: 12px;
  position: relative;
  top: 2px;

}
</style>