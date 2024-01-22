import type { App, Plugin } from 'vue'
import JsonForm from './json-form'
import ProForm from './pro-form'
import JsonDescription from './json-description'
import ProDescription from './pro-description'
import JsonFormDescription from './json-form-description'

const components = [JsonForm, ProForm, JsonDescription, ProDescription, JsonFormDescription]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const install = (app: App, option: any): void => {
//   components.forEach((component) => {
//     app.component(component.name, component)
//   })
// }

const RyanFrom: Plugin<[]> = {
  install: (app: App): void => {
    components.forEach((component) => {
      app.component(component.name, component)
    })
  }
}

export default RyanFrom

export { JsonForm, ProForm, JsonDescription, ProDescription, JsonFormDescription }

export type * from './common/types'
export * from './common/props'
export * from './common/bind'
