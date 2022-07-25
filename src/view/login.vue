<template>
  <h1>111</h1>
  <button @click="demo">啊啊啊</button>
</template>
<script setup lang="ts">
import axios from "axios";
import http from "../api/http";
const demo = () => {
    axios({
      method:'get',
      url:'http://localhost:3000/login',
      data:{
          name:"aaa"
      },
  }) 
  .then(result => {
        console.log(result);
      })
   .catch(err=> {
        console.log(err);
    })
    }
// const demo = () => {
//   http.get("/login",{name:111})
//   .then((res)=>{
//     console.log("res  "+res)
//   })
//   .catch((err:any)=>{
//     console.log("err  "+err)
//   })

// };
</script>
<style lang="less"></style>
