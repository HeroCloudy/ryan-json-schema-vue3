<!--
 @name: json-schema-demo.vue
 @description: ry-json-form JSON表单基本使用
 @author: 程序员优雅哥 yygcoder
 @time: 2024/1/19 17:34
-->
<template>
  <el-switch
    v-model="readMode"
    active-text="只读模式"
    inactive-text="编辑模式"
    style="margin-bottom: 20px"
  ></el-switch>
  <ry-json-form-description
    ref="formDescriptionRef"
    :schema="schema"
    :ui-schema="uiSchema"
    :model="model"
    :column="2"
    @data-change="onDataChange"
    :read-mode="readMode"
    :fields="fields"
  ></ry-json-form-description>
  <el-button type="primary" @click="onSubmitClick">提交</el-button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { demoSchema } from '../constants'
import { getSchemaDefaultModel } from '@ryan-json-schema-vue3/utils'

const readMode = ref(false)

const formDescriptionRef = ref()

const onSubmitClick = () => {
  console.log(formDescriptionRef.value)
  formDescriptionRef.value.validate((valid: boolean) => {
    console.log('valid result', valid)
  })
}

const schema = ref(demoSchema)
const uiSchema = ref({
  id: { 'ui:hidden': true },
  gender: { 'ui:widget': 'radio' },
  favor: { 'ui:widget': 'checkbox' },
  timeOff: { 'ui:column': 2 },
  remark: { 'ui:column': 2, 'ui:widget': 'textarea', 'ui:options': { rows: 5 } }
})
const fields = ref(Object.keys(schema.value.properties))
schema.value.required = [...fields.value]
const model = ref(getSchemaDefaultModel(schema.value))

// 模拟通过接口获取“兴趣”字段的选项
onMounted(() => {
  setTimeout(() => {
    schema.value.properties.favor.anyOf = [
      { const: 'sing', title: '唱歌' },
      { const: 'dance', title: '跳舞' },
      { const: 'sports', title: '运动' },
      { const: 'read', title: '阅读' }
    ]
  }, 0)
})

const onDataChange = (key: string, value: any, formData: Record<string, any>) => {
  console.log(key, value, formData)
}
</script>

<style scoped lang="scss">
.json-schema-demo {
}
</style>
