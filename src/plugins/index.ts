
import { type App } from 'vue'
import css3Plugin from "./css3.plugin"
export default {
    install: (app:App) => {
      app.use(css3Plugin)
    }
  }