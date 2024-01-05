import { defineComponent, ref } from 'vue'
import { jsonFormDescriptionProps } from '../common/props'
import ProForm from '../pro-form'
import ProDescription from '../pro-description'
import { bindEvent, bindMethod } from '../common/bind'

const NAME = 'ry-json-form-description'

const JsonFormDescription = defineComponent({
  name: NAME,
  props: jsonFormDescriptionProps,
  setup(props, context) {
    const formRef = ref()

    if (formRef.value) {
      const { reset, validate } = bindMethod(() => formRef.value)
      context.expose({
        reset,
        validate
      })
    }

    return () => {
      const { readMode, ...restProps } = props
      return readMode ? (
        <ProDescription {...restProps} v-slots={context.slots}>
          description
        </ProDescription>
      ) : (
        <ProForm
          ref={formRef}
          {...restProps}
          v-slots={context.slots}
          {...bindEvent(context, props.model)}
        >
          form
        </ProForm>
      )
    }
  }
})

export default JsonFormDescription
