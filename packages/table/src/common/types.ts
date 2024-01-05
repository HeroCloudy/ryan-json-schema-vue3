import { BasicSchemaProp } from '@ryan-json-schema-vue3/utils'

export type PageInfo = {
  currentPage: number
  pageSize: number
  total?: number
}

export type BtnType =
  | ''
  | 'default'
  | 'success'
  | 'warning'
  | 'info'
  | 'text'
  | 'primary'
  | 'danger'
export interface RowBtn {
  key: string
  title: string
  type?: BtnType
  flag?: 'EDIT' | 'DEL' | null
}

export interface BasicTableProp extends BasicSchemaProp {
  model: Record<string, any>[]
  showPager?: boolean
  showIndex?: boolean
  selectionType?: 'checkbox' | ''
  pageInfo?: PageInfo
  optWidth?: string
  tableLoading?: boolean
  rowBtnList?: (row: Record<string, any>) => RowBtn[]
  rowKey?: string
}

export interface ProTableProp extends BasicTableProp {
  fields?: string[]
}
