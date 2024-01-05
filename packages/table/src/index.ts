import type { App } from 'vue'
import JsonTable from './json-table'
import ProTable from './pro-table'

const components = [JsonTable, ProTable]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export { install, JsonTable, ProTable }

export type * from './common/types'
export * from './common/props'
export * from './common/bind'
export * from './common/constants'
