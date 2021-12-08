<template>
  <div id="category">
    <nav-bar class="nav-top"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <category-left :categoryList="categoryList" class="category-left" @cateClick= "changeType" ref="cateLeft"></category-left>
      <scroll :probeType="3" ref="scroll" class="category-right">
        <category-type :subcategory="subcategory" @ImgLoad="ImgLoad"></category-type>
        <tab-control :tabItem="['流行','新款','精选']" @tabClick="tabClick" ref="tabscroll"></tab-control>
        <good-list :goodsList="showGoods"></good-list>
      </scroll>
    </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import CategoryLeft from './childComps/CategoryLeft.vue';
import CategoryType from './childComps/CategoryType.vue';
import TabControl from 'components/content/tabControl/TabControl';
import GoodList from 'components/content/goods/GoodList.vue';
import {itemListenerMixin} from 'common/mixin.js';

import {getSubcategory,getCategory,getSubDetail} from 'network/category.js'


export default {
  name: "Category",
  mixins: [itemListenerMixin],
  components: {
    NavBar,
    Scroll,
    CategoryLeft,
    CategoryType,
    TabControl,
    GoodList
  },
  data () {
    return {
      subcategory:[],
      categoryList:[],
      maitKey:'',
      miniWallkey: '',
      goodslist:{
        'pop': {list:[]},
        'new': {list:[]},
        'sell': {list:[]}
      },
      currentType: 'pop',
      currentIndex: -1,
    }
  },
  created () {
    getCategory().then(res => {
      this.categoryList = res.data.category.list;
      this._getSubCate(0);
    })
  },
  methods: {
    changeType(index) {
      this._getSubCate(index);
      this.$refs.scroll.scrollTo(0,0);
      this.$refs.tabscroll.currentIndex = 0 ;
      this.currentType = 'pop'
    },
    _getSubCate(index) {
      this.currentIndex = index;
      this.getSubcategory(this.categoryList[this.currentIndex].maitKey);
      this.miniWallkey = this.categoryList[this.currentIndex].miniWallkey;
      this.getSubDetail(this.miniWallkey,'pop')
      this.getSubDetail(this.miniWallkey,'new')
      this.getSubDetail(this.miniWallkey,'sell')
    },
    tabClick(indexs) {
      switch(indexs) {
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
      this.$nextTick(showGoods())
    },
    getSubcategory(key) {
      getSubcategory(key).then(res => {
        this.subcategory = res.data.list;
        this.$refs.scroll.refresh()
      })
    },
    getSubDetail(wallkey,type) {
      getSubDetail(wallkey,type).then(res => {
        this.goodslist[type].list = res;
      })
    },
    ImgLoad() {
      this.$refs.scroll.refresh()
    },
  },
  computed: {
    showGoods() {
      if ( this.currentIndex === -1) return [];
     return this.goodslist[this.currentType].list
   },
  }
}
</script>
<style scoped>
.nav-top {
  position: relative;
  color: #fff;
  background-color: var(--color-tint);
  z-index: 99;
}
.category-left {
  width: 27%;
}
.content {
  position: absolute;
  bottom: 49px;
  top: 44px;
  left: 0;
  right: 0;
  display: flex;
}
.category-right {
  width: 73%;
}
</style>