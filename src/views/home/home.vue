<template>
<div id="home">
  <nav-bar class="navbar"><div slot="center">购物街</div></nav-bar>
  <scroll class="content" ref="scroll"
  :proprobeType="3"
  :pullUpLoad="true"
  @scroll="TabscrollCl"
  @pullingUp="Loadmore"
  >
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :tabItem="tabItem" @tabClick="tabClick"></tab-control>
    <good-list :goodsList="showGoods"></good-list>
  </scroll>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodList.vue'

import {getHomeMultidata,getHomeGoods} from "network/home"

export default {
  name: "Home",
  data () {
    return {
      banners: [],
      recommends: [],
      tabItem: ['流行','新款','精选'],
      goods: {
        'pop': {page:0,list:[]},
        'new': {page:0,list:[]},
        'sell': {page:0,list:[]},
      },
      currentType: 'pop'
    }
  },
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },

  methods: {
    TabscrollCl() {

    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    //获取轮播图和推荐商品的数据
    getHomeMultidata() {
      console.log('yes');
      getHomeMultidata().then( res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then( res => {
        console.log('商品数据'+ res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = page
      })
    },
    Loadmore() {
      this.getHomeGoods(this.currentType)
      //完成上拉加载更多
      this.$refs.scroll.finishPullUp()
      //刷新scroll的函数，以便下次的刷新
      this.$refs.scroll.refresh()
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
}
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.navbar {
  color: #fff;
  background-color: var(--color-tint);
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>