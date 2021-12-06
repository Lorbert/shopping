<template>
  <div id="detail-user-rate" v-if="Object.keys(detailRate).length !== 0">
    <div class="userRate-top">
      <div class="title">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="userRate-body" v-for="(item,index) in detailRate" :key="index">
      <div class="user-avatar"><img :src="item.user.avatar" ><span>{{item.user.uname}}</span></div>
      <div class="user-comment">
        <p>{{item.content}}</p>
        <div class="time">
          <span>{{item.created | showDate}}</span>
          <span class="size">{{item.style}}</span>
        </div>
        </div>
        <div class="userRate-bottom" v-if="item.images !== null">
          <img :src="value" v-for="(value, index) in item.images" :key="index">
        </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"
export default {
  name: "DetailUserRate",
  props: {
    detailRate: {
      type:Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showDate(value) {
      const DateTime = new Date(value * 1000);
      return formatDate(DateTime, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
#detail-user-rate {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5xp solid #f2f5f8;
}
.userRate-top {
  height: 50px;
  width: 100%;
  line-height: 50px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.userRate-top .title {
  float: left;
  font-size: 15px;
}
.userRate-top .more {
  float: right;
  font-size: 13px;
}
.userRate-body .user-avatar {
  padding: 10px 0 5px;
}
.userRate-body img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.user-avatar span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.user-comment {
  padding: 0 5px 15px;
}
.user-comment p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.user-comment .time {
  margin-top: 10px;
  font-size: 12px;
  color: #999;
}
.time .size {
  margin-left: 8px;
}
.userRate-bottom {
  margin-top: 10px;
}
.userRate-bottom img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>