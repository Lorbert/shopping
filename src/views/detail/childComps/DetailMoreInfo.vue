<template>
  <div id="more-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="top-info">
      <div class="start"></div>
      <div class="center">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="key-info">{{detailInfo.detailImage[0].key}}</div>
    <div class="body-info">
      <img v-for="(item,key) in detailInfo.detailImage[0].list" :key="key" :src="item" @load="ImageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailMoreInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imageLength: 0
    }
  },
  methods: {
    ImageLoad() {
      if (++this.counter === this.imageLength ) {
        this.$emit('ImageLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list,length;
    } 
  }
}
</script>

<style scoped>
#more-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.top-info {
  padding: 0 15px;
}
.top-info .center {
  padding: 15px 0;
  font-size: 14px;
}
.top-info .start,
.top-info .end {
  position: relative;
  height: 1px;
  width: 90px;
  background-color: #a3a3a5;
}
.top-info .start {
  float: left;
}
.top-info .end {
  float: right;
}
.top-info .start::before,
.top-info .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.top-info .end::after {
  right: 0;
}
.body-info img {
  width: 100%;
  height: 100%;
} 
.key-info {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
</style>