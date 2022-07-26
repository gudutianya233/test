<template>
  <div>
    <h1>主页</h1>
    <button @click="loginOut">退出</button>
    <hr />
    <button @click="demo">请求测试</button>
  </div>
</template>
<script setup lang="ts">
import http from "../api/http";
import router from "../router";

const demo = () => {
  http
    .get("/home", { id: 111 })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const loginOut = () => {
  //清除token
  localStorage.removeItem("Authorization");
  router.push("/login");
};
</script>
<style lang="less"></style>
