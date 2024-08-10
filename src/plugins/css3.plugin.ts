import { registerDirectives } from '@/directives'
import { type App } from 'vue'
export default {
  install: (app:App) => {
    // 在这里编写插件代码
    registerDirectives(app)
  }
}
