/****   http.js   ****/
// 导入封装好的axios实例
import request from './request'
 
const http ={
    /**
     * methods: 请求
     * @param url 请求地址 
     * @param params 请求参数
     */
    get(url:string,params: any){
        const config:any = {
            method: 'get',
            url:url
        }
        if(params) config.params = params
        console.log(config)
        return request(config)
    },
    post(url:string,params: any){
        const config:any = {
            method: 'post',
            url:url
        }
        if(params) config.data = params
        return request(config)
    },
 
}
//导出
export default http