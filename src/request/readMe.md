# 1. 设计原则

## 1.1 动静分离

所有请求在 `@/apis/*.ts` 中编写。对于每个具体请求，除请求参数外， 其他所有的配置均配置在每个请求函数中。

## 调用方式

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