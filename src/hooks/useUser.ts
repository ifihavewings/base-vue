import { ref, onBeforeMount } from "vue"
import { storeToRefs } from "pinia"
import { useUserStore } from "@/stores/user"

export const useUser = () => {
    const userStore = useUserStore()
    const { fetchUserInfo } = userStore
    const token = ref("")

    onBeforeMount(() => {
        const localToken = localStorage.getItem("token")
        if (localToken) {
            fetchUserInfo()
        }
    })
    return {
        token,
    }
}