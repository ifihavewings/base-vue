export const sameString = (str: string) => {
    const validator = (rule: any, value: any, callback: any) => {
        console.log("rule, value, callback")
        console.log(rule, value, callback)
        if (str === value) {
            callback()
        } else {
            callback(new Error('两次输入的密码不一致'))
        }
    }

    return validator
}