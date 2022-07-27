import axios from "axios";
import router from "../router/index";
//import QS from "qs"; //引入qs模块，用来序列化post类型的数据
const Api = "http://127.0.0.1:3000";

const service = axios.create({
  baseURL: Api,
  timeout: 10000,
});

//请求拦截器
service.interceptors.request.use(
  (req) => {
    req.headers = {
      "Content-Type": "application/json", //配置请求头
    };
    //配置Authorization
    const Authorization: any = localStorage.getItem("Authorization");
    //判断是否有token
    if (Authorization) {
      req.headers.Authorization = Authorization;
      console.log(req);
      return req;
    } else {
      console.log("no Authorization");
      alert("token失效或无token")
      router.push("/login");
      //跳转到登录，取token
    }
  },
  (error) => {
    console.log(error);
    console.log("error");
    return Promise.reject(error);
  }
);
//响应拦截器
service.interceptors.response.use(
  (rsp) => {
    const result = rsp;
    if (result != null && result.status == 200) {
      console.log(result);
      return result;
    } else if (result.status == 401) {
      //登录过期
      localStorage.removeItem("Authorization");
      // router.push('/login');
    } else {
      return Promise.reject(result);
    }
  },
  (error) => {
    // Message.error(error.message)
    if (JSON.stringify(error).includes("timeout")) {
      console.log("resError");
      return Promise.reject(error);
      // window.alert("服务器响应超时，请刷新当前页");
    }
  }
);

export default service;
