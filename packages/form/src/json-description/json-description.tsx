import { defineComponent } from 'vue'
import { basicDescriptionProps } from '../common/props'
import { renderDescriptionItem } from './render-item'
import type { VNode } from 'vue'

const NAME = 'ry-json-description'

const JsonDescription = defineComponent({
  name: NAME,
  props: basicDescriptionProps,
  setup(props, context) {
    const renderDescriptions = () => {
      const { properties } = props.schema
      const items: VNode[] = []
      Object.keys(properties).forEach((prop: string) => {
        const itemSchema = properties[prop]
        itemSchema.prop = itemSchema.prop || prop

        const uiItem = props.uiSchema[prop]
        const descriptionItem = renderDescriptionItem(
          itemSchema,
          uiItem,
          props.model,
          context.slots
        )
        if (descriptionItem) {
          items.push(descriptionItem)
        }
      })
      return items
    }

    return () => {
      const { column } = props
      return (
        <el-descriptions {...context.attrs} column={column} border>
          {renderDescriptions()}
        </el-descriptions>
      )
    }
  }
})

export default JsonDescription
