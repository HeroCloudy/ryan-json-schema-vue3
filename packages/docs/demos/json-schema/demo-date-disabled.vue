<!--
 @name: json-schema-demo.vue
 @description: ry-json-form JSON表单基本使用
 @author: 程序员优雅哥 yygcoder
 @time: 2024/1/19 17:34
-->
<template>
  <ry-json-form
    :schema="schema"
    :ui-schema="uiSchema"
    :model="model"
    :column="2"
    @data-change="onDataChange"
  ></ry-json-form>

  <pre style="font-size: 12px; line-height: 16px">{{ JSON.stringify(model, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Schema, UiSchema } from '@ryan-json-schema-vue3/utils'

const schema = ref<Schema>({
  properties: {
    str: {
      type: 'string',
      description: '输入框'
    },
    beginDate: {
      type: 'string',
      format: 'date',
      description: '开始日期'
    },
    endDate: {
      type: 'string',
      format: 'date',
      description: '结束日期'
    }
  }
})
const uiSchema = ref<UiSchema>({})
const model = ref({})

onMounted(() => {})

const max = ref<number>()
const min = ref<number>()

const begin = ref<Date>()
const end = ref<Date>()

const beginDisabled = (time: Date) => {
  if (end.value) {
    return time.getTime() > end.value.getTime()
  }
}
const endDisabled = (time: Date) => {
  if (begin.value) {
    return time.getTime() < begin.value.getTime()
  }
}

uiSchema.value.beginDate = {
  'ui:options': {
    'disabled-date': beginDisabled
  }
}

uiSchema.value.endDate = {
  'ui:options': {
    'disabled-date': endDisabled
  }
}

const onDataChange = (key: string, value: any, formData: Record<string, any>) => {
  if (key === 'beginDate') {
    begin.value = value
  } else if (key === 'endDate') {
    end.value = value
  }
}
</script>

<style scoped lang="scss">
.json-schema-demo {
}
</style>
