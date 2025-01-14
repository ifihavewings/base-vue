

import axios, { request, post, get } from "@/request"
import {type IAxiosRequestConfig} from "@/request/types"
export const chat = (data:any = {}, cfg?:any) => {
    return request({
        url: '/nest/chat/chat',
        data,
        method: "post",
        ...(cfg as IAxiosRequestConfig), 
    })
}
