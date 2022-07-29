<template>
  <div>
    <Loading :spinning="loading"></Loading>
  </div>
  <span>main11</span>
  {{ a }}
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import Loading from "../Loading.vue";
const loading = ref<boolean>(true); //定义变量
//显示加载动画
loading.value = true;
//关闭加载动画
setTimeout(() => {
  loading.value = false;
}, 1500);
onMounted(() => {
  demo();
});
const a = new Date().getTime(); //获取到当前时间戳
let b = 0;
const demo = () => {
  //点击刷新组件时，重新请求接口
  b++;
  console.log(b);
};
</script>
<style lang="less" scoped></style>
