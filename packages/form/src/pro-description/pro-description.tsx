import { computed, defineComponent } from 'vue'
import { proDescriptionProps } from '../common/props'
import { buildSchema } from '@ryan-json-schema-vue3/utils'
import JsonDescription from '../json-description'

const NAME = 'ry-pro-description'

export default defineComponent({
  name: NAME,
  props: proDescriptionProps,
  setup(props, context) {
    const attrs = context.attrs

    const innerSchema = computed(() => {
      return buildSchema(props.schema, props.fields)
    })

    const innerProps = computed(() => {
      const temp = { ...props }
      delete temp.fields
      return temp
    })

    return () => (
      <JsonDescription
        {...attrs}
        {...innerProps.value}
        schema={innerSchema.value}
        v-slots={context.slots}
      ></JsonDescription>
    )
  }
})
