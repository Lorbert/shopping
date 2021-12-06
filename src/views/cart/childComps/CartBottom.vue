<template>
  <div id="cart-bottom">
    <div class="check-content">
      <check-button class="check-button" @click.native="Allcheck()" :checked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="total-price">合计：{{totalPrice}}</div>
    <div class="price-count" @click="calcClick()">去结算：{{checklength}}</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import {mapGetters} from 'vuex'

export default {
  name:'CartBottom',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartlength','cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter( item => {
        return item.checked
      }).reduce((pre,cur) => {
        return pre + cur.price*cur.count 
      },0)
    },
    checklength() {
      return this.cartList.filter( item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      if(this.cartlength === 0) return false;
      return !this.cartList.find( item => !item.checked)
    }
  },
  methods: {
    Allcheck() {
      if( this.isSelectAll ) { //全部选中
        this.cartList.forEach(item => { item.checked = false})
      }else { //全部或者部分未选中
        this.cartList.forEach(item => { item.checked = true})
      }
    },
    calcClick() {
      if( this.cartlength === 0 || this.checklength === 0 ) {
        this.$toast.show('请选择商品！',2000)
      }
    }
  }
}
</script>

<style scoped>
#cart-bottom {
  display: flex;
  position: absolute;
  bottom: 49px;
  right: 0;
  left: 0;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
  background-color: #eee;
}
.check-content {
  display: flex;
  align-items: center;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  line-height: 20px;
}
.total-price {
  margin-left: 20px;
  flex: 1;
}
.price-count {
  width: 90px;
  background-color: rgb(243, 120, 72);
  color: #fff;
  text-align: center;
}
</style>
