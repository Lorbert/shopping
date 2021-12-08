<template>
  <div id="cate-left">
    <scroll :probeType="3" ref="scroll" class="wrapper">
      <div class="cate-title" 
      v-for="(item,index) in categoryList" :key="index" 
      :class="{'isActive': index === currentIndex}"
      @click="cateClick(index)">{{item.title}}</div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue';

export default {
  name:'CategoryLeft',
  components: {
    Scroll,
  },
  props: {
    categoryList: {
      type:Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    cateClick(index) {
      this.currentIndex = index;
      this.$emit('cateClick',index)
    }
  }
}
</script>

<style scoped>
.cate-title {
  font-size: 17px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  text-align: center;
}
.isActive {
  color: var(--color-tint);
  border-bottom: 1px solid pink;
  background-color: #FFFFF0;
}
.wrapper {
  height: 100%;
}
</style>