import 'element-plus/dist/index.css'
import './assets/styles/main.css'
import 'animate.css';
// import {registerDirectives} from "./directives";
import plugins from "./plugins";


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from "./useVuetify"
const app = createApp(App)
// attach window properties to the vue instance. so that we can use it in template
app.config.globalProperties.window = window
app.config.globalProperties.systemInfo = {
    version : 1.0,
    name: 'ifihavewings',
    author: 'sv'
}





app.use(createPinia())
app.use(router)
app.use(plugins)
app.use(vuetify)
app.mount('#app')

