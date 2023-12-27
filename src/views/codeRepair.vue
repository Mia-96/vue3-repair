<script setup>
import { ref } from "vue";
const equipmentId = ref("");
const equipmentName = ref("");
const equipmentDate = ref("");
const schoolName = ref("");
const schoolAddress = ref("");
const phone = ref("");
const user = ref("");
const remark = ref("");
const onSubmit = (values) => {
  console.log("submit", values);
};
</script>
<template>
  <div class="main">
    <div class="content">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            label-align="top"
            v-model="equipmentId"
            name="设备编号"
            label="设备编号"
            placeholder="请输入设备编号"
            :rules="[{ required: true, message: '请填写设备编号' }]"
          />
          <van-field
            label-align="top"
            v-model="equipmentName"
            name="设备名称"
            label="设备名称"
            placeholder="请输入设备名称"
            :rules="[{ required: true, message: '请填写设备名称' }]"
          />
          <van-field
            label-align="top"
            v-model="equipmentDate"
            name="质保期限"
            label="质保期限"
            placeholder="请输入质保期限"
            :rules="[{ required: true, message: '请填写质保期限' }]"
          />
          <van-field
            label-align="top"
            v-model="schoolName"
            name="学校信息"
            label="学校信息"
            placeholder="请输入学校信息"
            :rules="[{ required: true, message: '请填写学校' }]"
          />
          <van-field
            label-align="top"
            v-model="schoolAddress"
            name="详细地址"
            label="详细地址"
            placeholder="请输入详细地址"
            :rules="[{ required: true, message: '请填写详细地址' }]"
          />
          <van-field
            label-align="top"
            v-model="user"
            name="联系人"
            label="联系人"
            placeholder="请输入联系人"
            :rules="[{ required: true, message: '请填写联系人' }]"
          />
          <van-field
            label-align="top"
            v-model="remark"
            name="备注信息"
            label="备注信息"
            placeholder="请输入备注信息"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            订阅并提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
  background-color: #f4f9fb;
  padding: 10px;
}
.content {
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
