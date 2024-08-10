import axios from 'axios';
import {type IInternalAxiosRequestConfig, type IAxiosRequestConfig} from './types';
import { ElMessage } from 'element-plus';
const baseConfig = {
    baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
    timeout: 20 * 1000,
    headers: { 'X-Custom-Header': 'foobar' },
}


// 创建 Axios 实例
const instance = axios.create(baseConfig);
if (localStorage.getItem('token')) {
    instance.defaults.headers.authorization = localStorage.getItem('token')
}
// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做一些处理
        // 添加请求头、处理请求参数等
        console.log('config==============')
        console.log(config)
        return config;
    },
    (error) => {
        // 对请求错误做处理
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        console.log('response')
        console.log(response)
        try {
            const authorization = response?.headers?.authorization;
            if (authorization) {
                instance.defaults.headers.common['Authorization'] = authorization;
            }
        } catch (error) {
            console.log(error);
        }
        const {
            config,
            data: {
                code, message = "系统繁忙，请稍后再试"
            },
            headers: { authorization },
            request,
            statusText,
            status
        } = response
        if ((config as IInternalAxiosRequestConfig).cfg && (config as IInternalAxiosRequestConfig).cfg.isProcess) {
            return response;
        }
        return new Promise((resolve, reject) => {
            // 1.处理 http 状态码, 200 和 非 200
            if (200 === status) {
                switch (code) {
                    case 0:
                        resolve(response);
                        break;
                    case 1:
                        ElMessage.error(message);
                        reject(response);
                        break;

                    default:
                        resolve(response);
                        break;
                }
            } else {
                switch (status) {
                    case 401:
                        ElMessage.error("身份验证失效，请先登录!");
                        break;
                    case 403:
                        ElMessage.error("暂无访问权限~");
                        break;

                    default:
                        ElMessage.error(message);
                        break;
                }
                reject(response);
            }

            // 2. 处理业务代码 0 成功， 1 失败

            // 3.处理响应头

            // 4.返回结果

            if (authorization) {
                instance.defaults.headers.common['Authorization'] = authorization
            }
            if (status === 401) {
                // 处理token失效的情况
            }
            // 在响应数据之前做一些处理
            // 处理响应数据、统一错误处理等
            return response.data;
        })
    },
    (error) => {
        const errorMessage = error?.response?.data?.message || error?.message || '请求出错，请稍后再试~';
        ElMessage.error(errorMessage);
        console.log('===== request.js ======');
        console.log(error);
        return Promise.reject(error);
    }
);

/**
 * instance 调用参数
 */
// axios#request(config)
// axios#get(url[, config])
// axios#delete(url[, config])
// axios#head(url[, config])
// axios#options(url[, config])
// axios#post(url[, data[, config]])
// axios#put(url[, data[, config]])
// axios#patch(url[, data[, config]])
// axios#getUri([config])

interface ICustomized {
    baseURL?: string;// 修改 baseURL
    isUniq?: boolean;
    [key: string]: any
}
export const request = instance.request
export const post = instance.post
export const get = instance.get

export default instance;