import type { App } from 'vue'
import ProTable from './pro-table'

ProTable.install = (app: App) => {
  app.component(ProTable.name, ProTable)
}

export default ProTable
