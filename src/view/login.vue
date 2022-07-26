<template>
  <h1>111</h1>
  <button @click="demo">无token请求测试</button>
  <button @click="demo2">登录</button>
</template>
<script setup lang="ts">
import axios from "axios";
import http from "../api/http";
import request from "../api/request";
import router from "../router";
import { useStore } from "../store/user";
const demo2 = () => {
  axios({
    method: "get",
    url: "http://localhost:3000/login",
    data: {
      userName: "",
      passWord: "",
    },
  })
    .then((result) => {
      // 存储token到localStorage中
      localStorage.setItem("Authorization", result.data.result.Authorization);
      // localStorage.removeItem('Authorization')
      console.log(localStorage.getItem("Authorization"));
      console.log(result);
         router.push('/home');
    })
    .catch((err) => {
      console.log(err);
    });
};
const useStores = useStore();

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
</script>
<style lang="less"></style>
