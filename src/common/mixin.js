import { debounce } from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null,
      showBackTop: false,
    }
  },
  mounted () {
    this.refresh = debounce(this.$refs.scroll.refresh,200);
    this.itemImgListener = () => {
      this.refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
  methods: {
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
    },
  }
}
