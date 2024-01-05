import { defineComponent } from 'vue'
import { jsonFormDescriptionProps } from '../common/props'
import ProForm from '../pro-form'
import ProDescription from '../pro-description'

const NAME = 'ry-json-form-description'

const JsonFormDescription = defineComponent({
  name: NAME,
  props: jsonFormDescriptionProps,
  setup(props, { slots }) {
    return () => {
      const { readMode, ...restProps } = props
      return readMode ? (
        <ProDescription {...restProps} v-slots={slots}>
          description
        </ProDescription>
      ) : (
        <ProForm {...restProps} v-slots={slots}>
          form
        </ProForm>
      )
    }
  }
})

export default JsonFormDescription
