import type { OfItem, Schema, SchemaItem } from './types'

/**
 * 获取 SchemaProp 的默认值
 * @param schemaProp
 */
export const getSchemaPropDefaultValue = (schemaProp: SchemaItem): any => {
  if (!schemaProp) {
    return null
  }
  if (schemaProp.default !== undefined) {
    return schemaProp.default
  }
  switch (schemaProp.type) {
    case 'string':
      return ''
    case 'number':
      return 0
    case 'boolean':
      return false
    case 'array':
      return []
    case 'object':
      return {}
    default:
      return null
  }
}

export const buildSchema = (schema: Schema, fields?: string[]): Schema => {
  if (fields === undefined || fields === null) {
    return schema
  }

  if (fields.length === 0) {
    return {
      ...schema,
      properties: {}
    }
  }

  const properties: Record<string, SchemaItem> = {}
  fields.forEach((k: string) => {
    if (schema.properties[k]) {
      properties[k] = schema.properties[k]
    }
  })
  return {
    ...schema,
    properties
  }
}

export const getSchemaDefaultModel = (schema: Schema, fields?: string[]): Record<string, any> => {
  if (!schema || !schema.properties) {
    return {}
  }
  const innerSchema = buildSchema(schema, fields)
  const value: Record<string, any> = {}
  const { properties } = innerSchema
  Object.keys(properties).forEach((k) => {
    const item = properties[k]
    const key = item.prop || k

    value[key] = getSchemaPropDefaultValue(item)
  })
  return value
}

export const buildOfItem = (title: string, value: any): OfItem<any> => {
  return {
    const: value,
    title
  }
}
