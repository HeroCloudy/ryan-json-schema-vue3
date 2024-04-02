import type { VNode } from 'vue'
import type { FormInstance } from 'element-plus'
import type { EventsParam } from './utils/render-item'
import { computed, defineComponent, reactive, ref, watchEffect } from 'vue'
import { ElForm, ElRow } from 'element-plus'
import { renderFormItem } from './utils/render-item'
import { buildRules } from './utils/rule-utils'
import { basicFormProps } from '../common/props'
import './style.scss'

const NAME: string = 'ry-json-form'

const JsonForm = defineComponent({
  name: NAME,
  props: basicFormProps,
  setup(props, context) {
    // 表单元素的引用
    const formRef = ref<FormInstance>()
    // 表单的值
    let form = reactive<Record<string, any>>(props.model)

    // 重置表单
    const reset = () => {
      formRef.value && formRef.value.resetFields()
    }

    const validate = (callback: any) => {
      formRef.value && formRef.value.validate(callback)
    }

    // 对外暴露的方法
    context.expose({
      reset,
      validate
    })

    let defaultSpan = 24 / props.column

    watchEffect(() => {
      form = reactive<any>(props.model)
      defaultSpan = 24 / props.column
    })

    const onChange = (key: string, value: any): void => {
      context.emit('data-change', key, value, form)
    }

    const onEnterUp = (e: KeyboardEvent): void => {
      context.emit('enter-up', e, props.model)
    }

    const events: EventsParam = {
      change: onChange,
      enter: onEnterUp
    }

    const renderForm = () => {
      formRef.value && formRef.value.clearValidate()

      const { properties } = props.schema
      const formItems: VNode[] = []
      Object.keys(properties).forEach((prop: string) => {
        const itemSchema = properties[prop]
        itemSchema.prop = itemSchema.prop || prop

        const uiItem = props.uiSchema[prop]
        const formItem = renderFormItem(
          itemSchema,
          uiItem,
          props.model,
          context.slots,
          defaultSpan,
          events
        )
        if (formItem) {
          formItems.push(formItem)
        }
      })
      return formItems
    }

    const innerRules = computed((): any => {
      const { schema, rules } = props
      return buildRules(rules, schema)
    })

    const onSubmit = (event: Event) => {
      // 阻止表单的默认提交行为
      if (event) {
        if (event.stopPropagation) {
          event.stopPropagation()
        }
        if (event.preventDefault) {
          event.preventDefault()
        }
      }
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { schema, uiSchema, model, column, rules, labelPosition, ...restProps } = props
      return (
        <div className={NAME}>
          <ElForm
            {...restProps}
            ref={formRef}
            model={form}
            rules={innerRules.value}
            labelWidth="auto"
            onSubmit={onSubmit}
            labelPosition={labelPosition}
          >
            <ElRow gutter={20}>{renderForm()}</ElRow>
          </ElForm>
        </div>
      )
    }
  }
})

export default JsonForm
