import type { Schema } from '../../types'

export const buildRules = (rules: any = {}, schema: Schema) => {
  const innerRules = { ...rules }

  const { properties } = schema
  const { required = [] } = schema

  required.forEach((k: string) => {
    if (properties[k]) {
      const prop = properties[k].prop || k
      addRuleItem(innerRules, prop, buildRequireRule(properties[k].description!))
    }
  })

  Object.keys(properties).forEach((k) => {
    const item = properties[k]
    const prop = item.prop || k

    if (item.required && required.findIndex((str: string) => str === prop) < 0) {
      addRuleItem(innerRules, prop, buildRequireRule(properties[k].description!))
    }
  })

  return innerRules
}

const addRuleItem = (rules: any, prop: string, ruleItem: any) => {
  if (!rules[prop]) {
    rules[prop] = []
  }
  rules[prop].push(ruleItem)
}

const buildRequireRule = (title: string) => {
  return { required: true, message: `${title}不能为空`, trigger: 'blur' }
}
