<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name:'Toast',
  data() {
    return {
      message:'',
      isShow: false
    }
  },
  methods: {
    show(message,delay=2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.message = '';
        this.isShow = false
      }, delay);
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    color: #fff;
    padding: 8px 10px;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.75);
    z-index: 999;
  }
</style>