import type { App } from 'vue'
import JsonForm from './json-form'

JsonForm.install = (app: App) => {
  app.component(JsonForm.name, JsonForm)
}

export default JsonForm
