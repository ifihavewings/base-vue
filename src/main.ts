import 'element-plus/dist/index.css'
import './assets/styles/main.css'
import 'animate.css';
// import {registerDirectives} from "./directives";
import plugins from "./plugins";


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugins)

app.mount('#app')
