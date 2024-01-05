import type { SetupContext } from 'vue'
import type { PageInfo } from './types'

export const bindEvent = (context: SetupContext) => {
  const onRowBtnClick = (key: string, row: any): void => {
    context.emit('row-btn-click', key, row)
  }

  const onRowSelected = (rows: Record<string, any>[]) => {
    context.emit('row-selected', rows)
  }

  const onPageChange = (pageInfo: PageInfo) => {
    context.emit('page-change', pageInfo)
  }

  return {
    onRowBtnClick,
    onRowSelected,
    onPageChange
  }
}
