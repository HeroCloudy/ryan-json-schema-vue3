---
title: JsonForm 表单
description: JsonForm 表单组件文档
---

# JsonForm JSON 表单

基于 Element Plus 中 ElForm 实现的 JSON Schema 表单。

## 基础用法

使用 `schema`、`uiSchema`、`model` 属性定义表单。

[//]: # (:::preview 测试组件)

[//]: # (demo-preview=../demos/json-schema/demo-basic.vue)

[//]: # (:::)

:::preview 日期动态禁用
demo-preview=../demos/json-schema/demo-date-disabled.vue
:::

## 组件 API

### Props 属性

| 参数       | 类型                  | 说明                             | 是否必填 | 可选值 | 默认值 |
|----------|---------------------|--------------------------------|------|-----|-----|
| schema   | Schema              | 表单 Schema                      | Y    | -   | -   |
| uiSchema | UiSchema            | 表单 UiSchema                    | N    | -   | {}  |
| model    | Record<string, any> | 表单模型，默认值可根据该属性传递               | Y    | -   | -   |
| column   | number              | 每行展示几个表单项                      | N    | -   | 3   |
| rules    | FormRules           | 表单校验规则，通 Element Plus 表单 rules | N    | -   | {}  |

### Methods 方法

| 方法名      | 说明   | 参数          | 返回值 |
|----------|------|-------------|-----|
| reset    | 重置表单 | -           | -   |
| validate | 表单校验 | callback 函数 | -   |

### Events 事件

| 事件名         | 说明          | 参数                                                                      |
|-------------|-------------|-------------------------------------------------------------------------|
| data-change | 表单项的值发生改变事件 | key: string 表单项的prop， value：any 表单项改变后的值，form: Record<string, any> 表单的值 |
| enter-up    | 键盘输入事件      | e: KeyboardEvent 键盘事件； form：Record<string, any> 表单的值                    |

### Slots 插槽

| 插槽名    | 说明    | 参数                             |
|--------|-------|--------------------------------|
| [prop] | 表单项插槽 | form: Record<string, any> 表单的值 |



