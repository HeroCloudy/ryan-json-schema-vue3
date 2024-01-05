import type { App } from 'vue'
import JsonDescription from './json-description'

JsonDescription.install = (app: App) => {
  app.component(JsonDescription.name, JsonDescription)
}

export default JsonDescription
