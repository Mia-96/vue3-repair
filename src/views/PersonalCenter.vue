<script setup></script>
<template>
  <div class="content">
    <div class="main">
      <div class="header">
        <van-image
          width="50"
          height="50"
          round="true"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="user">
          <p>李小花</p>
          <van-button
            width="200px"
            round="true"
            size="mini"
            color="#7232dd"
            plain
            >普通用户</van-button
          >
        </div>
      </div>
      <div class="white-space"></div>
    </div>
    <div class="card" style="display: none">
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
    <div class="repair-card">
      <div class="head">
        <span>我的保修单</span>
        <span>查看全部保修单></span>
      </div>
      <div class="type">
        <div class="item">
          <van-image
            width="50"
            height="50"
            round="true"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <span>待审核</span>
        </div>
        <div class="item">
          <van-image
            width="50"
            height="50"
            round="true"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <span>已受理</span>
        </div>
        <div class="item">
          <van-image
            width="50"
            height="50"
            round="true"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <span>待评价</span>
        </div>
        <div class="item">
          <van-image
            width="50"
            height="50"
            round="true"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <span>申诉</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  padding: 40px;
  display: flex;
}
.user {
  margin-left: 20px;
  color: #fff;
}
.repair-card {
  position: absolute;
  background-color: #fff;
  box-shadow: 2px solid grey;
  border-radius: 10px;
  top: 160px;
  left: 20px;
  margin: 0 20px;
  font-size: 14px;
  color: black;
  padding: 20px;
}
.head {
  display: flex;
  justify-content: space-between;
}
.type {
  margin-top: 20px;
  display: flex;

  align-items: center;
  /* position: absolute;
    top: 180px;
    left: 0; */
  /* background-color: red; */
  /* margin: 0 30px;
    padding: 20px 20px; */
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  line-height: 30px;
}
.item:nth-child(4) {
  margin-right: 0;
}
</style>
