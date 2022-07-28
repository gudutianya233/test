<template>
  <span>main11</span>
  {{ a }}
</template>
<script setup lang="ts"> 
import { onMounted } from 'vue';
onMounted(()=>{
    demo()
})
const a = new Date().getTime(); //获取到当前时间戳
let b=0
const demo = () => {
    //点击刷新组件时，重新请求接口
    b++
 console.log(b)
};
</script>
<style lang="less" scoped></style>
