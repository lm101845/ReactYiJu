import axios from "axios";
import qs from "querystring"; 

/**
 * 处理失败的方法
 * status:状态码
 * info:信息
 */
const errorHandle = (status, info) => {
    
}
//创建请求实例，添加请求延时
let request = axios.create({
    baseURL: "http://localhost:3006/api",
    timeout: 500,
});

// 添加请求拦截器
request.interceptors.request.use(
    (config) => {
        console.log("config:", config);
        /*
        config最终传入的参数,做方式处理，参数转化处理,或者网页进度条整理
        在发送请求之前做些什么，拦截特定接口URL，请求方式
       */
        if (config.methods === "post") qs.stringify(config.data);

        return config;
    },
    (error) => {
        console.warn("请求失败:", error);
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
// 添加响应拦截器
request.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        return response;
    },
    (error) => {
        console.warn("响应失败:", error);
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
export default request;