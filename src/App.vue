<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
};
</script>

<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" name="home" to="/home"
      >我要保修</van-tabbar-item
    >
    <van-tabbar-item icon="search" to="/repair-list">保修查询</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/user">个人中心</van-tabbar-item>
  </van-tabbar>
  <RouterView></RouterView>
</template>

<style scoped></style>
