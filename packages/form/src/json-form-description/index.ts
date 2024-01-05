import type { App } from 'vue'
import JsonFormDescription from './json-form-description'

JsonFormDescription.install = (app: App) => {
  app.component(JsonFormDescription.name, JsonFormDescription)
}

export default JsonFormDescription
