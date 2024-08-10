import axios, { request, post, get } from "@/request"
import {type IAxiosRequestConfig} from "@/request/types"
export const register = (data:any = {}, cfg?:any) => {
    return request({
        url: '/user/register',
        data,
        method: "post",
        ...(cfg as IAxiosRequestConfig), 
    })
}
export const login = (data:any = {}, cfg?:any) => {
    return request({
        url: '/user/login',
        data,
        method: "post",
        ...(cfg as IAxiosRequestConfig), 
    })
}

export const getUserInfo = (data: any) => {
    return request({
        url: '/user/userInfo',
        data,
        method: "post",
    })
}

export const logoutApi = (data?: any) => {
    return request({
        url: '/user/logout',
        data,
        method: "post",
    })
}