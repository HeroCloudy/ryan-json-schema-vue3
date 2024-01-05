import { BaseRender } from './base/base-render'
import type { VNode } from 'vue'
import { ElInputNumber } from 'element-plus'

export class NumberRender extends BaseRender {
  public render(): VNode {
    return (
      <ElInputNumber
        style={{ width: '100%' }}
        {...this.commonProps}
        v-model={this.model[this.prop]}
      />
    )
  }
}
