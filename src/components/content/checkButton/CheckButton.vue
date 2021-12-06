<template>
  <div id="checkbutton">
    <div class="icon-selector" :class="{'select-active': checked}" @click="selectItem">
      <img src="~/assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    checked: {
      tupe:Boolean,
      default: false,
    }
  },
  methods: {
    selectItem() {
      this.$emit('checkBtnClick')
    }
  }
}
</script>

<style scoped>
.icon-selector {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.select-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>