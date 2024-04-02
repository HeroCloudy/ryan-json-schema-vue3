import type { FormRules } from 'element-plus'
import type { PropType } from 'vue'
import { basicSchemaProps } from '@ryan-json-schema-vue3/utils'

export const basicFormProps = {
  ...basicSchemaProps,
  model: {
    type: Object as PropType<Record<string, any>>,
    required: true
  },
  column: {
    type: Number,
    required: false,
    default: 3
  },
  rules: {
    type: Object as PropType<FormRules>,
    required: false,
    default: () => ({})
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    required: false,
    default: 'right'
  }
} as const

export const proFormProps = {
  ...basicFormProps,
  fields: {
    type: Array as PropType<string[]>,
    required: false
  }
} as const

export const basicDescriptionProps = {
  ...basicSchemaProps,
  model: {
    type: Object as PropType<{ [key: string]: any }>,
    required: true
  },
  column: {
    type: Number,
    required: false,
    default: 3
  },
  size: {
    type: String,
    required: false,
    default: 'default'
  },
  border: {
    type: Boolean,
    required: false,
    default: true
  }
} as const

export const proDescriptionProps = {
  ...basicDescriptionProps,
  fields: {
    type: Array as PropType<string[]>,
    required: false
  }
} as const

export const jsonFormDescriptionProps = {
  ...proFormProps,
  ...proDescriptionProps,
  readMode: {
    type: Boolean,
    required: false,
    default: false
  }
} as const
