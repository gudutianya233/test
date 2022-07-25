import axios from "axios";
import pinia from "../store/index"; //导入pinia
import { useStore } from "../store/user";

//import QS from "qs"; //引入qs模块，用来序列化post类型的数据
const Api = "http://localhost:3000";

const service = axios.create({
  baseURL: Api,
  timeout : 10000,
});
const user = useStore(pinia);

//请求拦截器
service.interceptors.request.use(
  req => {
    req.headers = {
      "Content-Type": "application/json", //配置请求头
    };
    req.headers["token"] = user.$state.token; //配置token
    return req;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

//响应拦截器
service.interceptors.response.use(
  //请求成功处理
  response => {
    const res: any = response;
    if (res != null && res.data.code === 200) {
      console.log(res);
      console.log(res.data);
      return res.data;
    } else {
    }
  },
  error => {
    // Message.error(error.message)
    if (JSON.stringify(error).includes("timeout")) {
      window.alert("服务器响应超时，请刷新当前页");
    }
  }
);
export default service;
