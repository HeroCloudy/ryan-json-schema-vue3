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
import { demoSchema } from '../constants'

const schema = ref(demoSchema)
const uiSchema = ref({
  id: { 'ui:hidden': true },
  gender: { 'ui:widget': 'radio' },
  favor: { 'ui:widget': 'checkbox' },
  timeOff: { 'ui:column': 2 },
  remark: { 'ui:column': 2, 'ui:widget': 'textarea', 'ui:options': { rows: 5 } }
})
const model = ref({})

// 模拟通过接口获取“兴趣”字段的选项
onMounted(() => {
  setTimeout(() => {
    schema.value.properties.favor.anyOf = [
      { const: 'sing', title: '唱歌' },
      { const: 'dance', title: '跳舞' },
      { const: 'sports', title: '运动' },
      { const: 'read', title: '阅读' }
    ]
  }, 2000)
})

const onDataChange = (key: string, value: any, formData: Record<string, any>) => {
  console.log(key, value, formData)
}
</script>

<style scoped lang="scss">
.json-schema-demo {
}
</style>
