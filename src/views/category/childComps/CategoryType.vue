<template>
  <div id="cate-type">
    <div class="type" v-for="(item,index) in subcategory" :key="index">
      <a :href="item.link" class="type-link">
        <img :src="item.image" @load="ImgLoad">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'CategoryType',
  props: {
    subcategory: {
      type:Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      counte: 0,
      imgLength:null,
    }
  },
  methods: {
    ImgLoad() {
      this.counte++;
      if(this.counte === this.imgLength) {
        this.$emit('ImgLoad')
      }
    }
  },
  watch: {
    subcategory() {
      this.imgLength = this.subcategory.length
    }
  }
}
</script>

<style scoped>
#cate-type {
  padding: 20px 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.type {
  position: relative;
  font-size: 14px;
  text-align: center;
  color: #666666;
  width: 33%;
  padding: 5px 0;
}
.type-link {
  display: block;
}
.type-link img {
  width: 62px;
}
</style>