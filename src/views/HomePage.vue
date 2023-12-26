<script setup>
import { ref } from "vue";
import mainTop from "@/assets/img/home-top.png";
const mainSrc = mainTop;
</script>
<template>
  <div class="content">
    <div class="title-bg">
      <van-image :src="mainSrc" />
    </div>
    <div class="tool">
      <!-- <van-button round type="success" size="large">扫码保修</van-button>
      <van-button round type="success">手动保修</van-button> -->
      <div class="auto-repair button">
        <span class="icon qr"></span>
        扫码保修
      </div>
      <div class="hand-repair button">手动保修</div>
    </div>
  </div>
</template>

<style scoped>
.content {
  background-color: #f4f9fb;
  width: 100vw;
  height: 100vh;
}
.title-bg {
  /* margin: 0 20px; */
  /* width: 100%; */
  margin: 0 40px;
  /* height: 300px; */
}
.tool {
  /* height: 300px; */
  /* width: 100%; */
  margin: 20px 40px;
  padding: 40px 0;
  border-radius: 10px;
  background-color: #fff;
  color: #fff;
}
.button {
  margin: 0 20px;
  height: 60px;

  border-radius: 40px;
  text-align: center;
  line-height: 60px;
}
.auto-repair {
  background-color: #ffce75;
  position: relative;
}
.icon {
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  background-color: red;
  z-index: 9999;
  top: 17px;
  left: 40px;

  /* background-image: url(~@/assets/img/qr.png);
  background-size: 100% 100%;
  background-position: 30px 30px; */
}
.auto-repair .qr {
  background-image: url(~@/assets/img/qr.png);
}
.hand-repair {
  margin-top: 20px;
  background-color: #5baeff;
}
</style>
