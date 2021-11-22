<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a href="item.link">
          <img :src="item.image" @load="ImageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners : {
      type: Array,
      default() {
        return[]
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    ImageLoad() {
      if (!this.isLoad) {
        this.$emit('ImageLoad');
        this.isLoad = true;
      }
    }
  }
}
</script>