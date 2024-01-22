---
title: ryan json schema
description: ryan json schema 介绍
---

# JSON Schema 介绍

JSON Schema 本质上也是一个 JSON 数据，但这个 JSON 数据不是用来描述业务数据，而是描述业务 JSON
数据字段信息、字段约束的一个JSON数据。

可以类比的理解为 XML 数据约束的 `dtd` 或 `Schema`。

关于 JSON Schema 具体可查看
[https://json-schema.org/](https://json-schema.org/)

# Ryan JSON Schema 介绍

Ryan JSON Schema 用来定义表单和列表，其 JSON Schema 并未完全使用标准的 JSON Schema 规范。

- 通过 `Schema` 描述表单或列表的字段信息
- 通过 `UiSchema` 描述表单或列表的样式及扩展信息

## Schema

JSON Schema 的类型定义在 `utils` 模块中，类型为 `Schema`。

```typescript
import type { Schema } from '@ryan-json-schema-vue3/utils'
```

`Schema` 每个属性的含义如下：

| 属性名        | 类型                         | 是否必填 | 描述      |
|------------|----------------------------|------|---------|
| properties | Record<string, SchemaItem> | Y    | 表单的字段对象 |
| required   | string[]                   | N    | 必填字段数组  |

`SchemaItem` 描述一个字段的信息，每个属性含义如下：

| 属性名         | 类型                                       | 是否必填 | 描述               |
|-------------|------------------------------------------|------|------------------|
| prop        | string                                   | 否    | 字段属性名，默认与 key 一致 |
| type        | string、number、 array 、 boolean           | 是    | 字段的类型            |
| description | string                                   | 否    | 字段对应的label       |
| format      | `date`、`time`、`date-time`、`email`、string | 否    | 字段的格式            |
| oneOf       | OfItem[]                                 | 否    | 单选选项数组           |
| anyOf       | OfItem[]                                 | 否    | 多选选项数组           |
| default     | string、number、 array 、 boolean           | 否    | 该字段的默认值          |
| required    | boolean                                  | 否    | 该字段是否必填          |
| maxLength   | number、string                            | 否    | 最大长度             |

`OfItem` 描述单选/多选选项信息，每个属性含义如下：

| 属性名   | 类型                    | 是否必填 | 描述      |
|-------|-----------------------|------|---------|
| title | string                | Y    | 选项展示的名称 |
| const | string、number、boolean | Y    | 选项对应的值  |

## UiSchema

| 属性名         | 类型                                                     | 是否必填 | 描述                    |
|-------------|--------------------------------------------------------|------|-----------------------|
| ui:hidden   | boolean                                                | N    | 该字段是否展示，默认 false      |
| ui:disabled | boolean                                                | N    | 该字段是否禁用状态，默认 false    |
| ui:width    | number、`auto`                                          | N    | 该字段默认宽度               |
| ui:widget   | `select`、`radio`、`checkbox`、`swith`、`input`、`textarea` | N    | 该字段渲染组件，默认为 input 输入框 |
| ui:column   | number                                                 | N    | 该字段在表单中占据的列数          |
| ui:options  | Record<string, any>                                    | N    | 扩展属性，这些扩展属性会添加到表单项上   |
