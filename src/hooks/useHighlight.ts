import { onMounted } from 'vue';
import hljs from 'highlight.js';
export default () => {
    onMounted(() => {
        hljs.highlightAll();
    })
}