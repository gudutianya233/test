<template>
  <div v-loading="loading">
    <span>functionList</span>
    {{ a }}
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
let loading = ref<boolean>(true); //定义变量

onMounted(() => {
  demo();
  //关闭加载动画
  setTimeout(() => {
    loading.value = false;
    ElMessage({
      message: "请求成功",
      type: "success",
      duration: 500,
    });
  }, 1000);
});
const a = new Date().getTime(); //获取到当前时间戳
const b = "functionList";
const demo = () => {
  //点击刷新组件时，重新请求接口
  console.log(b);
};
</script>
<style lang="less" scoped></style>
