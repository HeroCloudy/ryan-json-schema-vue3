import { BaseRender } from './base/base-render'
import type { VNode } from 'vue'
import type { OfItem } from '@ryan-json-schema-vue3/utils'
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'

export class CheckboxRender extends BaseRender {
  render(): VNode {
    const { anyOf = [] } = this.schema
    return (
      <ElCheckboxGroup {...this.commonProps} v-model={this.model[this.prop]}>
        {anyOf.map((item: OfItem<any>) => (
          <ElCheckbox label={item.const}>{item.title}</ElCheckbox>
        ))}
      </ElCheckboxGroup>
    )
  }
}
