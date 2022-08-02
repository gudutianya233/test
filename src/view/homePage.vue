<template>
  <div v-loading="loading">
    <span>homePage</span>
    {{ a }}
    <div id="chinaChart"></div>
    <div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ElMessage } from 'element-plus'
import Tables from "../components/tables.vue";

let loading = ref<boolean>(true); //定义变量
//给子组件传递值
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])

onMounted(() => {
  demo();

  //关闭加载动画
  setTimeout(() => {
    loading.value = false;
    ElMessage({
    message: '请求成功',
    type: 'success',
    duration:500,
  })
  }, 1000);
     
});
const a = new Date().getTime(); //获取到当前时间戳
const b = "homePage";
const demo = () => {
  //点击刷新组件时，重新请求接口
  console.log(b);
};
</script>
<style lang="less" scoped></style>
