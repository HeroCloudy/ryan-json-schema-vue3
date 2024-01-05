import type { VNode } from 'vue'
import { BaseRender } from './base/base-render'
import type { OfItem } from '@ryan-json-schema-vue3/utils'
import { ElSelect, ElOption } from 'element-plus'

/**
 * 下拉选渲染器
 */
export class SelectRender extends BaseRender {
  public render(): VNode {
    const { oneOf, anyOf } = this.schema
    const isMulti = !!anyOf
    const ofList = oneOf || anyOf || []

    return (
      <ElSelect
        {...this.commonProps}
        v-model={this.model[this.prop]}
        style={{ width: '100%' }}
        multiple={isMulti}
        clearable
      >
        {ofList.map((one: OfItem<any>) => (
          <ElOption label={one.title} value={one.const} />
        ))}
      </ElSelect>
    )
  }
}
