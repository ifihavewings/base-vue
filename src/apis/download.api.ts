import axios, { request, post, get } from "@/request"
import {type IAxiosRequestConfig} from "@/request/types"


export const stream = (data?: any) => {
    return request({
        url: '/nest/download/stream',
        data,
        method: "post",
        // responseType: 'arraybuffer'
        responseType: 'blob',
        headers: {
            responseType: 'blob',

        }
    })
}