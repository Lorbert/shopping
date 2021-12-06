<template>
<div id="detail">
  <detail-nav-bar class="detail-nav" @navClick="navClick" ref="navbar"></detail-nav-bar>
  <scroll class="wrapper" ref="scroll"
  :proprobeType="3"
  @scroll="TabscrollCl"
  >
    <detail-swiper :detailBanners="detailBanners"></detail-swiper>
    <detail-info :goods="goods"></detail-info>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <detail-more-info :detailInfo="detailInfo" @ImageLoad="ImageLoad"></detail-more-info>
    <detail-params :detailParamInfo="detailParamInfo" ref="params"></detail-params>
    <detail-user-rate :detailRate="detailRate" ref="rate"></detail-user-rate>
    <goods-list :goodsList="recommends" ref="recommend"></goods-list>
  </scroll>
  <detail-tab-bar @addToCart="addCart"></detail-tab-bar>
  <back-top @click.native="backTop" v-show="showBackTop"></back-top>
</div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailInfo from './childComps/DetailInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailMoreInfo from './childComps/DetailMoreInfo.vue'
import DetailParams from './childComps/DetailParams.vue'
import DetailUserRate from './childComps/DetailUserRate.vue'
import DetailTabBar from './childComps/DetailTabBar.vue'

import GoodsList from 'components/content/goods/GoodList.vue'
import BackTop from 'components/common/backTop/BackTop.vue'


import {getDetail,Goods,ShopInfo,GoodsParam,getRecommend} from 'network/detail.js'
import {itemListenerMixin} from 'common/mixin.js' 
import {debounce} from 'common/utils'

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
      detailParamInfo:{},
      detailRate:[],
      recommends:[],
      detailTabbarY:[],
      detailTabbarListener:null,
      currentIndex: 0,
    }
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailMoreInfo,
    DetailParams,
    DetailUserRate,
    GoodsList,
    DetailTabBar,
    BackTop,
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

      //获取商品的参数信息
      this.detailParamInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      //获取商品的用户评价信息
      this.detailRate = data.rate.list
    })
    getRecommend().then(res => {
      this.recommends = res.data.list
    }),
    this.detailTabbarListener = debounce(() => {
      this.detailTabbarY = [];
      this.detailTabbarY.push('0');
      this.detailTabbarY.push(
        this.$refs.params.$el.offsetTop-44,
        this.$refs.rate.$el.offsetTop-44,
        this.$refs.recommend.$el.offsetTop-44,
        Number.MAX_VALUE
      );
      console.log(this.detailTabbarY)
    },100)
  },
  mounted() {
    ;
  },
  methods: {
    navClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.detailTabbarY[index])
    },
    ImageLoad() {
      this.refresh();
      this.detailTabbarListener();
    },
    backTop() {
      this.$refs.scroll.scrollTo(0,0)
    },
    TabscrollCl(position) {
      if(position.y < -1000){
        this.showBackTop = true
      } else {
        this.showBackTop = false
      }
      if(-position.y > this.tabOffsetTop){
        this.isShowTabC = true
      } else {
        this.isShowTabC = false
      }
      const positionY = -position.y;
      let len = this.detailTabbarY.length;
      for( let i = 0; i< len-1 ; i++) {
        if( this.currentIndex != i && (this.detailTabbarY[i] <= positionY) &&(positionY < this.detailTabbarY[i+1])) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
    },
    addCart() {
      console.log('加入购物车');
      const product ={};
      product.image = this.detailBanners[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.count = 0;
      this.$store.dispatch('addCart',product).then( res => {
        this.$toast.show(res,2000)
      })
    },
    
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