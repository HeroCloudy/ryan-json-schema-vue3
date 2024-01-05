import { UI_DISABLED, UI_OPTIONS } from '@ryan-json-schema-vue3/utils'
import type { SchemaItem, UiSchemaItem } from '@ryan-json-schema-vue3/utils'
import type { VNode } from 'vue'

export abstract class BaseRender {
  protected readonly schema: SchemaItem
  protected readonly uiSchema: UiSchemaItem
  protected readonly model: Record<string, any>

  protected commonProps: Record<string, any>
  protected prop: string

  constructor(schema: SchemaItem, uiSchema: UiSchemaItem, model: Record<string, any>) {
    this.schema = schema
    this.uiSchema = uiSchema
    this.model = model

    this.commonProps = this.initCommonProps()

    this.prop = this.schema.prop!
  }

  private initCommonProps(): Record<string, any> {
    const commonProps = {
      ...(this.uiSchema[UI_OPTIONS] || {})
    }

    commonProps.disabled = this.uiSchema[UI_DISABLED] === true
    commonProps.placeholder = commonProps.placeholder || this.schema.description

    return commonProps
  }

  public abstract render(): VNode
}
