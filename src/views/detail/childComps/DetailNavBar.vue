<template>
  <div id="detaild-bav">
    <nav-bar>
      <div class="detail-left" slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="detail-center" slot="center" >
        <div class="centerIndex"
         v-for="(item,index) in navList" :key="index"
         :class="{active: index === currentIndex}"
         @click="navClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      navList: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    navClick(index) {
      this.currentIndex = index
      this.$emit('navClick',index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail-center {
  display: flex;
  /* justify-content: space-between; */
}
.centerIndex {
  font-size: 13px;
  flex: 1;
}
.detail-left {
  margin-top: 6px;
}
.active {
  color: var(--color-high-text);
}
</style>