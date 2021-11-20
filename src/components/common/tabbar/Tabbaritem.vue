<template>
  <div id="tabbar-item" @click="itemClick">
    <div v-if="!isActivity"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-name"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Tabbaritem',
  props: {
    path:String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActivity() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActivity ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>
<style scoped>
#tabbar-item {
  flex: 1;
  height: 49px;
  font-size: 12px;
  text-align: center;
}
#tabbar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>