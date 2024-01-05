import type { App } from 'vue'
import ProDescription from './pro-description'

ProDescription.install = (app: App) => {
  app.component(ProDescription.name, ProDescription)
}

export default ProDescription
