import type { VNode } from 'vue'
import { BaseRender } from './base/base-render'
import { SchemaType } from '@ryan-json-schema-vue3/utils'
import { ElDatePicker } from 'element-plus'

/**
 * 下拉选渲染器
 */
export class DateRender extends BaseRender {
  public render(): VNode {
    let { format } = this.schema
    const { type } = this.schema

    // if (this.commonProps['disabled-date']) {
    //   this.isShow = false
    //   setTimeout(() => {
    //     this.isShow = true
    //   }, 30)
    // }

    // const innerDisabledDate = (value: Date) => {
    //   if (this.commonProps['disabled-date']) {
    //     return this.commonProps['disabled-date'](value)
    //   }
    //   return false
    // }

    if (type === SchemaType.ARRAY) {
      format += 'range'
      this.commonProps['range-separator'] = this.commonProps['range-separator'] || '-'
    }

    // this.commonProps['disabledDate'] = innerDisabledDate

    return (
      <ElDatePicker
        {...this.commonProps}
        v-model={this.model[this.prop]}
        type={
          format as
            | 'date'
            | 'datetime'
            | 'year'
            | 'month'
            | 'dates'
            | 'week'
            | 'datetimerange'
            | 'daterange'
            | 'monthrange'
        }
        clearable
      />
    )
  }
}
