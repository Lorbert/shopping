<template>
  <div id="good-list">
    <good-list-item v-for="item in goodsList" :goods="item" :key="item.title"></good-list-item>
  </div>
</template>
<script>
import GoodListItem from './GoodListItem.vue'
export default {
  name:'GoodList',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style scoped>
#good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);
  padding: 2px;
}
</style>