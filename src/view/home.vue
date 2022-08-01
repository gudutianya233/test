<template>
  <div>
    <button @click="demo1">无参数请求测试1</button>
    <button @click="demo2">带参数请求测试2</button>
    <hr />
  </div>

      <div class="common-layout" >
        <el-container>
          <el-aside>
            <el-row>
              <el-col :span="12">
                <el-menu
                  active-text-color="#ffffff"
                  background-color="#545c64"
                  class="el-menu-vertical-demo"
                  text-color="#fff"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-sub-menu index="1">
                    <template #title>
                      <el-icon><Setting /></el-icon>
                      <span>系统设置</span>
                    </template>
                    <el-menu-item index="1-1" @click="MenuManagement">
                      <el-icon><Tools /></el-icon>菜单管理</el-menu-item
                    >
                    <el-menu-item index="1-2" @click="UserManagement">
                      <el-icon><UserFilled /></el-icon>用户管理</el-menu-item
                    >
                    <el-menu-item index="1-3" @click="PermissionManagement">
                      <el-icon><Promotion /></el-icon>权限管理</el-menu-item
                    >
                  </el-sub-menu>
                  <el-menu-item @click="inMain1" index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>功能一览</span>
                  </el-menu-item>
                  <el-menu-item @click="inMain2" index="3">
                    <el-icon><document /></el-icon>
                    <span>系统概述</span>
                  </el-menu-item>
                  <!-- <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>Navigator Four</span>
                  </el-menu-item> -->
                </el-menu>
              </el-col>
            </el-row>
          </el-aside>
          <el-container>
            <el-header>
              <div class="topBar">
                <div class="topBar-navigation1">
                  <div>
                    <span title="回到首页" @click="HomePage">首页</span>
                    <div>
                      <span
                        v-if="useStores.Navigation"
                        style="padding-left: 5px"
                      >
                        <el-icon><ArrowRight /></el-icon>
                        {{ useStores.Navigation }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="topBar-navigation2">
                  <div>
                    <span class="topBar-icon" title="刷新" @click="reload"
                      ><el-icon><Refresh /></el-icon
                    ></span>
                    <span class="topBar-icon" title="全屏" @click="toggle">
                      <el-icon><Rank /></el-icon>
                    </span>
                  </div>
                  <div class="DividingLine"></div>
                  <div class="topBat-User">
                    <span class="topBat-User-headPortrait">                 
                      <img src="../assets/header.jpg" />
                    </span>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        Administrator
                        <el-icon class="el-icon--right">
                          <arrow-down />
                        </el-icon>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu @click="loginOut">
                          <el-dropdown-item>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </div>
                </div>
              </div>
            </el-header>
            <el-main>
              <router-view :key="useStores.keys"></router-view>
            </el-main>
          </el-container>
        </el-container>
      </div>


</template>

<script setup lang="ts">
import http from "../api/http";
import route from "../router";
import { useStore } from "../store/user";
import {
  Document,
  Rank,
  Refresh,
  Menu as IconMenu,
  Tools,
  UserFilled,
  Setting,
  ArrowDown,
  Promotion,
  ArrowRight,
} from "@element-plus/icons-vue";
import { useFullscreen } from "@vueuse/core";
import { ref,onMounted } from "vue";
import { ElMenu } from "element-plus";

const handleOpen = (key: string, keyPath: string[]) => {
  //console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
onMounted(() => {
 
});
//刷新组件
const useStores = useStore();
const reload = () => {
  useStores.keys++;
};

const { toggle } = useFullscreen(); //全屏模式


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

const HomePage = () => {
  useStores.Navigation = null;
  route.push("/home/homeMain");
};
const MenuManagement = () => {
  useStores.Navigation = "菜单管理";

  route.push("/home/MenuManagement");
};
const UserManagement = () => {
  useStores.Navigation = "用户管理";

  route.push("/home/UserManagement");
};
const PermissionManagement = () => {
  useStores.Navigation = "权限管理";
  route.push("/home/PermissionManagement");
};
const inMain1 = () => {
  useStores.Navigation = "功能一览";
  route.push("/home/functionList");
};
const inMain2 = () => {
  useStores.Navigation = "系统概述";
  route.push("/home/systemDescription");
};
const loginOut = () => {
  //清除token
  localStorage.removeItem("Authorization");
  route.push("/login");
};
</script>
<style lang="less" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-aside {
  width: 225px;
}
.el-header {
  padding: 0;
  height: 40px;
  line-height: 30px;
}
.el-main {
  padding: 0;
  padding-top: 20px;
}

.topBar-icon {
  color: #606266;
  font-size: 20px;
  margin-right: 10px;
}

.el-dropdown {
  line-height: 30px;
}
.topBar-icon:hover {
  color: #30a3e7;
  cursor: pointer;
}
.topBar-navigation1 {
  float: left;
  padding-top: 10px;
  div {
    font-size: 17px;
    display: flex;
  }
}
.topBar-navigation1 > div > span:hover {
  color: #30a3e7;
  cursor: pointer;
}
.topBar-navigation2 {
  float: right;
  display: flex;

  .topBat-User {
    margin-left: 10px;
    margin-right: 10px;
  }
  .DividingLine {
    height: 20px;
    width: 2px;
    background-color: #d7d7d7;
  }
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
  .topBat-User-headPortrait {
    margin-right: 10px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
