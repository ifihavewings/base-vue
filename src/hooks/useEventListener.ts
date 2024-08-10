import { onMounted, onUnmounted } from "vue"
interface IEventListenerOptions {
    target: EventTarget
    eventName: string
    callback: EventListenerOrEventListenerObject
    isCapture?: boolean
}
export const useEventListener = ({ target = window, eventName, callback, isCapture }: IEventListenerOptions) => {

    onMounted(() => {
        target.addEventListener(eventName, callback, isCapture)
    })
    onUnmounted(() => {
        target.removeEventListener(eventName, callback)
    })
}