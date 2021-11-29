<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in detailBanners" :key="index">
      <img :src="item">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name: 'DetailSwiper',
  props: {
    detailBanners: {
      type: Array,
      data () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>