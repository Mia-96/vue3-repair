<script setup>
import { ref, onMounted, computed } from "vue";
import { getRepairDetail } from "../api/request.js";
import unchecked from "@/assets/img/unchecked.png";
import checked from "@/assets/img/checked.png";
import done from "@/assets/img/done.png";
const repairDetail = ref({});
const repairStatus = ref("");
onMounted(() => {
  getRepairDetail().then((res) => {
    console.log(res);
    repairDetail.value = res.data.data[0];
    repairStatus.value = res.data.data[0].repairStatus;
  });
});

const typeSrc = ref("");
const statusList = {
  0: unchecked,
  1: checked,
  2: done,
};
// typeSrc.value = a;
const getImg = computed(() => {
  // repairStatus 0 待受理，已受理，已完成
  return statusList[repairStatus.value];
});
</script>
<template>
  <div class="main">
    <div class="content">
      <hr class="hr" />
      <img :src="getImg" class="statusImg" />
      <ul>
        <li>保修编号:{{ repairDetail.repairId }}</li>
        <li>保修分类:{{ repairDetail.repairType }}</li>
        <li>保修产品:{{ repairDetail.repairProduct }}</li>
        <li>保修单位:{{ repairDetail.repairPlace }}</li>
        <li>保修人员:{{ repairDetail.repairName }}</li>
        <li>保修电话:{{ repairDetail.repairPhone }}</li>
        <li>保修地址:{{ repairDetail.repairAddress }}</li>
        <li>备注信息:{{ repairDetail.status }}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.main {
  height: 100vh;
  background-color: #f3f8fb;
  padding: 10px;
}
.content {
  position: relative;
  /* margin: 15px; */
  padding: 20px 10px;
  background-color: #fff;
}
.hr {
  margin: 30px;
}
.statusImg {
  width: 50px;
  position: absolute;
  top: 26px;
  /* left: 140px;
  z-index: 99; */
  left: 50%;
  transform: translateX(-50%);
  /* height: 200px; */
}
ul li {
  list-style-type: circle;
  padding-left: 10px;
}
</style>
