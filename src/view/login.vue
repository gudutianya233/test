<template>
  <h1>111</h1>
  <button @click="demo">404</button>
  <br />
  <button @click="demo2">登录</button>
</template>
<script setup lang="ts">
import axios from "axios";
import http from "../api/http";
import router from "../router";
import { useStore } from "../store/user";
const userName = "111";
const passWord = "111";
const demo2 = () => {
  axios({
    method: "get",
    url: "http://localhost:3000/login",
    data: {
      username: userName,
      password: passWord,
    },
  })
    .then((result) => {
      // 存储token到localStorage中
      localStorage.setItem("Authorization", result.data.result.Authorization);
      // localStorage.removeItem('Authorization')
      console.log(localStorage.getItem("Authorization"));
      console.log(result);
      router.push({
        name: "home",
        params: { username: userName, password: passWord },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const useStores = useStore();

const demo = () => {
router.push("/404");
};
</script>
<style lang="less" scoped></style>
