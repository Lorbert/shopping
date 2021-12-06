<template>
  <div id="cartgoods">
    <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'

export default {
  name:'CartGoods',
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>