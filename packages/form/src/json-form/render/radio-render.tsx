import type { VNode } from 'vue'
import { BaseRender } from './base/base-render'
import type { OfItem } from '@ryan-json-schema-vue3/utils'
import { ElRadioGroup, ElRadio } from 'element-plus'

/**
 * 单选钮渲染器
 */
export class RadioRender extends BaseRender {
  public render(): VNode {
    const { oneOf } = this.schema
    return (
      <ElRadioGroup {...this.commonProps} v-model={this.model[this.prop]}>
        {oneOf!.map((one: OfItem<any>) => (
          <ElRadio label={one.const}>{one.title}</ElRadio>
        ))}
      </ElRadioGroup>
    )
  }
}
