export const getFilenameFromHeader = (headers: any) => {
    const str = headers['content-disposition']
    const arr = str.split(';')
    const filename = arr.find((item: string) => item.includes("filename="))
    const filenameStar = arr.find((item:string) => item.includes("filename*="))
    console.log(filename,filenameStar)
    return filename
}

/**
 * 下载 blob
 * @param streamData 
 * @param fileName 
 */
export const downloadByBlob = (streamData: any, fileName: string) => {
    const blob = new Blob([streamData])
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.style.display = "none"
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    window.URL.revokeObjectURL(url)

}