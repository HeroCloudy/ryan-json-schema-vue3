import {
  SchemaType,
  UI_COLUMN,
  UI_DISABLED,
  UI_HIDDEN,
  UI_OPTIONS,
  UI_WIDGET,
  UI_WIDTH,
  UiWidgets
} from './constants'

export interface OfItem<T> {
  title: string
  const: T // string | number | boolean;
}

export type SchemaFormat = 'date' | 'time' | 'date-time' | 'email' | string

export interface SchemaItem {
  description?: string
  type: SchemaType | string
  prop?: string
  format?: SchemaFormat
  oneOf?: OfItem<string | number | boolean>[]
  anyOf?: OfItem<SchemaType | string>[]
  default?: SchemaType | string
  required?: boolean
  updatable?: boolean
  maxLength?: number | string
  precision?: number | string
  scale?: number | string
}

export interface Schema {
  type?: SchemaType | string
  properties: Record<string, SchemaItem>
  required?: string[]
}

export type UiSchemaItem = {
  [UI_HIDDEN]?: boolean
  [UI_DISABLED]?: boolean
  [UI_WIDTH]?: number | 'auto'
  [UI_OPTIONS]?: Record<string, any>
  [UI_WIDGET]?: UiWidgets | string
  [UI_COLUMN]?: number
}

export type UiSchema = {
  [key: string]: UiSchemaItem
}

export interface BasicSchemaProp {
  schema: Schema
  uiSchema?: UiSchema
}
