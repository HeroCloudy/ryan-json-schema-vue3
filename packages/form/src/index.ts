import type { App } from 'vue'
import JsonForm from './json-form'
import ProForm from './pro-form'
import JsonDescription from './json-description'
import ProDescription from './pro-description'
import JsonFormDescription from './json-form-description'

const components = [JsonForm, ProForm, JsonDescription, ProDescription, JsonFormDescription]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export { install, JsonForm, ProForm, JsonDescription, ProDescription, JsonFormDescription }

export type * from './common/types'
export * from './common/props'
export * from './common/bind'
