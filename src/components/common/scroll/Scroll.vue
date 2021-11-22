<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      scroll:null,
    }
  },
  mounted () {
    //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType, //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        pullUpLoad: this.pullUpLoad,//往上拉的时候加载
        click: true,// 是否派发click事件，通常判断浏览器派发的click还是betterscroll派发的click，可以用_constructed，若是bs派发的则为true
        observeDOM:true, //开启对 content 以及 content 子元素 DOM 改变的探测
        observeImage: true // 开启对 wrapper 子元素中图片元素的加载的探测
      })
      //2，监听滚动位置
      this.scroll.on('scroll', (position)=> {
        // console.log(position);
        this.$emit('scroll',position)
      })
      //3.监听上拉事件
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
        // this.scroll.finishPullUp()
      })
    },
    methods: {
      scrollTo(x,y,time=500) {
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
        console.log('------');
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    },
}
</script>