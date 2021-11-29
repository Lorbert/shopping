<template>
<div id="detail">
  <detail-nav-bar class="detail-nav" @navClick="navClick"></detail-nav-bar>
  <scroll class="wrapper" ref="scroll"
  :proprobeType="3"
  >
  <detail-swiper :detailBanners="detailBanners"></detail-swiper>
  <detail-info :goods="goods"></detail-info>
  <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
  <detail-more-info :detailInfo="detailInfo" @ImageLoad="ImageLoad"></detail-more-info>

  </scroll>
</div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailInfo from './childComps/DetailInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailMoreInfo from './childComps/DetailMoreInfo.vue'

import {getDetail,Goods,ShopInfo} from 'network/detail.js'
import {itemListenerMixin} from 'common/mixin.js' 

export default {
  name: "Detail",
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      detailBanners:[],
      goods:{},
      shopInfo:{},
      detailInfo:{},
    }
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailMoreInfo,
  },
  created() {
    //保存路径上传过来的iid
    this.iid = this.$route.params.iid

    //根据iid的请求详细数据
    getDetail(this.iid).then(res=> {
      console.log(res);
      const data = res.result
      //获取轮播图的图片
      this.detailBanners = data.itemInfo.topImages

      //获取商品的基本信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo)
      console.log(this.goods);

      //获取商铺的信息
      this.shopInfo = new ShopInfo(data.shopInfo);

      //获取商品的详细信息
      this.detailInfo = data.detailInfo;
    })

  },
  methods: {
    navClick() {

    },
    ImageLoad() {
      this.refresh()
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.wrapper {
  height: calc(100% - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>