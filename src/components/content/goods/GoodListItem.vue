<template>
  <div id="goodLI" @click="itemClick">
    <img v-lazy="showImage" @load="itemImageLoad" >
    <div class="good-info">
      <p>{{goods.title}}</p>
      <span class="price">{{goods.price}}</span>
      <span class="like">{{goods.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodListItem',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/'+ this.goods.iid)
    },
    //每次图片加载完会触发这个函数
    itemImageLoad() {
      this.$bus.$emit('itemImageLoad')
    }
  },
  computed: {
    showImage() {
      return this.goods.image || this.goods.show.img
    }
  }
}
</script>

<style scoped>
#goodLI {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
#goodLI img {
  width: 100%;
  border-radius: 5px;
}
.good-info {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  font-size: 12px;
}
.good-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.good-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.good-info .like {
  position: relative;
}
.good-info .like::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>