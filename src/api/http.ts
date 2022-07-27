/****   http.js   ****/
// 导入封装好的axios实例
import service from "./request";

const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url: string, params: any) {
    const config: any = {
      method: "get",
      url: url,
    };
    if (params) config.params = params;
    const res=service(config)
    console.log(res)
    return res;
  },
  post(url: string, params: any) {
    const config: any = {
      method: "post",
      url: url,
    };
    if (params) config.data = params;
    return service(config);
  },
};
//导出
export default http;
