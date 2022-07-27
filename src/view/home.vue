<template>
  <div>
    <button @click="loginOut">退出</button>
    <button @click="demo1">无参数请求测试1</button>
    <button @click="demo2">带参数请求测试2</button>
    <hr />
  </div>
  <div></div>
  <div class="common-layout">
    <div>
      <div class="common-layout">
        <el-container>
          <el-aside>
            <el-row>
              <el-col :span="12">
                <el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="el-menu-vertical-demo"
                  default-active="2"
                  text-color="#fff"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-sub-menu index="1">
                    <template #title>
                      <el-icon><Setting /></el-icon>
                      <span>系统设置</span>
                    </template>
                    <el-menu-item index="1-1">
                      <el-icon><Tools /></el-icon>菜单管理</el-menu-item
                    >
                    <el-menu-item index="1-2">
                      <el-icon><UserFilled /></el-icon>用户管理</el-menu-item
                    >
                    <el-menu-item index="1-3">
                      <el-icon><Promotion /></el-icon>权限管理</el-menu-item
                    >
                  </el-sub-menu>
                  <el-menu-item @click="inMain1" index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>main1</span>
                  </el-menu-item>
                  <el-menu-item @click="inMain2" index="3">
                    <el-icon><document /></el-icon>
                    <span>main2</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>Navigator Four</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-container>
            <el-header >
                <div  style="height:60px;background-color: :aqua;">
                    <span>顶栏</span>
                </div>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import http from "../api/http";
import router from "../router";
import {
  Document,
  Menu as IconMenu,
  Tools,
  UserFilled,
  Setting,
  Promotion,
} from "@element-plus/icons-vue";
const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const demo1 = () => {
  http
    .get("/home/all1", {})
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const demo2 = () => {
  http
    .get("/home/all2", { id: 111 })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const inMain1 = () => {
  router.push("/home/main1");
};
const inMain2 = () => {
  router.push("/home/main2");
};
const loginOut = () => {
  //清除token
  localStorage.removeItem("Authorization");
  router.push("/login");
};
</script>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-aside{
    width: 225px;
}
.el-header {
    padding: 0;
}
.el-main{
    padding:0;
}
</style>
