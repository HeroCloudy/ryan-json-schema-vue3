import type { App } from 'vue'
import ProForm from './pro-form'

ProForm.install = (app: App) => {
  app.component(ProForm.name, ProForm)
}

export default ProForm
