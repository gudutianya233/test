<template>
  <div>

    <div>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link  :to="{name:'login'}">跳转a</router-link>
      <router-link  style="margin-left:200px" :to="{name:'main'}">跳转b</router-link>
    </div>
    <hr />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped></style>
