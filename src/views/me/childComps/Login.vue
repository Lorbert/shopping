<template>
  <div id="login">
    <div class="avatar left"><img src="~assets/img/profile/avatar.svg" ></div>
    <div class="title left">
      <div><a href="#">登录</a> / <a href="#">注册</a></div>
      <div class="phone"><img src="~assets/img/profile/phone.svg" alt=""> 暂未绑定手机号码</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
#login {
  display: flex;
  position: relative;
  height: 25vw;
  background-color: rgba(255, 129, 152,.75);
  align-items: center;
}
.avatar {
  display: flex;
  align-items: center;
  margin-left: 10px;
  height: 100%;
  padding-bottom: 10px;
}
.avatar img {
  height: 70px;
  width: 70px;
}
.title {
  margin-left: 10px;
  color: #fff;
}
.title a{
  color: #fff;
}
.title a:hover {
  color: #ccc;
}
.title .phone {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title .phone img {
  width: 18px;
  height: 18px;
}
</style>