import type { RowBtn } from '../../common/types'
import { ElButton, ElPopconfirm } from 'element-plus'

export const renderBtnItem = (rowBtn: RowBtn, rowBtnClick: (key: string) => void) => {
  const { type = 'default', key, flag, title } = rowBtn
  if (flag === 'DEL') {
    const delBtnSlot = {
      reference: () => (
        <ElButton type="danger" link>
          {title}
        </ElButton>
      )
    }

    return (
      <ElPopconfirm
        title="是否确认删除该记录？"
        cancel-button-text="取消"
        cancel-button-type="text"
        confirm-button-text="删除"
        confirm-button-type="danger"
        onConfirm={() => rowBtnClick(key)}
        v-slots={delBtnSlot}
      ></ElPopconfirm>
    )
  }

  return (
    <ElButton type={type} link onClick={() => rowBtnClick(key)}>
      {title}
    </ElButton>
  )
}
