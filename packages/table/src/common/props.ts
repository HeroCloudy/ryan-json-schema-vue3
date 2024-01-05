import type { PropType } from 'vue'
import { basicSchemaProps } from '@ryan-json-schema-vue3/utils'
import type { PageInfo, RowBtn } from './types'

export const basicTableProps = {
  ...basicSchemaProps,
  model: {
    type: Array as PropType<Record<string, any>[]>,
    required: true
  },
  showPager: {
    type: Boolean,
    required: false,
    default: true
  },
  showIndex: {
    type: Boolean,
    required: false,
    default: false
  },
  selectionType: {
    type: String as PropType<'checkbox' | ''>,
    required: false,
    default: ''
  },
  pageInfo: {
    type: Object as PropType<PageInfo>,
    required: false,
    default: () => ({
      currentPage: 0,
      pageSize: 10,
      total: 0
    })
  },
  rowBtnList: {
    type: Function as PropType<(row: Record<string, any>) => RowBtn[]>,
    required: false,
    default: null
  },
  tableLoading: {
    type: Boolean,
    required: false,
    default: false
  },
  optWidth: {
    type: String,
    required: false,
    default: '150'
  },
  rowKey: {
    type: String,
    required: false,
    default: '_X_ROW_KEY'
  }
} as const

export const proTableProps = {
  ...basicTableProps,
  fields: {
    type: Array as PropType<string[]>,
    required: false
  }
} as const
