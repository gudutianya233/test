<template>
  <p>404 not found</p>
  <button @click="loginOut">返回登录页</button>
</template>
<script setup lang="ts">
import router from "../router";

const loginOut = () => {
  //清除token
  localStorage.removeItem("Authorization");
  router.push("/login");
};
</script>
<style lang="less"></style>
