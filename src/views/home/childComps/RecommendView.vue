<template>
  <div id="recommend">
    <div id="recommend-goods" v-for="(item,index) in recommend" :key="index">
      <a href="item.link">
        <img :src="item.image" >
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
#recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 5px solid #eee;
}
#recommend-goods {
  flex: 1;
}
#recommend-goods img {
  width: 69px;
  height: 69px;
  margin-bottom: 10px;
}
</style>