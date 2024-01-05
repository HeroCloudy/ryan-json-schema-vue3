import type { App } from 'vue'
import JsonTable from './json-table'

JsonTable.install = (app: App) => {
  app.component(JsonTable.name, JsonTable)
}

export default JsonTable
