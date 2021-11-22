<template>
<div id="home">
  <nav-bar class="navbar"><div slot="center">购物街</div></nav-bar>
  <tab-control :tabItem="tabItem" @tabClick="tabClick" id="tab-control" ref="tabControl1" v-show="isShowTabC" ></tab-control>
  <scroll class="content" ref="scroll"
  :proprobeType="3"
  :pullUpLoad="true"
  @scroll="TabscrollCl"
  @pullingUp="Loadmore"
  >
    <home-swiper :banners="banners" @ImageLoad="ImageLoad"></home-swiper>
    <recommend-view :recommend="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :tabItem="tabItem" @tabClick="tabClick" ref="tabControl2"></tab-control>
    <good-list :goodsList="showGoods"></good-list>
  </scroll>
  <back-top @click.native="backTop()" v-show="showBackTop"></back-top>
</div>
</template>
<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/common/backTop/BackTop.vue'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodList.vue'

import {itemListenerMixin} from 'common/mixin.js'
import {getHomeMultidata,getHomeGoods} from "network/home"

export default {
  name: "Home",
  mixins: [itemListenerMixin],
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
      currentType: 'pop',
      ScrollY: 0,
      tabOffsetTop: 0,
      isShowTabC: false
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
    BackTop,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // const refresh = this.debounce(this.$refs.scroll.refresh,200);
    // this.$bus.$on('itemImageLoad', () => {
    //   refresh()
    // })
  },
  activated () {
    this.$refs.scroll.scrollTo(0,scrollY);
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.scrollY = this.$refs.scroll.getScrollY()
  },
  methods: {
    //点击分类的函数
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //获取轮播图和推荐商品的数据
    getHomeMultidata() {
      getHomeMultidata().then( res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // 获取商品的数据
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
      this.$refs.scroll.finishPullUp();
      //刷新scroll的函数，以便下次的刷新
      this.$refs.scroll.refresh()
    },
    ImageLoad() {
      //2.获取tabControl的offsetTop
      //所有组件都有一个属性$el：用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
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
#tab-control {
  position: relative;
  z-index: 9;
}
</style>