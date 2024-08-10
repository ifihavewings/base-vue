export const sameString = (str: string) => {
    const validator = (rule: any, value: any, callback: any) => {
        console.log("rule, value, callback")
        console.log(rule, value, callback)
        if (str === value) {
            alert(1)
            callback()
        } else {
            alert(2)
            callback(new Error('两次输入的密码不一致'))
        }
    }

    return validator
}