<template>
  <h1>111</h1>
  <button @click="demo">啊啊啊</button>
</template>
<script setup lang="ts">
import axios from "axios";
import { result } from "lodash";

const demo = () => {
  axios
    .get("http://localhost:3000/login")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<style lang="less"></style>
