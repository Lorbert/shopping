<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a href="item.link"><img :src="item.image"></a>
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
}
</script>