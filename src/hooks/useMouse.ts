import { useEventListener } from "./useEventListener";
import { ref } from "vue";
export const useMouse = () => {

    const x = ref(0);
    const y = ref(0);
    useEventListener({
        target: window, eventName: 'mousemove', callback: (event: any) => {
            x.value = event.pageX;
            y.value = event.pageY;
            console.log(event.pageX, event.pageY);
        }, isCapture: false
    })
    return { x, y };
}