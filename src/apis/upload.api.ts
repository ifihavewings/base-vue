import axios, { request, post, get } from "@/request"

export const uploadApi = (data: any = {}) => {
    return request({
        url: '/upload/formidable',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: "post",
    })
}


export const downloadApi = (id: string) => {

    return request({
        url: `/download/${id}`,
        data: { a: 1, b: 2 },
        method: "post",
        responseType: "blob", // 修改此处为正确的响应类型
    })


}

export const formUpload = (data:FormData) => {

    return request({
        url: `nest/upload/file`,
        data,
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })


}

export const formUploadFiles = (data:FormData) => {

    return request({
        url: `nest/upload/files`,
        data,
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data'
        }

    })


}

