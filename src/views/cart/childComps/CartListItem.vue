<template>
  <div id="cartitem">
    <check-button class="checkbtn" @checkBtnClick="checkBtnClick" :checked="product.checked"></check-button>
    <div class="goods-img"><img :src="product.image" alt="商品图片"></div>
    <div class="goods-info">
      <div class="goods-title">{{product.title}}</div>
      <div class="goods-desc">商品描述：{{product.desc}}</div>
      <div class="goods-bottom">
        <div class="goods-price left">￥{{product.price}}</div>
        <div class="goods-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name:'CartListItem',
  components: {
    CheckButton,
  },
  props: {
    product: {
      type:Object,
      default() {
        return{}
      }
    }
  },
  methods: {
    checkBtnClick() {
      console.log('=====');
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>
#cartitem {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.checkbtn {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.goods-title,
.goods-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-img {
  padding: 5px
}
.goods-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px
}

.goods-info {
  font-size: 17px;
  color: #333;
  position: relative;
  padding: 5px 10px;
  overflow: hidden;
}
.goods-info .goods-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.goods-bottom {
  position: absolute;
  margin-top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.goods-bottom .goods-price {
  color: orangered;
}
</style>