import { Schema, UiSchema } from './types'
import type { PropType } from 'vue'

export const basicSchemaProps = {
  schema: {
    type: Object as PropType<Schema>,
    required: true
  },
  uiSchema: {
    type: Object as PropType<UiSchema>,
    required: false,
    default: () => ({})
  }
} as const
