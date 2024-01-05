import type { VNode } from 'vue'
import { BaseRender } from './base/base-render'
import { UI_WIDGET } from '@ryan-json-schema-vue3/utils'
import { ElInput } from 'element-plus'

/**
 * 下拉选渲染器
 */
export class TextRender extends BaseRender {
  public render(): VNode {
    // input 的 type 属性
    const type = (this.uiSchema as any)[UI_WIDGET] === 'textarea' ? 'textarea' : 'text'

    return <ElInput {...this.commonProps} type={type} v-model={this.model[this.prop]} clearable />
  }
}
