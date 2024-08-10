import { ref } from 'vue';
interface IuseList {
    id: number;
    title: string;
    body: string;
    userId: number;
}
export const useList = ({
    url
}: {url: string}) => {
    const res = ref<IuseList[]>([]);
    const err = ref(null)
    fetch(url).then((response) => response.json())
        .then((data) => {
            console.log(data)
            res.value = data;
        }).catch((error) => {

            err.value = error;
            console.log(error)
        });
    return { res, err }
}