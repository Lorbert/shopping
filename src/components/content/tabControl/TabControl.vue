<template>
  <div id="tab-control">
    <div id="tab-item" v-for="(item,index) in tabItem" :key="index"
    :class="{active: index === currentIndex}"
    @click="tabClick(index)">
    <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabItem: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tabClick( index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
#tab-control {
  display: flex;
  height: 49px;
  line-height: 49px;
  text-align: center;
  background-color: #fff;
}
#tab-item {
  flex: 1;
}
#tab-item span {
  padding: 3px 5px 7px 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-tint);
}
</style>