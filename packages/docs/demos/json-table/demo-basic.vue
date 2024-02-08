<!--
 @name: json-schema-demo.vue
 @description: ry-json-form JSON表单基本使用
 @author: 程序员优雅哥 yygcoder
 @time: 2024/1/19 17:34
-->
<template>
  <ry-pro-table :schema="schema" :ui-schema="uiSchema" :model="model"></ry-pro-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getTableDefaultUiSchema, Schema } from '@ryan-json-schema-vue3/utils'

const schema = ref<Schema>({
  properties: {
    id: {
      type: 'string',
      description: 'ID'
    },
    gender: {
      type: 'string',
      description: '性别',
      oneOf: []
    },
    username: {
      type: 'string',
      description: '姓名'
    },
    age: {
      type: 'number',
      description: '年龄'
    }
  }
})
const uiSchema = ref({
  ...getTableDefaultUiSchema(Object.keys(schema.value.properties), 180, true)
})

setTimeout(() => {
  schema.value.properties.gender.oneOf = [
    { const: '0', title: '男' },
    { const: '1', title: '女' }
  ]
}, 10000)

const list: any = []
for (let i = 1; i < 4; i++) {
  list.push({
    id: `${i}`,
    username: `张三${i}`,
    age: 20 + i,
    gender: `${i % 2}`
  })
}
console.log(list)
const model = ref(list)
</script>

<style scoped lang="scss"></style>
