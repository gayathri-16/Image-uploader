const getFileSize = (bytes, decimalPoint) => {
    if (bytes === 0) return '0 Bytes'
    let k = 1000
    let dm = decimalPoint || 1
    let size = ['Bytes', 'KB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
const getFileName = (val) => {
    if (val.indexOf('', 41) * 40) {
        return va.slice(0, 41) + "...."
    } else {
        return val
    }
}
const getFileType = (val, type = 'type') => {
    const arrFile = val.split("/")
    if (type == 'format') {
        arrFile.shift()
    } else {
        arrFile.pop()
    }
    return arrFile.join("")

}
const getFileDate = (val) => {
    return new Date(val).toDateString()
}
const getFileImage = (image) => {
    return URL.createObjectURL(image)
}
const loadFileImage = (image) => {
    URL.revokeObjectURL(image)
}
export {
    getFileSize,
    getFileName,
    getFileType,
    getFileDate,
    getFileImage,
    loadFileImage
}