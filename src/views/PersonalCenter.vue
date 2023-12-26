<script setup></script>
<template>
  <div class="content">
    <div class="main">
      <div class="header">hhh</div>
      <div class="white-space"></div>
    </div>
    <div class="card">
      <p>title</p>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      <!-- <van-button type="primary" size="large">提交</van-button> -->
    </div>
  </div>
</template>

<style>
.content {
  width: 100vw;
  height: 100vh;
  background-color: #f4f9fb;
}
.main {
  width: 100%;
  height: 400px;
  background-color: #fff;
}
.header {
  /* width: 100%; */
  height: 200px;
  /* border: 2px solid red; */
  background-image: url("../assets/img/bg.png");
}
</style>
