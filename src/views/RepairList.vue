<script setup>
import { reactive, ref, onMounted, computed, nextTick } from "vue";
import { getRepairList } from "@/api/request.js";
const tabList = reactive([
  {
    id: 0,
    tabName: "全部",
  },
  {
    id: 1,
    tabName: "未受理",
  },
  {
    id: 2,
    tabName: "已受理",
  },
  {
    id: 3,
    tabName: "已完成",
  },
  {
    id: 4,
    tabName: "申诉",
  },
]);
const index = ref(2);

let repairList = ref([]);
const statusList = ref({
  0: "未受理111",
  1: "已受理",
  2: "已完成",
  3: "申诉",
});

const typeList = ref({
  0: "湿垃圾",
  1: "干垃圾",
  2: "有害垃圾",
});
onMounted(() => {
  getRepairList().then((res) => {
    console.log("调取接口", res);
    repairList.value = res.data.data;
    console.log("re", repairList);
    // $set(repairList, repairList);
  });
});
const getStatus = computed((type) => {
  // const statusList = {
  //   0: "未受理",
  //   1: "已受理",
  //   2: "已完成",
  //   3: "申诉",
  // };
  // return statusList[type];
  return function (type) {
    return statusList.value[type];
  };
  // repairType: 0 1 2 干垃圾，湿垃圾，有害垃圾
});

const getType = computed(() => {
  return function (type) {
    return typeList.value[type];
  };
});
</script>
<template>
  <div class="content">
    <div class="head">
      <van-tabs v-model:active="index" type="card">
        <van-tab
          v-for="item in tabList"
          :key="item.id"
          :title="item.tabName"
          :name="item.id"
        ></van-tab>
      </van-tabs>
    </div>
    <!-- <p>{{ repairList[0] }}</p> -->
    <div v-if="repairList.length > 0">
      <div class="list" v-for="item in repairList" :key="item.repairId">
        <div class="status">
          <span>维修单号:{{ item.repairId }}</span>
          <van-tag plain type="primary">{{
            getStatus(item.repairStatus)
          }}</van-tag>
        </div>
        <div class="detail">
          <span>维修时间:{{ item.repairTime }}</span>
          <span>保修单位：{{ item.repairPlace }}</span>
          <div class="type">
            <span>保修分类:{{ getType(item.repairType) }}</span>
            <span>></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>没有数据</div>
  </div>
</template>

<style scoped>
.content {
  height: 100vh;

  background-color: #f4f9fb;
}
.head {
  background-color: #fff;
  height: 50px;
  padding: 10px;
}
.list {
  /* height: 50px; */
  border-radius: 10px;
  background-color: #fff;
  font-size: 14px;
  margin: 10px;
  padding: 15px;
}
.list .status {
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list .detail {
  display: flex;
  flex-direction: column;
}
.list .detail .type {
  display: flex;
  justify-content: space-between;
}
</style>
