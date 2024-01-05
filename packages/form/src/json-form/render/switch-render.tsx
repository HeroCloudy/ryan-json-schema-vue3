import { BaseRender } from './base/base-render'
import type { VNode } from 'vue'
import { ElSwitch } from 'element-plus'

export class SwitchRender extends BaseRender {
  render(): VNode {
    return <ElSwitch {...this.commonProps} v-model={this.model[this.prop]} />
  }
}
