<template>
<h1>111</h1>
<button @click="demo">啊啊啊</button>
</template>
<script setup lang="ts">
import { defineComponent, onMounted } from 'vue';
import { login } from '../api/api';
const demo=()=>{
	console.log("111")
defineComponent({
  name: 'home',
  setup() {
  	onMounted(()=>{
      login({
  		username:'admin',
  		password:'123456'
  	  });
  	})
  }
});
	console.log("222");
}

</script>
<style lang="less"></style>