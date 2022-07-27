//引入路由对象
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";

//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory


// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes= [
  {
    path: "/",
    component: () => import("../view/login.vue"),
  },
    {
      path: "/login",
      component: () => import("../view/login.vue"),
    },
  {
    path: "/home",
    name: "home",
    meta: {
        requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
      },
    redirect:'/home/main1',
    component: () => import("../view/home.vue"),
    children: [
      {
        path: "main1",
        meta: {
          requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: () => import("../components/main/main1.vue"),
      },
      {
        path: "main2",
        meta: {
          requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
        },
        component: () => import("../components/main/main2.vue"),
      },
    ],
  },
  {
    path: "/404",
    component: () => import("../view/404.vue"),
  },
  {
    path: "/:catchAll(.*)", // 不识别的path自动匹配404
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//导出router
export default router;
