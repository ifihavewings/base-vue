import { defineStore } from 'pinia'
import { getUserInfo } from "@/apis/user"
import { reactive, computed } from "vue";
interface UserInfo {
    username: string | undefined,
    [key: string]: string | undefined; // 添加索引签名
}
export const useUserStore = defineStore('user', () => {
    const userInfo = reactive<UserInfo>({
        username: undefined
    })
    const isLogined = computed(() => {
        return Boolean(userInfo?.username)
    })

    const fetchUserInfo = async () => {
        try {
            const res = await getUserInfo({})
            Object.assign(userInfo, res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const $reset = () => {
        Object.keys(userInfo).forEach(key => {
            // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ username: string | undefined; }'.
            //   No index signature with a parameter of type 'string' was found on type '{ username: string | undefined; }'
            delete userInfo[key]
        })
        localStorage.removeItem('token')
    }

    return {
        userInfo,
        isLogined,
        fetchUserInfo,
        $reset,
    }
})