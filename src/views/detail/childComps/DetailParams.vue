<template>
  <div id="detail-params" v-if="Object.keys(detailParamInfo).length !== 0">
    <table v-for="(table,key) in detailParamInfo.sizes" :key="key" class="info-sizes">
      <tr v-for="(item,index) in table" :key="index"><td v-for="(val,ind) in item" :key="ind">{{val}}</td></tr>
    </table>
    <table class="info-set">
      <tr v-for="(item,index) in detailParamInfo.infos" :key="index"><td class="set-key">{{item.key}}</td><td class="set-value">{{item.value}}</td></tr>
    </table>
    <div class="info-img" v-if="detailParamInfo.image.length !== 0"><img :src="detailParamInfo.image" alt=""></div>
  </div>
</template>

<script>
export default {
  nane: 'DetailParams',
  props: {
    detailParamInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }

}
</script>

<style scoped>
#detail-params {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
#detail-params table {
  width: 100%;
  border-collapse: collapse;
}
#detail-params table tr {
  height: 42px;
}
#detail-params table tr td {
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.set-key {
  /* 当value的数据量比较大的时候，会挤到key，所以给一个固定的宽度 */
  width: 95px;
}
.set-value {
  color: #eb4868;
}
.info-set {
  border-top: 1px solid rgba(0,0,0,.1);
}
.info-img img {
  width: 100%;
}
</style>