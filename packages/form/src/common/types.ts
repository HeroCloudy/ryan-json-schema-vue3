import { FormRules } from 'element-plus'
import { BasicSchemaProp } from '@ryan-json-schema-vue3/utils'

export interface BasicFormProp extends BasicSchemaProp {
  model: Record<string, any>
  column?: number
  rules?: FormRules
}

export interface ProFormProp extends BasicFormProp {
  fields?: string[]
}
