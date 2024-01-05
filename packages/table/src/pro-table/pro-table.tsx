import { computed, defineComponent, ref } from 'vue'
import { proTableProps } from '../common/props'
import type { SchemaItem } from '@ryan-json-schema-vue3/utils'
import JsonTable from '../json-table'

const NAME: string = 'ry-pro-table'

const ProTable = defineComponent({
  name: NAME,
  props: proTableProps,
  setup(props, context) {
    const jsonTableRef = ref()

    const innerSchema = computed(() => {
      if (!props.fields) {
        return props.schema
      }

      const properties: Record<string, SchemaItem> = {}
      props.fields.forEach((k) => {
        if (props.schema.properties[k]) {
          properties[k] = props.schema.properties[k]
        }
      })
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

    const getXTableRef = () => {
      return jsonTableRef.value && jsonTableRef.value.getXTableRef()
    }

    context.expose({
      getXTableRef
    })

    // const { onRowSelected, onRowSelected } = bindEvent(context)

    return () => (
      <JsonTable
        ref={jsonTableRef}
        {...innerProps.value}
        schema={innerSchema.value}
        v-slots={context.slots}
      ></JsonTable>
    )
  }
})

export default ProTable
