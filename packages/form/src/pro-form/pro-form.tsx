import { computed, defineComponent, ref } from 'vue'
import { proFormProps } from '../common/props'
import type { SchemaItem } from '@ryan-json-schema-vue3/utils'
import { bindEvent, bindMethod } from '../common/bind'
import JsonForm from '../json-form'

const NAME = 'ry-pro-form'

const ProForm = defineComponent({
  name: NAME,
  props: proFormProps,
  setup(props, context) {
    const formRef = ref()

    const { reset, validate } = bindMethod(() => formRef.value)

    context.expose({
      reset,
      validate
    })

    const innerSchema = computed(() => {
      if (!props.fields) {
        return props.schema
      }

      const properties: Record<string, SchemaItem> = {}
      if (props.schema && props.schema.properties) {
        props.fields.forEach((k: string) => {
          if (props.schema.properties[k]) {
            properties[k] = props.schema.properties[k]
          }
        })
      }

      return {
        ...props.schema,
        properties
      }
    })

    const innerProps = computed(() => {
      const temp = { ...props }
      delete temp.fields
      return temp
    })

    return () => (
      <JsonForm
        ref={formRef}
        {...innerProps.value}
        schema={innerSchema.value}
        v-slots={context.slots}
        {...bindEvent(context, props.model)}
      ></JsonForm>
    )
  }
})

export default ProForm
export type ProFormInstance = InstanceType<typeof ProForm>
