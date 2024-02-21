import { defineComponent, ref } from 'vue'
import { jsonFormDescriptionProps } from '../common/props'
import ProForm from '../pro-form'
import ProDescription from '../pro-description'

const NAME = 'ry-json-form-description'

const JsonFormDescription = defineComponent({
  name: NAME,
  props: jsonFormDescriptionProps,
  setup(props, context) {
    const formRef = ref()

    const reset = () => {
      formRef.value && formRef.value.reset()
    }

    const validate = (callback: any) => {
      formRef.value && formRef.value.validate(callback)
    }

    context.expose({
      reset,
      validate
    })

    // if (formRef.value) {
    //   const { reset, validate } = bindMethod(() => formRef.value)
    //   context.expose({
    //     reset,
    //     validate
    //   })
    // }

    return () => {
      const { readMode, ...restProps } = props
      return readMode ? (
        <ProDescription {...restProps} v-slots={context.slots}>
          description
        </ProDescription>
      ) : (
        <ProForm ref={formRef} {...restProps} v-slots={context.slots}>
          form
        </ProForm>
      )
    }
  }
})

export default JsonFormDescription
